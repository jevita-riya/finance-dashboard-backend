const express = require("express");
const router = express.Router();

const recordController = require("../controllers/recordController");
const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");


router.post("/", verifyToken, authorizeRoles("admin"), recordController.createRecord);

router.get(
  "/",
  verifyToken,
  authorizeRoles("viewer", "analyst", "admin"),
  recordController.getRecords
);
router.put("/:id", verifyToken, authorizeRoles("admin"), recordController.updateRecord);

router.delete("/:id", verifyToken, authorizeRoles("admin"), recordController.deleteRecord);

module.exports = router;