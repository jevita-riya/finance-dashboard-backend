const express = require("express");
const router = express.Router();

const recordController = require("../controllers/recordController");
const verifyToken = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");

router.post("/", verifyToken, checkRole(["admin"]), recordController.createRecord);

router.get("/", verifyToken, checkRole(["viewer","analyst", "admin"]), recordController.getRecords);

router.put("/:id", verifyToken, checkRole(["admin"]), recordController.updateRecord);

router.delete("/:id", verifyToken, checkRole(["admin"]), recordController.deleteRecord);

module.exports = router;