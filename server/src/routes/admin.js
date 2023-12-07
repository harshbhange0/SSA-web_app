import express from "express";
import Admin from "../models/admin.models.js";
import Test from "../models/test.models.js";

const adminRoute = express.Router();

// register admin to db
// http://localhost:5000/admin/register
adminRoute.post("/register", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const newAdmin = new Admin({
      email: email,
      password: password,
    });
    const savedAdmin = newAdmin.save();
    return res.json({
      success: true,
      message: "Admin registered successfully",
      data: savedAdmin?.email,
    });
  } else {
    return res.json({
      success: false,
      message: "something went wrong with admin registration",
      data: "",
    });
  }
});
//if admin is already registered to db
// http://localhost:5000/admin/login/harsh@bhange.com
adminRoute.get("/login/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.json({
        success: false,
        message: "Admin email not found",
        data: "",
      });
    }

    return res.json({
      success: true,
      message: "Admin logged in successfully",
      data: email,
    });
  } catch (error) {
    console.error("Error during admin login:", error);
    return res.json({
      success: false,
      message: "Something went wrong with admin login",
      data: "",
    });
  }
});

// add test to admin
adminRoute.post("/add-test/:email/:testObjId", async (req, res) => {
  const { email, testObjId } = req.params;
  const { test_title, test_author } = req.body;

  try {
    // Find the admin by email
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.json({
        success: false,
        message: "Admin not found",
        data: "",
      });
    }

    // Use .populate to retrieve the test document associated with testObjId
    const test = await Test.findById(testObjId).populate("test_author");

    if (!test) {
      return res.json({
        success: false,
        message: "Test not found",
        data: "",
      });
    }

    // Check if the test exists in the listOFTestAdded array
    const existingTestIndex = admin.listOFTestAdded.findIndex(
      (adminTest) => adminTest.test_title === test_title
    );

    if (existingTestIndex !== -1) {
      // If the test exists, update it
      admin.listOFTestAdded[existingTestIndex] = {
        test_title,
        test_author,
        test: testObjId,
      };
    } else {
      // If the test doesn't exist, add it to the array
      admin.listOFTestAdded.push({
        test_title,
        test_author,
        test: testObjId,
      });
    }

    // Save the updated admin document
    await admin.save();

    return res.json({
      success: true,
      message: "Admin test updated successfully",
      data: { test_title, test_author, test },
    });
  } catch (error) {
    console.error("Error during admin test update:", error);
    return res.json({
      success: false,
      message: "Something went wrong with admin test update",
      data: "",
    });
  }
});

export default adminRoute;
