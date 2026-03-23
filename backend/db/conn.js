const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://madureboucas_db_user:Md061001@cluster0.rk3ymrw.mongodb.net/?appName=Cluster0",
    );

    console.log("Conectado");
  } catch (error) {
    console.error(`Erro: ${error}`);
    process.exit(1);
  }
}

module.exports = main;
