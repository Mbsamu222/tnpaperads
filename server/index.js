const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb+srv://mbsamuthesh:Mbsamu222@cluster0.kwo0n2d.mongodb.net/tnpaperadssample")

// Create a MongoDB schema
const contactSchema = new mongoose.Schema({
  customerName: String,
  customerEmail: String,
  customerPhone: String,
  orderNumber: String,
  customerNote: String,
  spamProtection: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// POST route to handle form submission
app.post('/submitForm', async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json({ message: 'Form submitted successfully', contact: newContact });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
});

// Start the server
app.listen(4000, () => {
  console.log(`Server is running on 4000`);
});
