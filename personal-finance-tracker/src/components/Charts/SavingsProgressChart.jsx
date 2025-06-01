import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';

const savingsMonthlyData = {
    '2025-01': [{ month: 'Jan', savings: 800 }],
    '2025-02': [{ month: 'Feb', savings: 1200 }],
    '2025-03': [{ month: 'Mar', savings: 1600 }],
    '2025-04': [{ month: 'Apr', savings: 1900 }],
    '2025-05': [{ month: 'May', savings: 2300 }],
};

export default function SavingsProgressChart({ month }) {
    const data = savingsMonthlyData[month] || [];

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto my-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Savings Progress ({month})
            </h2>
            {data.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="savings"
                            stroke="#60a5fa"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            ) : (
                <p className="text-center text-gray-500">No data available for {month}</p>
            )}
        </div>
    );
}
