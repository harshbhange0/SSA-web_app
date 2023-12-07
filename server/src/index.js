import express from "express";

import cors from "cors"; // Import the cors middleware
import connectionMongoDB from "./db/DBConnect.js";
import adminRoute from "./routes/admin.js";
import testRoute from "./routes/test.js";

const app = express();

// Configure CORS to allow requests from http://localhost:3000
app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
connectionMongoDB();

//all admin routes

app.use("/admin", adminRoute);

app.use("/test", testRoute);
const port = process.env.PORT || 5111;

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
