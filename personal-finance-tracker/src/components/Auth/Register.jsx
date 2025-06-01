import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import backgroundImage from '../../assets/finance-bg.jpg';
import logo from '../../assets/Finance.png';

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const validate = () => {
        if (!formData.name.trim()) return "Name is required";
        if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email format";
        if (formData.password.length < 6) return "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword) return "Passwords do not match";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        try {
            // Simulate async registration (replace with real API call)
            await new Promise((res) => setTimeout(res, 1000));

            // Save user to localStorage (demo only)
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            if (existingUsers.some(u => u.email === formData.email)) {
                setError('Email is already registered');
                setLoading(false);
                return;
            }

            localStorage.setItem('users', JSON.stringify([...existingUsers, formData]));
            toast.success('Registration successful! Please login.');
            navigate('/login');
        } catch {
            setError('Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen relative flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <img
                src={logo}
                alt="Finance Tracker Logo"
                className="absolute top-6 left-6 h-36 w-auto"
            />

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-full max-w-sm"
                noValidate
            >
                <h2 className="text-xl font-semibold mb-4">Create Your Account</h2>

                {error && <p className="text-red-600 mb-3" role="alert">{error}</p>}

                <input
                    type="text"
                    placeholder="Name"
                    className="w-full border p-2 mb-3"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={loading}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 mb-3"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={loading}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 mb-3"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    disabled={loading}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border p-2 mb-4"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    disabled={loading}
                    required
                />

                <button
                    type="submit"
                    className={`w-full py-2 rounded text-white ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    disabled={loading}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
}
