import React from "react";

const transactionsByMonth = {
    "2025-01": [
        { title: "Salary", amount: "+$2,000", type: "income" },
        { title: "Groceries", amount: "-$150", type: "expenses" },
        { title: "Netflix", amount: "-$15", type: "expenses" },
    ],
    "2025-02": [
        { title: "Salary", amount: "+$2,200", type: "income" },
        { title: "Groceries", amount: "-$180", type: "expenses" },
        { title: "Electricity Bill", amount: "-$60", type: "expenses" },
    ],
    "2025-03": [
        { title: "Salary", amount: "+$2,500", type: "income" },
        { title: "Dining Out", amount: "-$100", type: "expenses" },
        { title: "Internet Bill", amount: "-$50", type: "expenses" },
    ],
    "2025-04": [
        { title: "Salary", amount: "+$2,300", type: "income" },
        { title: "Gym Membership", amount: "-$40", type: "expenses" },
        { title: "Gas", amount: "-$70", type: "expenses" },
    ],
    "2025-05": [
        { title: "Salary", amount: "+$2,400", type: "income" },
        { title: "Groceries", amount: "-$200", type: "expenses" },
        { title: "Spotify", amount: "-$10", type: "expenses" },
    ],
};

export default function Transactions({ selectedMonth }) {
    const transactions = transactionsByMonth[selectedMonth] || transactionsByMonth["2025-05"];

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mx-auto my-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
            <ul className="space-y-3">
                {transactions.map((tx, index) => (
                    <li
                        key={index}
                        className="flex justify-between border-b pb-2"
                    >
                        <span>{tx.title}</span>
                        <span className={tx.type === "income" ? "text-green-600" : "text-red-600"}>
                            {tx.amount}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
