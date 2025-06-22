import React, {useState} from "react";
import { Container, Form, Button } from "react-bootstrap";

const ResetPasswordForm=()=>{
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const emailChangeHandler=e=>setEmail(e.target.value);
    const passwordChangeHandler=e=>setPassword(e.target.value);

    const formSubmitHandler=async (event)=>{
        event.preventDefault();
        if(!email || !password)
        {
            return alert("All fields are required");
        }
        const credentials={
            email,
            password
        };
        try {
            const response= await fetch('http://127.0.0.1:4000/password/reset', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(credentials)
            });
            const data= await response.json();
            window.location="/";
            console.log(data);
        } catch (error) {
            console.log(error);
            alert("Something went wrong. Please try again");
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Form className="p-4 broder rounded shadow-sm bg-white" 
            style={{minWidth:'300px', maxWidth:'400px', width:'100%'}}>
                <h3 className="text-center mb-4">Reset Password</h3>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={emailChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={passwordChangeHandler} />
                </Form.Group>
                <Button variant="primary" onClick={formSubmitHandler}>Reset</Button>
            </Form>
        </Container>
    )
}

export default ResetPasswordForm;