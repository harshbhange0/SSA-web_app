import mongoose, { Schema, model } from "mongoose";
const admin = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    listOFTestAdded: [
      {
        test_title: String,
        test_author: String,
        test: { type: mongoose.Schema.Types.ObjectId, ref: "test" },
      },
    ],
  },
  { timestamps: true }
);
const Admin = model("admin", admin);
export default Admin;
