import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

// Simulated monthly spending data
const monthlySpending = {
    '2025-01': 12000,
    '2025-02': 15000,
    '2025-03': 13000,
    '2025-04': 17000,
    '2025-05': 16000,
};

const getMonthLabel = (key) => {
    const [year, month] = key.split('-');
    return new Date(`${year}-${month}-01`).toLocaleString('default', { month: 'short' });
};

export default function SpendingTrendChart({ month }) {
    // Filter and prepare chart data up to selected month
    const keys = Object.keys(monthlySpending).filter((k) => k <= month);
    const labels = keys.map(getMonthLabel);
    const values = keys.map((k) => monthlySpending[k]);

    const data = {
        labels,
        datasets: [
            {
                label: 'Monthly Spending',
                data: values,
                fill: false,
                borderColor: '#3b82f6',
                tension: 0.3,
            },
        ],
    };

    return (
        <div className="bg-white p-4 rounded shadow w-full max-w-2xl mx-auto my-4">
            <h2 className="text-lg font-semibold mb-4 text-center">
                Spending Trend ({month})
            </h2>
            {values.length > 0 ? (
                <Line data={data} />
            ) : (
                <p className="text-center text-gray-500">No data available for {month}</p>
            )}
        </div>
    );
}
