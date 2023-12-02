const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['food', 'drink'],
      required: true,
    },
    // Otros campos relacionados con el producto, si los hubiera
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;