import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import LoginPage from "../Page/LoginPage";
import SignUpPage from "../Page/SignUpPage";
import HomePage from "../Page/HomePage";
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
        </Switch>
        </>
    )
}

export default AppRouter;