const express = require("express");
const router = express.Router();

const loginRouteController = require("../controllers/loginRoute.controller.js");

//****************************GET TOKEN **********************************

router.post("/", loginRouteController.getToken);

//****************************GET USER************************************

router.get("/:token", loginRouteController.getUser);

module.exports = router;
