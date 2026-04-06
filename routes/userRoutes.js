const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");



router.post("/", verifyToken, authorizeRoles("admin"), userController.createUser);
router.get("/", verifyToken, authorizeRoles("admin"), userController.getUsers);
module.exports = router;