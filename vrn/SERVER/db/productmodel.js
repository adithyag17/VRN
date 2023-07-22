import mongoose from "mongoose";
const Product = new mongoose.Schema({
  productname: { type: "string", required: true },
  productid: { type: "number", required: true },
  cost: { type: "number", required: true },
  hsncode: { type: "string", required: true },
});
const ProductSchema = new mongoose.model("Product", Product);
export default ProductSchema;
