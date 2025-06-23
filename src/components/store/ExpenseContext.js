import React, { useEffect, useReducer } from "react";

const ExpenseContext= React.createContext({
    expenses:[],
    addExpense:()=>{},
    editExpense:()=>{},
    deleteExpense:()=>{},
})

const defaultExpense={
    expenses:[]
}

const expenseReducer=(state,action)=>{
    if(action.type==="add")
    {
        return {
            expenses:[...state.expenses,action.item]
        }
    }
    if(action.type==="set")
    {
        return {
            expenses:[...action.item]
        }
    }
    if(action.type==="edit")
    {
        return {
            expenses:state.expenses.map((expense)=>{
                if(expense._id===action.id)
                {
                    expense={
                       ...expense,
                        amount:action.item.amount,
                        description:action.item.description,
                        category:action.item.category
                    }
                }
                return expense;
            })
        }
    }
    if(action.type==="delete")
    {
        return{
            expenses:state.expenses.filter(expense=>expense.id!==action.id)
        }
    }
    return state
}
export const ExpenseProvider=(props)=>{
    const [expenseState,dispatchExpense]=useReducer(expenseReducer,defaultExpense);

    const fetchExpense=async ()=>{
        try {
            const response=await fetch('http://127.0.0.1:4000/expense/expenses',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                }
            });
            const data=await response.json()
            dispatchExpense({type:"set", item:data});
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchExpense();
    },[]);
    
    const addExpense=(expense)=>{
        dispatchExpense({type:"add", item:expense});
    }

    const editExpense=(expense,id)=>{
        console.log(expense,id)
        dispatchExpense({type:"edit", item:expense, id:id});
    }

    const deleteExpense=(id)=>{
        dispatchExpense({type:"delete", id:id});
    }

    const expenseContext={
        expenses:expenseState.expenses,
        addExpense:addExpense,
        editExpense:editExpense,
        deleteExpense:deleteExpense
    }

    return <ExpenseContext.Provider value={expenseContext}>{props.children}</ExpenseContext.Provider>
}

export default ExpenseContext;