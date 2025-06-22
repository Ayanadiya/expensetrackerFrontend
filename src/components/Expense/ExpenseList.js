import React, {useContext} from "react";
import ExpenseContext from "../store/ExpenseContext";

const ExpenseList=()=>{
    const expensectx=useContext(ExpenseContext);
    
    return (
        <ul>
            <h1>Your Expenses</h1>
            {
                expensectx.expenses.map((expense)=>{
                    return <li key={expense._id}>{expense.category} {expense.amount} {expense.description}</li>
                })
            }
        </ul>
    )
}

export default ExpenseList;