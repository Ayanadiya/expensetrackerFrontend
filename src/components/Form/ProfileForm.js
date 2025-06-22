import React, {useState, useEffect} from "react";
import { Container, Form, Button, Row } from "react-bootstrap";

const ProfileForm=(props)=>{
    const [fullName, setFullName]=useState("");
    const [imageUrl, setImageUrl]=useState("");

    const fullNameChangeHandler=e=>setFullName(e.target.value);
    const imageUrlChangeHandler=e=>setImageUrl(e.target.value);

    const fetchProfile= async()=>{
        try {
            const response=await fetch('http://127.0.0.1:4000/user/profile',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                }
            });
            const data= await response.json();
            setFullName(data.name);
            setImageUrl(data.imageUrl);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
       fetchProfile();
    },[])

    const formSubmitHandler=async (event)=>{
        event.preventDefault();
        const profile={
            fullName,
            imageUrl
        };
        try {
            const response= await fetch('http://127.0.0.1:4000/user/addprofile', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                },
                body:JSON.stringify(profile)
            });
            const data= await response.json();
            console.log(data);
            props.onClose();
        } catch (error) {
            console.log(error);
            alert("Something went wrong. Please try again");
        }
    }

     return (
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Form className="p-4 broder rounded shadow-sm bg-white" 
                style={{minWidth:'300px', maxWidth:'400px', width:'100%'}}>
                    <Row>
                        <h3 className="text-center mb-4">Contact Details</h3>
                        <Button onClick={props.onClose}>Cancel</Button>
                    </Row>
                   
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" value={fullName || ''} onChange={fullNameChangeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Profile Photo Url</Form.Label>
                        <Form.Control type="text" value={imageUrl || ''} onChange={imageUrlChangeHandler} />
                    </Form.Group>
                    <Button variant="primary" onClick={formSubmitHandler}>Update</Button>
                </Form>
            </Container>
        )
}

export default ProfileForm;