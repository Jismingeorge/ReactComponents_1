import React from "react";
import './Signup.css';

import user_icon from "../Assets/user.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/padlock.png"

const Signup = () => {
    return ( 
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
            </div>
            <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id"/>
            </div>
            <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password"/>
            </div>

            <div className="forgot-password">Forgot Password? <span>Click here!</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
            
        </div>
    </div>
     );
}
 
export default Signup