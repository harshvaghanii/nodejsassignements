const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// View Engine Setup

app.set("views", "views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

// Importing Routes
const adminRoute = require("./routes/admin");
const mainRoute = require("./routes/main");

// End Points

app.use(mainRoute.router);
app.use("/admin", adminRoute.router);

// Listening to the server

app.listen(3000);

// A dummy code
