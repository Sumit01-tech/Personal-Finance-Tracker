# 💸 Personal Finance Tracker

## Introduction

**Personal Finance Tracker** is a modern and intuitive web application designed to help users manage their personal finances. The app allows users to track income and expenses, set and monitor budgets, visualize savings goals, and generate detailed financial reports. Built using **React** and **Tailwind CSS**, this app ensures a seamless user experience with beautiful and responsive design.

## Project Type

Frontend

## Deployed App

- **Frontend:** [https://personal-finance-tracker-xquq.vercel.app/](https://personal-finance-tracker-xquq.vercel.app/)

## Directory Structure

personal-finance-tracker/
├── public/
│ └── index.html
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Auth/
│ │ │ ├── Login.jsx
│ │ │ └── Register.jsx
│ │ ├── Dashboard/
│ │ │ ├── Overview.jsx
│ │ │ ├── Transactions.jsx
│ │ │ └── Budget.jsx
│ │ ├── Charts/
│ │ │ ├── IncomeExpenseChart.jsx
│ │ │ └── SavingsProgressChart.jsx
│ │ │ └── SpendingCategoryPieChart.jsx
│ │ │ └── SpendingTrendChart.jsx
│ │ └── Layout/
│ │ ├── Header.jsx
│ │ └── Sidebar.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Dashboard.jsx
│ │ └── Reports.jsx
│ ├── context/
│ │ └── AuthContext.jsx
│ ├── utils/
│ │ └── api.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .env
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md

markdown
Copy
Edit

## 🎥 Video Walkthrough of the project

[Click here for feature walkthrough (1–3 mins)](https://www.loom.com/share/your-feature-demo)

## 🎥 Video Walkthrough of the codebase

[Click here for code walkthrough (1–5 mins)](https://www.loom.com/share/your-code-demo)

## ✨ Features

- 🔐 User authentication (login/register)
- 📊 Financial dashboard with income, expenses, savings
- 📁 Budget planning and management
- 📈 Interactive charts for income/expenses and savings progress
- 📝 Add/edit/delete transaction records
- 📆 Monthly reports and insights
- 🧭 Clean, responsive layout with sidebar navigation

## 🧠 Design Decisions / Assumptions

- Used React Context API for managing auth globally
- All UI built with **Tailwind CSS** for consistent design
- Charts implemented using reusable components
- Mock API and static state used in absence of backend
- Designed mobile-first, fully responsive layout

## 🛠️ Installation & Getting Started

```bash
# Clone the repo
git clone https://github.com/Sumit01-tech/Personal-Finance-Tracker.git
# Move into the project
cd personal-finance-tracker

# Install dependencies
npm install

# Start development server
npm run dev
