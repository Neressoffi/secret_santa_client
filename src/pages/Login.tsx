import React, {useState} from 'react';
import '../assets/styles/login.css'
import {AppIcon} from "../components/icon/AppIcon";
import {AppLogo} from "../components/icon/AppLogo";
import {useNavigate} from "react-router-dom";
import {APP_MAIN_URL} from "../../src/utils/constant";

const Login = (props?: any) => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const validateForm = () => {
        const newErrors = {
            username: '',
            password: '',
        };

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }

        setErrors(newErrors);
        return newErrors.username.length === 0 && newErrors.password.length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('User data submitted:', formData);

            fetch(APP_MAIN_URL + "auth/login",
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(formData)
                }
            ).then((token) => {
                console.log(token)
                console.log('User login successfully!');
                navigate('/dashboard');
            })

            // Perform API request to add user
            console.log('User data submitted:', formData);
            // Reset the form
            setFormData({
                username: '',
                password: '',
            });
            setErrors({
                username: '',
                password: '',
            });
        }
    };


    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={(e) => handleSubmit(e)}>
                        <AppLogo className="wrap-login-logo"/>

                        <div className="login__field">
                            <span className="login__icon">
                                <AppIcon name={"BsPerson"} size={16}/>
                            </span>
                            <input
                                type="text"
                                className="login__input"
                                name="username"
                                id="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={(e) => handleChange(e)}
                            />
                            {errors.username && <div style={{color: 'red'}}>{errors.username}</div>}
                        </div>

                        <div className="login__field">
                            <span className="login__icon">
                                <AppIcon name={"BsLock"} size={16}/>
                            </span>
                            <input
                                type="password"
                                className="login__input"
                                placeholder="Password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={(e) => handleChange(e)}
                            />
                            {errors.password && <div style={{color: 'red'}}>{errors.password}</div>}
                        </div>
                        {/*<Button text={"Log In Now"} className={"button login__submit"}/>*/}
                        <button className="button login__submit justify-content-around" type={"submit"}>
                            Log In Now
                            <AppIcon name={"BsChevronDoubleRight"} size={16}/>
                        </button>
                    </form>
                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons">
                            <a href="#" className="social-login__icon fab fa-instagram">
                                <AppIcon name={"BsInstagram"} size={16}/>
                            </a>
                            <a href="#" className="social-login__icon fab fa-facebook">
                                <AppIcon name={"BsFacebook"} size={16}/>
                            </a>
                            <a href="#" className="social-login__icon fab fa-twitter">
                                <AppIcon name={"BsTwitter"} size={16}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"/>
                    <span className="screen__background__shape screen__background__shape3"/>
                    <span className="screen__background__shape screen__background__shape2"/>
                    <span className="screen__background__shape screen__background__shape1"/>
                </div>
            </div>
        </div>
    )
}
export default Login;