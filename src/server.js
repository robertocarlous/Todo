const express = require("express");
const TodoRoutes = require("./routes/todo");
const dotenv = require("dotenv")
dotenv.config({path:".env"})
const UserRoutes = require("./routes/userroute");
const connectDB = require("../src/config/db")
const app = express();


connectDB();
app.use(express.json());

const port = process.env.PORT;

app.use("/", TodoRoutes);
app.use("/", UserRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
