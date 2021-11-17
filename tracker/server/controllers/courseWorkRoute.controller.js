const axios = require("axios");
const courseModel = require("../models/courseworkModel");

//****************************get names of all Module*************************************
module.exports.getModuleNames = async (req, res) => {
  const module = await courseModel.distinct("modules.name");

  try {
    res.send(module);
  } catch (error) {
    res.status(500).send(error);
  }
  console.log("names");
};
//.................
module.exports.getModule = async (req, res) => {
  const module = await courseModel.distinct("modules");

  try {
    res.send(module);
  } catch (error) {
    res.status(500).send(error);
  }
  console.log("ingo");
};
//****************************get course****************************************
//get course from db
module.exports.getCourse = async (req, res) => {
  const course = await courseModel.find({});

  try {
    res.send(course);
  } catch (error) {
    res.status(500).send(error);
  }
};
//****************************get courseModule****************************************
module.exports.getCourseModule = async (req, res) => {
  const course = await courseModel.find({ module: req.query.module });

  try {
    res.send(course);
  } catch (error) {
    res.status(500).send(error);
  }
};

//*******************************post*********************************
//save a module to db
module.exports.postModule = async (req, res) => {
  const module = new moduleModel(req.body);
  try {
    await module.save();
    res.send(module);
  } catch (error) {
    res.status(500).send(error);
  }
};

//save a course to db
module.exports.postCourse = async (req, res) => {
  const course = new courseModel(req.body);
  try {
    await course.save();
    res.send(course);
  } catch (error) {
    res.status(500).send(error);
  }
};

//****************************update(add or update* coursework)***********************************
module.exports.updateCourse = async (req, res) => {
  try {
    let course = await courseModel.updateOne(
      { name: "full stack course" },
      req.body,
      { upsert: true }
    );
    //await courseModel.save();
    res.json(course);
  } catch (error) {
    res.status(500).json(error.message);
  }
  console.log("call");
};

//***************************delate*********************************

module.exports.deleteCourse = async (req, res) => {
  courseModel.update(
    { _id: "60901275a0eda010a8018a00" },
    { $pull: { coursework: { name: "Week 1" } } }
  );
};
