const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// connecting to database
mongoose.connect("mongodb://localhost/crud-mongo-express")
.then((db) => { console.log("DB CONNECTED"); })
.catch((err) => { console.log("DB NOT CONNECTED", err); });

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// importing routes
const indexRoutes = require("./routes/index");

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
//app.use(express.urlencoded({extended: false}));

// routes
app.use("/", indexRoutes);

// starting the server
app.listen(app.get("port"), () => {
    console.log(`Server running on port ${app.get("port")}`);
});