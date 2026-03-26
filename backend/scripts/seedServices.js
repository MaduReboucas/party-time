const fs = require("fs/promises");
const path = require("path");
const mongoose = require("mongoose");
const { Service: ServiceModel } = require("../models/Service");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    const mongoUri =
      process.env.MONGODB_URI ||
      "mongodb+srv://madureboucas_db_user:Md061001@cluster0.rk3ymrw.mongodb.net/?appName=Cluster0";

    await mongoose.connect(mongoUri);

    const dataPath = path.join(__dirname, "..", "db", "servicesmock.json");
    const raw = await fs.readFile(dataPath, "utf8");
    const services = JSON.parse(raw);

    await ServiceModel.deleteMany({});
    await ServiceModel.insertMany(services);

    console.log(`Seed concluido: ${services.length} serviços inseridos.`);
  } catch (error) {
    console.error("Erro ao fazer seed:", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

main();
