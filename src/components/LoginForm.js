import React, { useEffect } from "react";


function LoginForm() {
    useEffect(() => {
        document.title = 'Login Form';
    }, []);
    return (
        <div className="LF-page-body">
            <div className="LF-login-container">
                <div className="LF-login-content-container">
                    <div className="LF-login-text-box">
                        <h2>Login to your account</h2>
                    </div>
                    <form action="#" method="post">
                        <div className="LF-form-group">
                            <label htmlFor="uname"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" className="LF-input" required />
                        </div>
                        <div className="LF-form-group">
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" className="LF-input" required />
                            <a href="#" className="LF-forgot-password">Forgot Password?</a>
                        </div>
                        <button type="submit" className="LF-button">Login</button>
                    </form>
                    <div className="LF-register-text-box">
                        <span>Don't have an account yet? </span>
                        <a href="/register" className="LF-register-link">Register</a>
                    </div>
                </div>
                <div className="LF-logo-container">
                    <div className="LF-logo">
                        <div className="LF-logo-text-box">
                            <h2>Iot Emission Test</h2>
                        </div>
                        <div className="LF-logo-img">
                            <img src="assets/imgs/Logo.svg" alt="IOT Emission Test" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
