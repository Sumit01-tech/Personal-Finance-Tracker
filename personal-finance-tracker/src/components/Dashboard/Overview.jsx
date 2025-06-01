import React from "react";

const monthlyData = {
    "2025-01": { income: 1800, expenses: 1100, savings: 700 },
    "2025-02": { income: 2000, expenses: 1200, savings: 800 },
    "2025-03": { income: 2200, expenses: 1400, savings: 800 },
    "2025-04": { income: 2500, expenses: 1500, savings: 1000 },
    "2025-05": { income: 2300, expenses: 1300, savings: 1000 },
};

export default function Overview({ selectedMonth }) {
    // Fallback to May 2025 if month not found
    const { income, expenses, savings } = monthlyData[selectedMonth] || monthlyData["2025-05"];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto my-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Financial Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-green-100 p-4 rounded">
                    <p className="font-semibold text-lg">Income</p>
                    <p className="text-2xl text-green-700">${income.toLocaleString()}</p>
                </div>
                <div className="bg-red-100 p-4 rounded">
                    <p className="text-lg font-semibold">Expenses</p>
                    <p className="text-2xl text-red-700">${expenses.toLocaleString()}</p>
                </div>
                <div className="bg-blue-100 p-4 rounded">
                    <p className="text-lg font-semibold">Savings</p>
                    <p className="text-2xl text-blue-700">${savings.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}
