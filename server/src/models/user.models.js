import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    test_don: [
      { tests: { type: mongoose.Schema.Types.ObjectId,
                 ref: "test" } },
    ],
  },
  { timestamps: true }
);
const User = model("User", userSchema);
export default User;
