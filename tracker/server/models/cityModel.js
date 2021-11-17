const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  classes: [
    {
      name: { type: String, required: true },
      googleSheet_URL: { type: String, required: true },
      students: [
        { name: { type: String, required: true } },
        {
          githubUsername: { type: String, required: true },
        },
      ],
    },
  ],
});

const Cities = mongoose.model("cities", citySchema);
module.exports = Cities;
