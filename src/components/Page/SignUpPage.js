import React from "react";
import SignUpForm from "../Form/SignUpForm";
import { Card } from "react-bootstrap";

const SignUpPage=()=>{
    return (
        <React.Fragment>
            <SignUpForm />
            <Card>Have an Account? Login</Card>
        </React.Fragment>
    )
}

export default SignUpPage;