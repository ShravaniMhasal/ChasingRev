const express = require("express");
const Contact = require("../models/contact");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message submitted successfully!",
      contact: newContact,
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

module.exports = router;
