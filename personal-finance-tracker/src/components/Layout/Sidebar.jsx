import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="w-60 bg-gray-100 p-4 shadow-md min-h-screen">
            <h2 className="text-lg font-bold text-gray-700 mb-6">Navigation</h2>
            <ul className="space-y-4">
                <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>Dashboard</NavLink></li>
                <li><NavLink to="/dashboard/overview" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>Overview</NavLink></li>
                <li><NavLink to="/dashboard/transactions" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>Transactions</NavLink></li>
                <li><NavLink to="/dashboard/budget" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>Budget</NavLink></li>
            </ul>
        </aside>
    );
}