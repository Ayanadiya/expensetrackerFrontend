import { Button } from "react-bootstrap";

const EmailButton=()=>{

    const buttonHandler= async ()=>{
        try {
            const response= await fetch('http://127.0.0.1:4000/user/verify', {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                }
            });
            const data=await response.json();
            alert(data.message)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Button variant='danger' onClick={buttonHandler}>Verify Email</Button>
    )
}

export default EmailButton;