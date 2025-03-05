import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import logo from '../assets/images/2.png';
import Footer from '../components/Footer';

export default function Login() {
    const [values, setValues] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/login', values);

            if (response.status === 200) {
                setMessage('Login successful!');
                localStorage.setItem('token', response.data.token); // Store token
                navigate('/'); // Redirect on success
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Invalid credentials. Try again.');
        }
    };

    return (
        <div>
            <img className="logo1" src={logo} alt="Logo" />
            <div className='login-container1'>
                <h2>Sign-in</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Enter Email" onChange={handleInput} required />
                    <input type="password" name="password" placeholder="Enter Password" onChange={handleInput} required />
                    <button type="submit">Log in</button>
                    
                    {message && <p className="success-message1">{message}</p>}
                    {error && <p className="error-message1">{error}</p>}

                    <Link to="/signup">Create Account</Link>
                </form>
            </div>
            <Footer className='foot'/>
        </div>
    );
}
