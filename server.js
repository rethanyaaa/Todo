const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/toDoRoute"); // Ensure this is the correct path to your routes file

dotenv.config();
const PORT = 5000;
app.use(express.json());
app.use(cors());

const MONGO_URL = process.env.MONGODB_URL;

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// Specify a base path for routes (e.g., "/todos")
app.use("/todos", routes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
