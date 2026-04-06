const recordModel = require("../models/recordModel");

const validateRecord = (data) => {
    if (!data.amount || data.amount <= 0) {
        throw new Error("Valid amount is required");
    }

    if (!["income", "expense"].includes(data.type)) {
        throw new Error("Type must be income or expense");
    }

    if (!data.category) {
        throw new Error("Category is required");
    }

    if (!data.date || isNaN(new Date(data.date))) {
        throw new Error("Valid date is required");
    }
};

const createRecord = async (data) => {
    validateRecord(data);

    data.date = data.date || new Date();

    return await recordModel.createRecord(data);
};

const getRecords = async (filters) => {
    const allowedFilters = {};

    if (filters.type) allowedFilters.type = filters.type;
    if (filters.category) allowedFilters.category = filters.category;
    if (filters.startDate && filters.endDate) {
        allowedFilters.startDate = filters.startDate;
        allowedFilters.endDate = filters.endDate;
    }

    return await recordModel.getRecords(allowedFilters);
};

const updateRecord = async (id, data) => {
    if (data.amount && data.amount <= 0) {
        throw new Error("Amount must be greater than 0");
    }

    if (data.type && !["income", "expense"].includes(data.type)) {
        throw new Error("Invalid type");
    }

    const result = await recordModel.updateRecord(id, data);

    if (result.affectedRows === 0) {
        throw new Error("Record not found");
    }

    return result;
};

const deleteRecord = async (id) => {
    const result = await recordModel.deleteRecord(id);

    if (result.affectedRows === 0) {
        throw new Error("Record not found");
    }

    return result;
};

module.exports = {
    createRecord,
    getRecords,
    updateRecord,
    deleteRecord
};