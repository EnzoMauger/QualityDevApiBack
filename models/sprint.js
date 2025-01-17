const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sprintSchema = new Schema({
  comment: String,
  ratings: [
    {
      _id: false,
      label: String,
      rating: Number,
    },
  ],
});

const Sprint = mongoose.model("Sprint", sprintSchema);

module.exports = Sprint;
