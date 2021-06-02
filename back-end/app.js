const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8080/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  // next();
});

const indexRouter = require("./routes/index");

app.get("/*", (req, res, next) => {
  res.send("Hello World!");
  next();
});

app.use("/api", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
