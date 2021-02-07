import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import './App.css';
import Login from "../pages/Common/Login/Login";
import NotFoundPage from "../pages/Common/NotFoundPage";
import {useSelector} from "react-redux";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export const ProtectedRoute = ({component, allowedUser, ...rest}) => {
    const userState = useSelector((state) => state.userReducer);
    const userType = userState.currentUser && userState.currentUser.personEnum && userState.currentUser.personEnum.toLowerCase();
    const isAuthenticated = userState.isAuthenticated;
    // If user is null, it means the page is a common page. Else, check if user is a tutee or a tutor, and if this user
    // is authorized to view the page
    const isAppropriateUser = (!allowedUser) || (allowedUser && userType === allowedUser);

    const routeComponent = (props) =>
        isAuthenticated ?
            isAppropriateUser ?
                (React.createElement(component, props))
                : (<Redirect to={{pathname: "/"}}/>)
            : (<Redirect to={{pathname: "/login"}}/>);
    return <Route {...rest} render={routeComponent}/>;
};

export default App;
