const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyToken = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");


router.post("/",verifyToken, checkRole(["admin"]), userController.createUser);
router.get("/", verifyToken, checkRole(["admin"]), userController.getUsers);
module.exports = router;