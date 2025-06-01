import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/finance-bg.jpg';
import logo from '../assets/Finance.png';

export default function Home() {
    const { user } = useAuth();

    if (user) {
        return (
            <div
                className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <img src={logo} alt="Finance Logo" className="absolute top-6 left-6 h-36 w-auto" />
                <h1 className="text-4xl font-bold mb-4 text-white shadow">Welcome back, {user.name || user.email}!</h1>
                <p className="mb-6 text-lg text-white">Quick summary of your finances:</p>
                <div className="space-y-4 max-w-md w-full bg-white/80 p-6 rounded shadow">
                    <Link to="/dashboard" className="text-blue-600 hover:underline">
                        Go to Dashboard
                    </Link>
                    <Link to="/reports" className="text-blue-600 hover:underline">
                        View Reports
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center p-4"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex flex-col items-center justify-center text-center px-4 py-20 backdrop-blur-sm bg-white/70 min-h-[calc(100vh-64px)]">
                <img src={logo} alt="Finance Logo" className="w-24 h-24 mb-6" />
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Personal Finance Tracker</h1>
                <p className="mb-8 text-lg text-gray-600">Track your income, expenses, savings goals, and more with ease.</p>
                <div className="space-x-4">
                    <Link to="/login" className="hover:bg-blue-500 transition text-red-500 px-6 py-3 rounded bg-teal-200">
                        Login
                    </Link>
                    <Link to="/register" className="hover:bg-gray-300 transition text-gray-800 px-6 py-3 rounded bg-gray-200">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}
