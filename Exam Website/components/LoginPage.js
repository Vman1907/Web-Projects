import React from 'react'
import "./Login.css"
import logo from "./unnamed 1.png"

export default function Login(){
    return (
        <div>
            <img src={logo} alt="logo" />
            <div class="row justify-content-center">
                <div class="col-lg-4 col-10 wrapper">
                    <span className="header">Student Login</span>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                    <span className="_or">or</span>
                    <button>Register Now!!</button>
                    <span className="_hr" />
                    <a href="#">forgot password?</a>
                </div>
            </div>
        </div>
    )
}