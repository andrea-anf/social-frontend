import Header from "../components/Header"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

import '../styles/signup.css'




function Login(params) {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors},
    } = useForm()

    const formSubmit = (data) => {
        const fdata = {
            email: data.username,
            password: data.password
        }
        fetch('http://localhost:8800/api/auth/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fdata),
            })
            .then((response) => response.json())
            .then((data) => {
                if(data !== "user not found") {
                    console.log('Success login:', data);
                    navigate("/");
                } else {
                    console.log('Failed login:', data);
                }


            })
            .catch((error) => {
                console.error('Error:', error);
            });    }

    return (
        <div>
            <Header/>
            <h2 className="signup-title">Login</h2>
            <form
                method="POST"
                onSubmit={handleSubmit(formSubmit)}
                autoComplete="off"
                className="form-container">

                <div className="input-container">
                    <label htmlFor="username"> Username </label>
                    <input
                        type="text"
                        name="username"
                        className={`valid-input ${errors.username ? "invalid-input" : ""}`}
                        placeholder="Username"
                        {...register("username", {required: "Username is required"})}
                    />
                    <div className="invalid-feedback">
                        {errors?.username?.message}
                    </div>
                </div>

                <div className="input-container">
                <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className={`valid-input ${errors.password ? "invalid-input" : ""} `}
                    placeholder="Password"
                    {...register("password", {required: "Password is required"})}
                  />
                  <div className="invalid-feedback">
                    {errors?.password?.message}
                  </div>
                </div>

                <button name="signup-button" type="submit" className="signup-button">
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default Login