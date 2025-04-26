const express = require("express");
const Transaction = require("../models/Transaction"); // Import Transaction Model

const router = express.Router();

// ✅ Add a New Transaction
router.post("/add", async (req, res) => {
  try {
    const { userId, amount, category, description } = req.body;

    if (!userId || !amount || !category) {
      return res.status(400).json({ error: "Missing required fields!" });
    }

    const newTransaction = new Transaction({ userId, amount, category, description });
    await newTransaction.save();

    res.status(201).json({ message: "Transaction added successfully!", transaction: newTransaction });
  } catch (error) {
    res.status(500).json({ error: "Server Error", details: error.message });
  }
});

// ✅ Get All Transactions for a User
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const transactions = await Transaction.find({ userId }).sort({ date: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Server Error", details: error.message });
  }
});

// ✅ Update a Transaction
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTransaction = await Transaction.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedTransaction) {
      return res.status(404).json({ error: "Transaction not found!" });
    }

    res.status(200).json({ message: "Transaction updated successfully!", transaction: updatedTransaction });
  } catch (error) {
    res.status(500).json({ error: "Server Error", details: error.message });
  }
});

// ✅ Delete a Transaction
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTransaction = await Transaction.findByIdAndDelete(id);

    if (!deletedTransaction) {
      return res.status(404).json({ error: "Transaction not found!" });
    }

    res.status(200).json({ message: "Transaction deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server Error", details: error.message });
  }
});

module.exports = router;
