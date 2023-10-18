const express = require("express");
const account = require("../controllers/account");

const router = express.Router();

//Authorization
router.post("/register", account.register);
router.post("/login", account.login);

//User Functions
module.exports = router;
