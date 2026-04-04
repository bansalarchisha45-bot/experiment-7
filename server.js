const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/productDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});

// Model
const Product = mongoose.model("Product", productSchema);

// API
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Insert data
app.get("/add", async (req, res) => {
  await Product.insertMany([
    { name: "Laptop", price: 50000, image: "https://via.placeholder.com/150" },
    { name: "Phone", price: 20000, image: "https://via.placeholder.com/150" }
  ]);
  res.send("Data Added");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});