import express from "express";
import Tests from "../models/TestS.js";

const Test = express.Router();
//get all test
Test.get("/test/all", async (req, res) => {
  try {
    const test = await Tests.find();
    res.json({
      data: test,
    });
  } catch (error) {
    console.error("Error fetching admins:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching admins",
      error: error.message,
    });
  }
});
//add a test
Test.post("/api/tests", async (req, res) => {
  try {
    const newTest = new Tests(req.body);
    const savedTest = await newTest.save();
    res.status(201).json(savedTest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//find a specific test question object
Test.get("/api/find/:id", async (req, res) => {
  const testId = req.params.id;
  try {
    // Assuming that Test is your Mongoose model for tests
    const savedTest = await Tests.findOne({ "testQuestions._id": testId });

    if (!savedTest) {
      return res.status(404).json({
        success: false,
        message: "Test not found",
      });
    }

    // Find the specific test question within the array
    const testQuestion = savedTest.testQuestions.find(
      (question) => question._id.toString() === testId
    );

    if (!testQuestion) {
      return res.status(404).json({
        success: false,
        message: "Test question not found",
      });
    }

    res.json(testQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

Test.put('/api/tests/update/:testId', async (req, res) => {
  const testId = req.params.testId;
  const { question } = req.body;
  try {
    const updatedTest = {
      question,
    };

    // Use findByIdAndUpdate to update the document by its ID
    const update = await Tests.findByIdAndUpdate(testId, updatedTest, {
      new: true, // Return the updated document
    });

    if (!update) {
      return res.status(404).json({
        success: false,
        message: "Test not found",
      });
    }

    res.json({
      success: true,
      message: "Test updated",
      data: update,
    });
  } catch (error) {
    console.error("Error updating Test:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export { Test };
