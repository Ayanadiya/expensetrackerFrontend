import React, {useState} from "react";
import { Container, Form, Button} from "react-bootstrap";

const SignUpForm=()=>{
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [confirmPasword, setConfirmPassword]=useState("");

    const nameChangeHandler=e=>setName(e.target.value);
    const emailChangeHandler=e=>setEmail(e.target.value);
    const passwordChangeHandler=e=>setPassword(e.target.value);
    const confirmPaswordChangeHandler=e=>setConfirmPassword(e.target.value);

    const formSubmitHandler=async(event)=>{
        event.preventDefault();
        if(!name || !email || !password || !confirmPasword)
        {
            return alert("All fields are required");
        }
        if(password!==confirmPasword)
        {
            return alert("Password is not matching");
        }
        const user={
            "name":name,
            "email":email,
            "password":password
        }
        try {
            const response=await fetch("http://127.0.0.1:3000/user/signup",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            })
            const data=await response.json();
            console.log(data);
            alert("User has successfully signed Up");
            console.log("User has successfully signed Up");
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Form className="p-4 border rounded shadow-sm bg-white"
             style={{minWidth:'300px', maxWidth:'400px', width:'100%'}}>
                <h3 className="text-center mb-4">SignUp</h3>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={nameChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={emailChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={passwordChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" value={confirmPasword} onChange={confirmPaswordChangeHandler} />
                </Form.Group>
                <Button className="border rounded" variant="primary" onClick={formSubmitHandler}>SignUp</Button>
            </Form>
        </Container>
    )
}

export default SignUpForm;
