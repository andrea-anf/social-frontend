import Header from "../components/Header"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";


import '../styles/signup.css'


function Signup(params) {
    const navigate = useNavigate();

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors},
    } = useForm()

    const formSubmit = (data) => {
        console.log(JSON.stringify(data));
        fetch('http://localhost:8800/api/auth/register', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                navigate("/login");

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div className="signup-page">
            <Header/>
            <h2 className="signup-title">Join the class!</h2>
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
                        className={`valid-input ${
                            errors.username ? "invalid-input" : ""
                        }`}
                        placeholder="Username"
                        {...register("username", {
                        required: "Username is required",
                        pattern: {
                            value: /^[a-zA-Z]+$/,
                            message: "Username must be a valid string",
                        },
                        minLength: {
                            value: 3,
                            message: "Username should be greater than 3 characters",
                        },
                        maxLength: {
                            value: 20,
                            message: "Username shouldn't be greater than 20 characters",
                        },
                        })}
                    />
                    <div className="invalid-feedback">
                        {errors?.username?.message}
                    </div>
                </div>

                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        className={`valid-input ${
                        errors.email ? "invalid-input" : ""
                        }`}
                        placeholder="Email"
                        {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                            message: "Email must be a valid email address",
                        },
                        })}
                    />
                    <div className="invalid-feedback">
                        {errors?.email?.message}
                    </div>
                </div>
                
                <div className="input-container">
                <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className={`valid-input ${
                      errors.password ? "invalid-input" : ""
                    } `}
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^[a-zA-Z]+[0-9]+$/,
                        message: "Password must be alpha numeric",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be atleast 6 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.password?.message}
                  </div>
                </div>
                
                <div className="input-container">
                    <label htmlFor="password-check">Confirm Password</label>
                    <input
                        type="password"
                        name="password-check"
                        className={`valid-input ${
                        errors.password_check ? "invalid-input" : ""
                        } `}
                        placeholder="Password confirm"
                        {...register("password_check", {
                        required: "Password is required",
                        validate: (value) => {
                            if (watch('password') !== value) {
                              return "Passwords should match!";
                            }
                          }
                        })}
                    />
                    <div className="invalid-feedback">
                        {errors?.password_check?.message}
                    </div>
                </div>
                <div className="input-container">
                    <div className="checkbox-input">
                        <input
                            type="checkbox"
                            name="checkbox"
                            className={`valid-input ${
                            errors.checkbox ? "invalid-input" : ""
                            } `}
                            {...register("conditions_check", {
                            required: "Please accept conditions"
                            })}
                        />
                        <label htmlFor="checkbox">Conditions to accept</label>
                    </div>

                    <div className="invalid-feedback">
                        {errors?.conditions_check?.message}
                    </div>
                </div>
                
                <button name="signup-button" type="submit" className="signup-button">
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default Signup