const mongoose = require("mongoose");

const DEFAULT_URI = "mongodb://localhost:27017/partytime";

async function conn() {
  const uri = process.env.MONGODB_URI || DEFAULT_URI;

  try {
    await mongoose.connect(uri);
    console.log("MongoDB conectado.");
  } catch (err) {
    console.error("Erro ao conectar no MongoDB:", err.message);
    process.exit(1);
  }
}

module.exports = conn;
