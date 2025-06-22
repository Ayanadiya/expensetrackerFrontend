import { useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ExpenseContext from "../store/ExpenseContext";

const ExpenseForm=()=>{
    const expensectx=useContext(ExpenseContext);
    const [amount, setAmount]=useState('');
    const [description, setDescription]=useState('');
    const [category, setCategory]=useState('');

    const amountChangeHandler=e=>setAmount(e.target.value);
    const descriptionChangeHandler=e=>setDescription(e.target.value);
    const categoryChangeHandler=e=>setCategory(e.target.value);

    const formSubmitHandler=async (event)=>{
        event.preventDefault();
        try {
            const expense={
                amount:amount,
                description:description,
                category:category
            }
            console.log(expense);
            // const response=await fetch('http://127.0.0.1:4000/expense', {
            //     method:'POST',
            //     headers:{
            //         'Content-Type':'application/json',
            //         'Authorization':`Bearer ${localStorage.getItem('token')}`
            //     },
            //     body:JSON.stringify(expense)
            // });
            // if(!response.ok)
            // {
            //     console.log('response was not okay');
            // }
            // const data=await response.json();
            expensectx.addExpense(expense);
            setAmount('');
            setCategory('');
            setDescription('');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Form className="p-4 broder rounded shadow-sm bg-white" 
            style={{minWidth:'300px', maxWidth:'400px', width:'100%'}}>
                <h3 className="text-center mb-4">Add Expense</h3>
                <Form.Group className="mb-3">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" value={amount} onChange={amountChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={description} onChange={descriptionChangeHandler} />
                </Form.Group>
                <Form.Select value={category} onChange={categoryChangeHandler}>
                    <option>Select Category</option>
                    <option value="Fuel">Fuel</option>
                    <option value="EMI">EMI</option>
                    <option value="Health">Health</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Personal">Personal</option>
                </Form.Select>
                <Button variant="primary" onClick={formSubmitHandler}>Add</Button>
            </Form>
        </Container>
    )
}

export default ExpenseForm;