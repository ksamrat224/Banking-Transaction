const mongoose = require("mongoose");

const ledgerSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: [true, "account is required"],
    index: true,
    immutable: true,
  },
  amount: {
    type: Number,
    required: [true, "amount is required"],
    immutable: true,
  },
  transaction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transaction",
    required: [true, "transaction is required"],
    index: true,
    immutable: true,
  },
  type: {
    type: String,
    enum: {
      values: ["DEBIT", "CREDIT"],
      message: "type must be either DEBIT or CREDIT",
    },
    required: [true, "type is required"],
    immutable: true,
  },
});
function preventLedgerModification() {
  throw new Error("Ledger entries cannot be modified");
}
ledgerSchema.pre("findOneAndUpdate", preventLedgerModification);
ledgerSchema.pre("updateOne", preventLedgerModification);
ledgerSchema.pre("updateMany", preventLedgerModification);
ledgerSchema.pre("update", preventLedgerModification);
ledgerSchema.pre("remove", preventLedgerModification);
ledgerSchema.pre("deleteOne", preventLedgerModification);
ledgerSchema.pre("deleteMany", preventLedgerModification);
ledgerSchema.pre("findOneAndDelete", preventLedgerModification);
ledgerSchema.pre("findOneAndRemove", preventLedgerModification);
ledgerSchema.pre("findOneAndReplace", preventLedgerModification);
const ledgerModel = mongoose.model("Ledger", ledgerSchema);
module.exports = ledgerModel; // Export the Ledger model for use in other files
