import React, {useState} from "react";
import {Redirect, useHistory} from "react-router-dom";
import {Button, Input} from "antd";
import {UserService} from "../../services/User";
import {useSelector} from "react-redux";

const LoginComponent = () => {
    const history = useHistory();
    const userState = useSelector(
        (state) => state.userReducer
    );
    const [hasSubmit, setHasSubmit] = useState(false);
    const handleRedirectToRegister = () => history.push('/registration');

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const name = e && e.target && e.target.name ? e.target.name : "";
        const value = e && e.target && e.target.value ? e.target.value : "";
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        setHasSubmit(true);
        UserService.login(formData.email, formData.password);
    };

    return (
        <div className="custom-container flex-row align-center" style={{height: '100vh'}}>
            <div className="border-e8" style={{padding: '24px', maxWidth: '400px'}}>
                <div className='flex-col align-center'>

                    <img src={'https://c.ndtvimg.com/2021-02/4lo9ita_elon-musk-dogecoin-meme_625x300_04_February_21.jpg'} style={{width: '100px', height: '100px'}} alt='logo'/>

                    <div
                        style={{
                            fontSize: "2rem",
                            padding: 50,
                            textAlign: 'center'
                        }}
                    >
                        <div className="flex-row justify-center w-100">
                            Welcome
                        </div>
                        <div className="flex-row justify-center w-100">
                            Please log in
                        </div>
                    </div>
                </div>

                {userState.isAuthenticated && <Redirect to={"/"}/>}
                <div style={{fontSize: "16px", color: "red"}}>
                    {hasSubmit && userState.error ? userState.errorMsg : null}
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Input
                                name="email"
                                id="emailinput"
                                type="text"
                                onPressEnter={handleSubmit}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Input.Password
                                name="password"
                                id="passwordinput"
                                type="password"
                                onPressEnter={handleSubmit}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <br></br>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Button
                                type="primary"
                                onClick={handleSubmit}
                            >
                                Login
                            </Button>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Button
                                type="link"
                                onClick={handleRedirectToRegister}
                            >
                                Registration
                            </Button>
                        </div>
                        <br/>
                        <br/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
