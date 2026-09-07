import "./login.css";

import banner from "../assets/banner1.png";

export function Login() {
    return (
        <div className="container">
            <div className="login-container">
                <div className="img-container">
                    <img src={banner} alt="Login Illustration" />
                </div>
                <div className="login-box">
                    <div className="login-header">
                        <h2>Welcome Back</h2>
                        <p>Sign in to continue.</p>
                    </div>

                    <div className="login-form">
                        <form>
                            <input type="text" placeholder="Username or Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Login</button>
                        </form>
                    </div>

                    <div className="extra-links">
                        Don't have an account? <a href="#">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}