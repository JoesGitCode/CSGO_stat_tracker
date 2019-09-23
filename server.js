const express = require("express");
const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config({ path: "./config.env" });

const app = express();

app.get("/api/v2/profile/steam/:steamid", async (req, res) => {

  res.send('heloo')

});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});