import mongoose from "mongoose";
const User = new mongoose.Schema({
  name: { type: "string", required: true },
  email: { type: "string", required: true },
  phone: { type: "number", required: true },
});
const UserSchema = new mongoose.model("User", User);
export default UserSchema;
