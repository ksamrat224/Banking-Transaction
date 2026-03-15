const transactionModel = require("../models/transaction.model");
const ledgerModel = require("../models/ledger.model");

const emailService = require("../services/email.service");

async function createTransaction(req, res) {
  const { fromAccount, toAccount, amount, idompotencyKey } = req.body;
}

module.exports = {
  createTransaction,
};
