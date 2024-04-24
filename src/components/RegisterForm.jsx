import React, { useEffect } from "react";

function RegisterForm() {
    useEffect(() => {
        document.title = 'Register Form';
    }, []);
    return (
        <div className="RF-page-body">
            <div className="RF-register-container">
                <div className="RF-register-form-container">
                    <h2>Create Account</h2>
                    <form action="#" method="post">
                        <input type="text" id="RF-firstName" name="firstName" className="RF-input" placeholder="First Name" required />
                        <input type="text" id="RF-lastName" name="lastName" className="RF-input" placeholder="Last Name" required />
                        <input type="email" id="RF-email" name="email" className="RF-input" placeholder="Email" required />
                        <input type="tel" id="RF-phone" name="phone" className="RF-input" placeholder="Phone Number" />
                        <input type="password" id="RF-password" name="password" className="RF-input" placeholder="Password" required />
                        <input type="password" id="RF-confirmPassword" name="confirmPassword" className="RF-input" placeholder="Confirm Password" required />
                        <button type="submit">Create Account</button>
                    </form>
                    <div className="RF-login-link">
                        <p>Already have an account? <a href="/">Log In</a></p>
                    </div>
                </div>
                <div className="RF-logo-container">
                    <div className="RF-logo">
                        <div className="RF-logo-text-box">
                            <h2>Iot Emission Test</h2>
                        </div>
                        <div className="RF-logo-img">
                            <img src="assets/imgs/Logo.svg" alt="IOT Emission Test" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
