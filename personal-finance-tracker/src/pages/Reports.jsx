import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import IncomeExpenseChart from '../components/Charts/IncomeExpenseChart';
import SavingsProgressChart from '../components/Charts/SavingsProgressChart';
import SpendingCategoryPieChart from '../components/Charts/SpendingCategoryPieChart';
import SpendingTrendChart from '../components/Charts/SpendingTrendChart';
import backgroundImage from '../assets/finance-bg.jpg';

export default function Reports() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [selectedMonth, setSelectedMonth] = useState('2025-05');

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    const handleLogout = () => {
        logout();
        navigate('/');  // Redirect to home page after logout
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <header className="flex justify-between items-center p-6 bg-white/80 shadow mb-4">
                <h1 className="text-2xl font-bold text-gray-800">Reports & Insights</h1>
                <div className="flex gap-4 items-center">
                    <input
                        type="month"
                        value={selectedMonth}
                        onChange={handleMonthChange}
                        className="border p-2 rounded"
                    />
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <IncomeExpenseChart month={selectedMonth} />
                <SavingsProgressChart month={selectedMonth} />
                <SpendingCategoryPieChart month={selectedMonth} />
                <SpendingTrendChart month={selectedMonth} />
            </main>
        </div>
    );
}
