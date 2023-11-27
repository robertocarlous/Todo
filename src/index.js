require("dotenv").config();
const express = require("express");
const TodoRoutes = require("./routes/todo");
const UserRoutes = require("./routes/userroute");
const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use("/", TodoRoutes);
app.use("/", UserRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`);
});