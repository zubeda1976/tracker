const cityModel = require("../models/cityModel");

//get city from db
module.exports.getCity = async (req, res) => {
  const cities = await cityModel.find({});
  try {
    res.json(cities);
  } catch (error) {
    res.status(500).send(error);
  }
};

//save city to db(post)
module.exports.postCity = async (req, res) => {
  const cities = new cityModel(req.body);
  try {
    await cities.save();
    res.send(cities);
  } catch (error) {
    res.status(500).send(error);
  }
};

//delete city from db
module.exports.deleteCity = async (req, res) => {
  try {
    await cityModel.findByIdAndDelete({ _id: req.params.id });
    res.send("successfully removed the city");
  } catch (error) {
    res.status(500).send(error);
  }
};

//save class to db
module.exports.addClass = async (req, res) => {
  try {
    await cityModel.findOneAndUpdate({ _id: req.params.id }, {}, (err, doc) => {
      doc.classes.push(req.body);
      doc.save();
      res.send(doc);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

//remove class from db
module.exports.deleteClass = async (req, res) => {
  try {
    await cityModel.findOneAndUpdate(
      { _id: req.params.cityId },
      { $pull: { classes: { _id: req.params.classId } } },
      (err, doc) => {
        res.send("successfully removed the class");
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};
