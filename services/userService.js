const userModel = require("../models/userModel");
const bcrypt = require("bcrypt")

const createUser = async (data) => {
    if (!data || Object.keys(data).length === 0) {
        throw new Error("Request body is required");
    }

    const { name, email, password, role } = data;

    if (!name || !email || !password) {
        throw new Error("Name, email, and password are required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return await userModel.createUser({
        name,
        email,
        password: hashedPassword,
        role
    });
};
const getUsers = async () => {
    return await userModel.getAllUsers();
};


module.exports = {
    createUser,
    getUsers
};