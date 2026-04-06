const db = require("../db/dbConfig");

const createRecord = async (data) => {
    const { user_id, amount, type, category, date, notes } = data;

    const [result] = await db.query(
        `INSERT INTO records 
        (user_id, amount, type, category, date, notes) 
        VALUES (?, ?, ?, ?, ?, ?)`,
        [user_id, amount, type, category, date, notes]
    );

    return result;
};

const getRecords = async (filters) => {
    let query = "SELECT * FROM records WHERE 1=1";
    let values = [];

    if (filters.type) {
        query += " AND type = ?";
        values.push(filters.type);
    }

    if (filters.category) {
        query += " AND category = ?";
        values.push(filters.category);
    }

    if (filters.startDate && filters.endDate) {
        query += " AND date BETWEEN ? AND ?";
        values.push(filters.startDate, filters.endDate);
    }

    const [rows] = await db.query(query, values);
    return rows;
};

const updateRecord = async (id, data) => {
    const { amount, type, category, date, notes } = data;

    const [result] = await db.query(
        `UPDATE records 
         SET amount=?, type=?, category=?, date=?, notes=? 
         WHERE record_id=?`,
        [amount, type, category, date, notes, id]
    );

    return result;
};

const deleteRecord = async (id) => {
    const [result] = await db.query(
        "DELETE FROM records WHERE record_id=?",
        [id]
    );

    return result;
};

module.exports = {
    createRecord,
    getRecords,
    updateRecord,
    deleteRecord
};