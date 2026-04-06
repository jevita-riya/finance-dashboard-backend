const db = require("../db/dbConfig");

const getSummary = async () => {

    // Combined Income & Expense
    const [totals] = await db.query(`
        SELECT 
          SUM(CASE WHEN type='income' THEN amount ELSE 0 END) AS totalIncome,
          SUM(CASE WHEN type='expense' THEN amount ELSE 0 END) AS totalExpense
        FROM records
    `);

    // Category-wise breakdown
    const [categoryResult] = await db.query(`
        SELECT 
          category,
          SUM(CASE WHEN type='income' THEN amount ELSE 0 END) as income,
          SUM(CASE WHEN type='expense' THEN amount ELSE 0 END) as expense
        FROM records
        GROUP BY category
    `);

    // Recent transactions
    const [recentResult] = await db.query(`
        SELECT id, amount, type, category, date 
        FROM records 
        ORDER BY created_at DESC 
        LIMIT 5
    `);

    // Monthly trend
    const [monthlyResult] = await db.query(`
        SELECT 
          DATE_FORMAT(date, '%Y-%m') as month,
          SUM(CASE WHEN type='income' THEN amount ELSE 0 END) as income,
          SUM(CASE WHEN type='expense' THEN amount ELSE 0 END) as expense
        FROM records
        GROUP BY month
        ORDER BY month
    `);

    const totalIncome = totals[0].totalIncome || 0;
    const totalExpense = totals[0].totalExpense || 0;

    return {
        totalIncome,
        totalExpense,
        netBalance: totalIncome - totalExpense,
        categoryWise: categoryResult,
        recentTransactions: recentResult,
        monthlyTrend: monthlyResult
    };
};

module.exports = {
    getSummary
};