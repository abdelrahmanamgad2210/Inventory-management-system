import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (res.status === 200) {
                localStorage.setItem('auth', true); // Save authentication state
                navigate('/home'); // Redirect to the home page
            } else {
                setError(data.message || 'Invalid username or password');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='container-fluid p-5'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        className='form-control'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className='text-danger mt-2'>{error}</div>}
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <button type='submit' className='btn btn-primary'>
                        Login
                    </button>
                    <Link to="/register" className="btn btn-secondary">
                        Register
                    </Link>
                </div>
            </form>
        </div>
    );
}
