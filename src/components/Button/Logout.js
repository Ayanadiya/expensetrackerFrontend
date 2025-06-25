import { Button } from "react-bootstrap";
import { authActions } from "../store/Auth";
import { useDispatch } from "react-redux";

const Logout= ()=>{
    const dispatch=useDispatch();
    const logoutHandler= ()=>{
        dispatch(authActions.logout());
        localStorage.removeItem('token');
        window.location='/';
    }
    return <Button variant="danger" onClick={logoutHandler}>Logout</Button>
}

export default Logout;