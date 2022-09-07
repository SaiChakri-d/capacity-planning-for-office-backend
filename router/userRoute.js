const express = require("express");
const router = express.Router();
const userModule = require("../modules/userMod");
router.get("/get", userModule.getUsers);
router.post("/set", userModule.setUser);
module.exports = router;
