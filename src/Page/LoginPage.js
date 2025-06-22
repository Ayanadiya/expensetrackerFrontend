import React from "react";
import LoginForm from "../components/Form/LoginForm";
import classes from './LoginPage.module.css';
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const LoginPage=()=>{
    return (
        <div className={classes.container}>
            <LoginForm/>
            <div className={classes.text}>
                <h3>Don't have an account?
                    <NavLink to='/signUp'>SignUp</NavLink>
                </h3>
            </div>
        </div>
    )
}

export default LoginPage;