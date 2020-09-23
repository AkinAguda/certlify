const express = require("express");
// For when we create our apis
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
// For session Storage
const MongoStore = require("connect-mongo")(session);
const config=require("./config/database")

let configuration = process.env.DATABASE || config.database;
// connect to database
mongoose.connect(configuration, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongodb connection established");
});

// initialize app
const app = express();
// middlewares
app.use(
  session({
    secret: process.env.DATABASE || config.secret,
    store: new MongoStore({ mongooseConnection: db }),
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cors());
app.use(express.static("views"));
app.use(express.json({limit: '50mb'}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
