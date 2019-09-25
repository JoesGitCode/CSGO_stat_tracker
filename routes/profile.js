const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/steam/:steamid", async (req, res) => {
  try {
    const headers = {
      "TRN-Api-Key": process.env.API_KEY
    };

    const { steamid } = req.params;

    const response = await fetch(
      `${process.env.API_URL}/profile/steam/${steamid}`,
      {
        headers
      }
    );

    const data = await response.json();

    if (data.errors && data.errors.length > 0) {
      return res.status(404).json({
        message:
          "Profile not found. Try typing your ID again or make you steam account public"
      });
    }

    res.json(data);
  } catch (error) {
    console.error(error, "Server error");
    res.status(500).json({
      message: "Server Error"
    });
  }
});

module.exports = router;
