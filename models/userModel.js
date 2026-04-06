const db = require("../db/dbConfig"); 

const createUser = async (userData) => {
    const { name, email, password, role } = userData;

    const [result] = await db.query(
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
        [name, email, password, role || "viewer"]
    );

    return result;
};

const getAllUsers = async () => {
    const [rows] = await db.query("SELECT user_id, name, email, role, status FROM users");
    return rows;
};

const getUserByEmail = async (email) => {
    const [rows] = await db.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );
    return rows[0];
};

module.exports = {
    createUser,
    getAllUsers,
    getUserByEmail
};