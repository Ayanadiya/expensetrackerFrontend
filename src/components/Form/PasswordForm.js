import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const PasswordForm=()=>{
    const [email,setEmail]=useState('');
    const [isLoading, setIsLoading]=useState(false);

    const emailChangeHandler=e=>setEmail(e.target.value);

    const formSubmitHandler=async(event)=>{
        event.preventDefault();
        try {
            setIsLoading(true);
            const response=await fetch('http://127.0.0.1:4000/password',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({email})
            })
            const data=await response.json();
            alert(data.message);
            setEmail('');
        } catch (error) {
            console.log(error);
        }
    }
    let text=<p>Sending...</p>;
    if(!isLoading)
    {
        text=(
            <Container className="d-flex justify-content-center align-items-center vh-100">
                        <Form className="p-4 broder rounded shadow-sm bg-white" 
                        style={{minWidth:'300px', maxWidth:'400px', width:'100%'}}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={emailChangeHandler} />
                            </Form.Group>
                            <Button variant="primary" onClick={formSubmitHandler}>Send</Button>
                        </Form>
                    </Container>
        )
    }
    return text;
}

export default PasswordForm;