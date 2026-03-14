const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    fromAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: [true, "fromAccount is required"],
      index: true,
    },
    toAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: [true, "toAccount is required"],
      index: true,
    },
    status: {
      type: String,
      enum: {
        values: ["PENDING", "COMPLETED", "FAILED", "REVERSED"],
        message: "status must be either PENDING, COMPLETED, FAILED or REVERSED",
      },
      default: "PENDING",
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
      min: [0, "amount must be a positive number"],
    },
    idompotencyKey: {
      type: String,
      required: [true, "idompotencyKey is required"],
      unique: [true, "idompotencyKey must be unique"],
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  },
);
const transactionModel = mongoose.model("Transaction", transactionSchema);
module.exports = transactionModel; // Export the Transaction model for use in other files
