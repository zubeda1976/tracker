const express = require("express");
const router = express.Router();

const cityRouteController = require("../controllers/cityRoute.controller.js");

//get city route
router.get("/city", cityRouteController.getCity);

//post cities route
router.post("/city", cityRouteController.postCity);

//delete cities route
router.delete("/city/:id", cityRouteController.deleteCity);

//add class route
router.post("/city/class/:id", cityRouteController.addClass);

//delete cities route
router.delete(
  "/city/deleteclass/:classId/:cityId",
  cityRouteController.deleteClass
);

module.exports = router;
