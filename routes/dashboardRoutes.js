const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");
const verifyToken = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");

// Analyst and Admin only
router.get("/", verifyToken, checkRole(["analyst", "admin"]), dashboardController.getDashboard);

module.exports = router;