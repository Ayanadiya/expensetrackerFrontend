import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { expenseActions } from "../store/Expense";
import ExpenseItem from "./ExpenseItem";


const ExpenseList=(props)=>{
    const dispatch=useDispatch();
    const expenses= useSelector(state =>state.expense.expenses)
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
            dispatch(expenseActions.set(data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchExpense();
    },[]);
    
    return (
        <ul>
            <h1>Your Expenses</h1>
            {
                expenses.map((expense)=>{
                    return <ExpenseItem key={expense._id} expense={expense} openEditing={props.openEditing}/>
                })
            }
        </ul>
    )
}

export default ExpenseList;