const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const key = process.env.CLASH_API_KEY;
const app = express();

async function getPlayerData() {
  const data = await fetch(
    "https://api.clashofclans.com/v1/players/%23QUGC2R9U2",
    {
      headers: { Authorization: `Bearer ${key}` },
    }
  );
  const dataTransform = await data.json();
  console.log(dataTransform);
  return data;
}

app.get("/", (req, res) => {
  res.json({ message: "Hello!" });
});

app.get("/players", async (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

getPlayerData();
