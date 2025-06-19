import React from "react";
import LoginForm from "../components/Form/LoginForm";
import classes from './LoginPage.module.css';

const LoginPage=()=>{
    return (
        <div className={classes.container}>
            <LoginForm/>
            <div className={classes.text}>
                <h3>Don't have an account? SignUp</h3>
            </div>
        </div>
    )
}

export default LoginPage;