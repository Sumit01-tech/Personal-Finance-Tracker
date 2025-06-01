import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Sample monthly expense data
const monthlyCategoryData = {
    '2025-01': [4000, 1500, 12000, 2000, 1000],
    '2025-02': [4500, 1800, 13000, 2500, 1200],
    '2025-03': [5000, 2000, 15000, 3000, 2000],
    '2025-04': [4800, 1600, 14500, 2800, 1500],
    '2025-05': [5200, 2100, 15500, 3100, 2200],
};

const categoryLabels = ['Food', 'Transport', 'Rent', 'Entertainment', 'Utilities'];
const categoryColors = ['#f87171', '#60a5fa', '#34d399', '#fbbf24', '#a78bfa'];

export default function SpendingCategoryPieChart({ month }) {
    const data = monthlyCategoryData[month] || [];

    const chartData = {
        labels: categoryLabels,
        datasets: [
            {
                label: 'Expenses by Category',
                data: data,
                backgroundColor: categoryColors,
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="bg-white p-4 rounded shadow w-full max-w-md mx-auto my-4">
            <h2 className="text-lg font-semibold mb-4 text-center">
                Spending by Category ({month})
            </h2>
            {data.length > 0 ? (
                <Pie data={chartData} />
            ) : (
                <p className="text-center text-gray-500">No data available for {month}</p>
            )}
        </div>
    );
}
