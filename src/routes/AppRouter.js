import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import LoginPage from "../Page/LoginPage";
import SignUpPage from "../Page/SignUpPage";
import HomePage from "../Page/HomePage";
import PasswordForm from "../components/Form/PasswordForm";
import ResetPasswordForm from "../components/Form/ResetPasswordForm";
const AppRouter=()=>{
    const isLogged=localStorage.getItem('token');

    return (
        <>
        <Switch>
            {isLogged && <Route path="/home">
            <HomePage/>
            </Route>}
            <Route exact path ="/">
            <LoginPage />
            </Route>
            <Route path="/signUp">
            <SignUpPage />
            </Route>
            <Route path="/password">
            <PasswordForm/>
            </Route>
            <Route path="/reset">
            <ResetPasswordForm/>
            </Route>
        </Switch>
        </>
    )
}

export default AppRouter;