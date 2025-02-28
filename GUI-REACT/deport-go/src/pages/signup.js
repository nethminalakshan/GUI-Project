import React, { useState } from "react";
import "./signup.css"; // Import your CSS file
import logo from "../assets/images/2.png"; // Import your logo

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLogin ? "/login" : "/signup";
        
        try {
            const response = await fetch(`http://localhost:5000${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong");
        }
    };

    return (
        <div>
            <img className="logo" src={logo} alt="Logo" />
            <div className="container">
                <div className="login-container"> {/* Updated className */}
                    <h2>{isLogin ? "Login" : "Signup"}</h2>
                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        )}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">
                            {isLogin ? "Login" : "Signup"}
                        </button>
                    </form>
                    <p>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? "Signup" : "Login"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;