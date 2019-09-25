const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v2/profile", require("./routes/profile"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
