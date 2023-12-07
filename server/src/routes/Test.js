import express from "express";
import Test from "../models/test.models.js";

const testRoute = express.Router();

testRoute.post("/add-test/:admin_objId", async (req, res) => {
  try {
    const { admin_objId } = req.params;
    const {
      test_subject,
      test_title,
      test_time_Limit,
      test_run_time,
      test_marks,
      questions,
    } = req.body;

    const newTest = new Test({
      test_subject,
      test_title,
      test_author: admin_objId,
      test_time_Limit,
      test_run_time,
      test_marks,
      questions,
    });

    // Save the new Test document
    const savedTest = await newTest.save();

    // Populate the test_author field with the corresponding admin document
    const populatedTest = await Test.findById(savedTest._id).populate("test_author");

    return res.json({
      success: true,
      message: "Test added successfully",
      data: populatedTest,
    });
  } catch (error) {
    console.error("Error during test creation:", error);
    return res.json({
      success: false,
      message: "Something went wrong with test creation",
      data: "",
    });
  }
});

export default testRoute;
