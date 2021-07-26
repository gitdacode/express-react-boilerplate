const express = require("express");

const app = express();
const port = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.status(200).json({
    status: "successfull",
    message: "Hello world!",
  });
});

app.listen(port, () => {
  console.log(`We are listing to port: ${port} `);
});
