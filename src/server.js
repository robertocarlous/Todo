const express = require('express')
const TodoRoutes = require("./routes/todoroute");
const UserRoutes =require("./routes/userroute")
const dotenv = require("dotenv")
dotenv.config();
const db = require("./config/db")
db;

const app = express()
const port = process.env.PORT;

app.use(express.json());

app.use('/',TodoRoutes);
app.use('/',UserRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})