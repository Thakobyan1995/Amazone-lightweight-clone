import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img 
                  className="login__logo"
                  src="https://trimpo.org/wp-content/uploads/Amazon.jpg"
                  alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button 
                      className="login__signInButton" 
                      type="submit"
                      onClick={(e) => e.preventDefault()}
                    >
                      Sign in
                    </button>
                </form>

                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-
                    Based Ads Notice
                </p>
                <button 
                  className="login__registerButton"
                  onClick={(e) => e.preventDefault()}
                >
                    Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
