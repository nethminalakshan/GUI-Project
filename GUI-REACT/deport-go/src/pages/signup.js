import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/signup', values);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Signup failed. Try again.');
        }
    };

    return (
        <div>
            <h2>Sign-up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Name" onChange={handleInput} required />
                <input type="email" name="email" placeholder="Enter Email" onChange={handleInput} required />
                <input type="tel" name="phone" placeholder="Enter Phone" onChange={handleInput} required />
                <input type="password" name="password" placeholder="Enter Password" onChange={handleInput} required />
                <button type="submit">Sign up</button>
                <p>{message}</p>
                <Link to="/login"><button>Login</button></Link>
            </form>
        </div>
    );
}

export default Signup;
