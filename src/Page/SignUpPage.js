import React from "react";
import SignUpForm from '../components/Form/SignUpForm'
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const SignUpPage=()=>{
    return (
        <React.Fragment>
            <SignUpForm />
            <Card>Have an Account?
                <NavLink to='/'>Login</NavLink>
            </Card>
        </React.Fragment>
    )
}

export default SignUpPage;