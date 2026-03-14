const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user is required"],
      index: true,
    },
    status: {
      type: String,
      enum: {
        values: ["ACTIVE", "INACTIVE", "FROZEN"],
        message: "status must be either ACTIVE, INACTIVE or FROZEN",
      },
      default: "ACTIVE",
    },
    currency: {
      type: String,
      required: [true, "currency is required"],
      default: "NPR",
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  },
);
accountSchema.index({ user: 1 }, { unique: true }); // Ensure one account per user

const accountModel = mongoose.model("Account", accountSchema);
module.exports = accountModel; // Export the Account model for use in other files
