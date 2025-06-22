import { Button } from "react-bootstrap";

const Logout= ()=>{
    const logoutHandler= ()=>{
        localStorage.removeItem('token');
        window.location='/';
    }
    return <Button variant="danger" onClick={logoutHandler}>Logout</Button>
}

export default Logout;