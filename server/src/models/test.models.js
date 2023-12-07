import mongoose, { Schema, model } from "mongoose";

const test = new Schema(
  {
    test_subject: {
      type: String,
      required: true,
    },
    test_title: {
      type: String,
      required: true,
    },
    test_author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admin",
    },
    test_time_Limit: {
      type: Number,
      required: true,
    },
    test_run_time: {
      type: Number,
      required: true,
    },
    test_marks: {
      type: Number,
      required: true,
    },
    questions: [
      {
        question: { type: String, required: true },
        option: [],
        answer: { type: String, required: true },
        mark: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);
const Test = model("test", test);
export default Test;
