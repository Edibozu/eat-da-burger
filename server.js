const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");

const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgersController.js");

app.use(routes);

// VIEWS ROUTES
app.get("/", (req, res) => {
  res.render("index");
  connection.query("SELECT * FROM burger", (err, data) => {
    console.table(data);
  })
});


// API ROUTES

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
