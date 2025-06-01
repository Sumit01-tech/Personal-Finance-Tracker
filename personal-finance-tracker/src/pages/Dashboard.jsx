import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Overview from "../components/Dashboard/Overview";
import Transactions from "../components/Dashboard/Transactions";
import Budget from "../components/Dashboard/Budget";
import backgroundImage from '../assets/finance-bg.jpg';
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
    const navigate = useNavigate();
    const { logout, user } = useAuth();
    const [selectedMonth, setSelectedMonth] = useState("2025-05");

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const goToReports = () => {
        navigate("/reports");
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                <div className="text-right">
                    <p className="text-md font-medium text-gray-700">
                        Welcome, {user?.name || "User"}
                    </p>
                    <div className="flex gap-2 mt-2 justify-end">
                        <button
                            onClick={goToReports}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            Go to Reports
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Month Filter */}
            <div className="mb-6">
                <label htmlFor="month" className="block text-sm font-medium text-red-950 mb-2">
                    Select Month:
                </label>
                <select
                    id="month"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-48 px-3 py-2 rounded-md border border-gray-300 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    {["2025-01", "2025-02", "2025-03", "2025-04", "2025-05"].map((month) => (
                        <option key={month} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
            </div>

            {/* Overview & Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Overview selectedMonth={selectedMonth} />
                <Budget selectedMonth={selectedMonth} />
            </div>

            {/* Transactions */}
            <div className="mt-6">
                <Transactions selectedMonth={selectedMonth} />
            </div>
        </div>
    );
}
