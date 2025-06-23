import React, {useContext} from "react";
import ExpenseContext from "../store/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList=(props)=>{
    const expensectx=useContext(ExpenseContext);
    
    return (
        <ul>
            <h1>Your Expenses</h1>
            {
                expensectx.expenses.map((expense)=>{
                    return <ExpenseItem key={expense._id} expense={expense} openEditing={props.openEditing}/>
                })
            }
        </ul>
    )
}

export default ExpenseList;