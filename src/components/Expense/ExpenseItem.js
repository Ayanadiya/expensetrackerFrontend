import { Button, Card, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store/Expense";


const ExpenseItem=(props)=>{
    const dispatch=useDispatch()
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
            if(!response.ok)
            {
                throw new Error("Response was not okay");
            }
            const data=await response.json();
            alert(data.message);
            dispatch(expenseActions.delete(id))
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