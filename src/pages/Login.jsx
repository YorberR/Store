import React, { useRef } from "react";
import '../styles/login.scss';
import logo from "../assets/logos/logo_yard_sale.svg";

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usaname: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="login">
            <div className="login-container">
                <img src={logo} alt="logo" className="logo" />
                <form action="/" className="form" ref={form}>
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="text" name="email" placeholder="tienda@example.com" className="input input-email"/>
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password" />
                    <button 
                        onClick={handleSubmit}
                        className="primary-button login-button">
                    log in
                    </button>
                    <a href="/">Forgot my password</a>
                </form>
                <button 
                    className="secondary-button signup-button"
                >
                    Sign up
                </button>
            </div>
        </div>

    );
}

export default Login;