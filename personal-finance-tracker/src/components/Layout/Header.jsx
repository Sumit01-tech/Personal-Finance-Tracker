import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <header className="bg-white shadow-md px-6  py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-blue-700">💰Finance Tracker</Link>
            <nav className="space-x-4">
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
                <Link to="/reports" className="text-gray-700 hover:text-blue-600">Reports</Link>
                {user ? (
                    <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Logout</button>
                ) : (
                    <Link to="/login" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Login</Link>
                )
                }
            </nav>
        </header>
    );
}