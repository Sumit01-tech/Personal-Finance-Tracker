import React from "react";

const monthlyBudgets = {
    "2025-01": {
        groceries: { allocated: 450, used: 300 },
        entertainment: { allocated: 150, used: 100 },
        utilities: { allocated: 200, used: 180 },
    },
    "2025-02": {
        groceries: { allocated: 500, used: 320 },
        entertainment: { allocated: 200, used: 150 },
        utilities: { allocated: 250, used: 220 },
    },
    "2025-03": {
        groceries: { allocated: 520, used: 400 },
        entertainment: { allocated: 250, used: 210 },
        utilities: { allocated: 270, used: 200 },
    },
    "2025-04": {
        groceries: { allocated: 500, used: 300 },
        entertainment: { allocated: 200, used: 180 },
        utilities: { allocated: 250, used: 210 },
    },
    "2025-05": {
        groceries: { allocated: 480, used: 290 },
        entertainment: { allocated: 180, used: 150 },
        utilities: { allocated: 230, used: 190 },
    },
};

export default function Budget({ selectedMonth }) {
    const budget = monthlyBudgets[selectedMonth] || monthlyBudgets["2025-05"];

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mx-auto my-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Monthly Budget</h2>
            <div className="space-y-3">
                <div className="flex justify-between">
                    <span>Groceries</span>
                    <span>
                        ${budget.groceries.allocated} (Used: ${budget.groceries.used})
                    </span>
                </div>
                <div className="flex justify-between">
                    <span>Entertainment</span>
                    <span>
                        ${budget.entertainment.allocated} (Used: ${budget.entertainment.used})
                    </span>
                </div>
                <div className="flex justify-between">
                    <span>Utilities</span>
                    <span>
                        ${budget.utilities.allocated} (Used: ${budget.utilities.used})
                    </span>
                </div>
            </div>
        </div>
    );
}
