import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const monthlyData = {
    '2025-01': [{ name: 'Jan', Income: 2000, Expenses: 1200 }],
    '2025-02': [{ name: 'Feb', Income: 2200, Expenses: 1300 }],
    '2025-03': [{ name: 'Mar', Income: 2500, Expenses: 1400 }],
    '2025-04': [{ name: 'Apr', Income: 2700, Expenses: 1600 }],
    '2025-05': [{ name: 'May', Income: 3000, Expenses: 1800 }],
};

export default function IncomeExpenseChart({ month }) {
    const data = monthlyData[month] || [];

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto my-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Income vs Expenses ({month})
            </h2>
            {data.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Income" fill="#4ade80" />
                        <Bar dataKey="Expenses" fill="#f87171" />
                    </BarChart>
                </ResponsiveContainer>
            ) : (
                <p className="text-center text-gray-500">No data available for {month}</p>
            )}
        </div>
    );
}
