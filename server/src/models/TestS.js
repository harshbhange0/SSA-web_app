import { Schema, model } from "mongoose";

const Tests = new Schema({
  testClass:String,
  testInfo: {
    testTitle:String,
    testTime:String,
    testSubject: String,
    testMark: Number,
    testMarksPerQuestion: Number,
  },
  testQuestions: [
    {
      question: String,
      correctAnswer: Number, 
      options: [
        {
          text: String,
        },
        {
          text: String,
        },
        {
          text: String,
        },
        {
          text: String,
        },
      ],
    },
  ],
});

const Test = model("Tests", Tests);

export default Test;
