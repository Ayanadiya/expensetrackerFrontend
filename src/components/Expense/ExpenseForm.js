import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store/Expense";


const ExpenseForm=(props)=>{
    const dispatch=useDispatch();
    const [amount, setAmount]=useState('');
    const [description, setDescription]=useState('');
    const [category, setCategory]=useState('');

    const {isEditing, currentExpense}=props;

    const amountChangeHandler=e=>setAmount(e.target.value);
    const descriptionChangeHandler=e=>setDescription(e.target.value);
    const categoryChangeHandler=e=>setCategory(e.target.value);


    useEffect(()=>{
        if(isEditing && currentExpense!==null)
        {
            setAmount(currentExpense.amount);
            setDescription(currentExpense.description);
            setCategory(currentExpense.category);
        }
    },[isEditing, currentExpense])

    let Title=isEditing?"Edit Expense":"Add Expense";
    let buttonTitle=isEditing?"Update":"Add";

    const formSubmitHandler=async (event)=>{
        event.preventDefault();
        try {
            const newexpense={
                amount:amount,
                description:description,
                category:category
            }
            console.log(newexpense);
            const url=isEditing?`http://127.0.0.1:4000/expense/expense/${currentExpense._id}`:'http://127.0.0.1:4000/expense/expense'
            const method=isEditing?'PUT':'POST'
            const response=await fetch(url, {
                method:method,
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                },
                body:JSON.stringify(newexpense)
            });
            if(!response.ok)
            {
                console.log('response was not okay');
            }
            const data=await response.json();
            const id=isEditing?currentExpense._id:data._id;
            isEditing?dispatch(expenseActions.edit({newexpense,id})):dispatch(expenseActions.add(data));
            if(isEditing){
                props.closeEditing();
            }
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
                <h3 className="text-center mb-4">{Title}</h3>
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
                <Button variant="primary" onClick={formSubmitHandler}>{buttonTitle}</Button>
            </Form>
        </Container>
    )
}

export default ExpenseForm;