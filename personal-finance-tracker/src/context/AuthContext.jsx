import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    // Register adds new user to 'users' array in localStorage
    const register = (newUser) => {
        try {
            // Get existing users or empty array
            const usersRaw = localStorage.getItem('users');
            const users = usersRaw ? JSON.parse(usersRaw) : [];

            // Check if email already exists
            if (users.some(u => u.email === newUser.email)) {
                toast.error('Email already registered. Please login.');
                return false;
            }

            // Add new user
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            toast.success('Registration successful! Please login.');
            return true;
        } catch (error) {
            console.error('Registration error:', error);
            toast.error('Failed to register, please try again.');
            return false;
        }
    };

    // Login checks users array for credentials and sets current user
    const login = (userData) => {
        const usersRaw = localStorage.getItem('users');
        if (!usersRaw) {
            toast.error('No users found. Please register first.');
            return false;
        }

        const users = JSON.parse(usersRaw);
        const foundUser = users.find(
            (u) => u.email === userData.email && u.password === userData.password
        );

        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem('user', JSON.stringify(foundUser)); // current logged-in user
            toast.success('Login successful!');
            return true;
        } else {
            toast.error('Invalid email or password');
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        toast.success('Logged out!');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
