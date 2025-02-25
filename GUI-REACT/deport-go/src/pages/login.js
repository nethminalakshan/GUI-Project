import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/login', values);
            setMessage(response.data.message);
            if (response.status === 200) {
                navigate('/dashboard');  // Redirect to dashboard or home page
            }
        } catch (error) {
            setMessage('Invalid credentials. Try again.');
        }
    };

    return (
        <div>
            <h2>Sign-in</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter Email" onChange={handleInput} required />
                <input type="password" name="password" placeholder="Enter Password" onChange={handleInput} required />
                <button type="submit">Log in</button>
                <p>{message}</p>
                <Link to="/signup">Create Account</Link>
            </form>
        </div>
    );
}
