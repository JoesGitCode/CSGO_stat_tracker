const express = require("express");
const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config({ path: "./config.env" });

const app = express();

app.get("/api/v2/profile/steam/:steamid", async (req, res) => {
  const headers = { "TRN-Api-Key": process.env.API_KEY };
  const apiUrl = process.env.API_URL;
  const { steamid } = req.params;
});