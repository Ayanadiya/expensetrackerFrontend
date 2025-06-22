import React, { useReducer } from "react";

const ExpenseContext= React.createContext({
    expenses:[],
    addExpense:()=>{},
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
    return state
}
export const ExpenseProvider=(props)=>{
    const [expenseState,dispatchExpense]=useReducer(expenseReducer,defaultExpense);
    const addExpense=(expense)=>{
        dispatchExpense({type:"add", item:expense});
    }

    const expenseContext={
        expenses:expenseState.expenses,
        addExpense:addExpense
    }

    return <ExpenseContext.Provider value={expenseContext}>{props.children}</ExpenseContext.Provider>
}

export default ExpenseContext;