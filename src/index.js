require("dotenv").config();
const express = require("express");
const morgan = require('morgan');
const TodoRoutes = require("./routes/todo");
const UserRoutes = require("./routes/userroute");
const session = require("express-session");
const app = express();
const port = 3000;
app.use(express.json());
app.use(morgan('dev'));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "SECRET_KEY",
    cookie:{maxAge:40*40*1000},
    rolling: true,
  })
);
app.use("/", TodoRoutes);
app.use("/", UserRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`);
});