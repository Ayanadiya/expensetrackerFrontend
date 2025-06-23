import { Button, Card, Row } from "react-bootstrap";
import { useContext } from "react";
import ExpenseContext from "../store/ExpenseContext";


const ExpenseItem=(props)=>{
    const expensectx=useContext(ExpenseContext);
    const expense=props.expense;
    
    const editHandler=(expense)=>{
        props.openEditing(expense);
    }

    const deleteHandler=async (id)=>{
        try {
            const response= await fetch(`http://127.0.0.1:4000/expense/expense/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                }
            })
            if(response.status===204)
            {
                expensectx.deleteExpense(id)
            }
            const data=await response.json();
            alert(data.message);
        } catch (error) {
            console.log(error)
        } 
    }

    return (
        <Card >
            <Row className="d-flex">
                <h4>{expense.category} {expense.amount} {expense.description}</h4>
                <Button onClick={()=>{editHandler(expense)}}>Edit</Button>
                <Button onClick={()=>{deleteHandler(expense._id)}}>Delete</Button>
            </Row>
        </Card>
    )
}

export default ExpenseItem;