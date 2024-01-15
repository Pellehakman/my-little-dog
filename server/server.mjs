import express from "express";
import { connect, Schema, model } from "mongoose";
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connect("mongodb://localhost/school", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB Schema for the "students" collection
const studentSchema = new Schema({
  name: String,
  age: Number,
  // Add other fields as needed
});

const Student = model("Student", studentSchema);

// Express route to fetch all students
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
