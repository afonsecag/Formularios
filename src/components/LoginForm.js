import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onAuthenticate }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/login', {
                login,
                password
            });

            if (response.data.status === "success") {
                onAuthenticate();
            } else {
                setError('The provided credentials are incorrect.');
            }
        } catch (error) {
            setError('The provided credentials are incorrect.');
        }
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;