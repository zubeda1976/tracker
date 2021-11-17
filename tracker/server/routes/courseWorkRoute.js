const express = require("express");

//**/*github credential
const router = express.Router();
const courseWorkController = require("../controllers/courseWorkRoute.controller.js");

//****************************get************************************
//get modules end point
router.get("/module", courseWorkController.getModule);
//..
router.get("/moduleNames", courseWorkController.getModuleNames);

//get course end point
router.get("/course", courseWorkController.getCourse);

//*******************************post********************************
router.post("/module", courseWorkController.postModule);
router.post("/course", courseWorkController.postCourse);
//****************************update coursework*********************************

router.patch("/course/", courseWorkController.updateCourse);

//***************************delate**********************************

router.delete("/course/:id", courseWorkController.deleteCourse);

//***************send back to server*********************************/

module.exports = router;
