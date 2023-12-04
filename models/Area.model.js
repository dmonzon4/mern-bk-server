const { Schema, model } = require("mongoose");

const areaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    // owner: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

const Area = model("Area", areaSchema);

module.exports = Area;