const recordService = require("../services/recordService");

const createRecord = async (req, res) => {
  try {
    const data = {
      ...req.body,
      user_id: req.user.id,
    };

    const result = await recordService.createRecord(data);

    res.status(201).json({
      success: true,
      message: "Record created",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getRecords = async (req, res) => {
  try {
    const filters = {};

    if (req.query.type) filters.type = req.query.type;
    if (req.query.category) filters.category = req.query.category;
    if (req.query.startDate) filters.startDate = req.query.startDate;
    if (req.query.endDate) filters.endDate = req.query.endDate;
    const records = await recordService.getRecords(filters);
    res.status(200).json({
      success: true,
      count: records.length,
      data: records,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const updateRecord = async (req, res) => {
  try {
    const result = await recordService.updateRecord(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Record updated",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteRecord = async (req, res) => {
  try {
    await recordService.deleteRecord(req.params.id);

    res.status(200).json({
      success: true,
      message: "Record deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
};
