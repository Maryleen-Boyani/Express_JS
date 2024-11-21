const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from Boyani Maryleen Menecha");
});

mongoose
  .connect(
    "mongodb+srv://admin:ra5fdlDnMV89Hodf@cluster0.wnvf9.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Successfully connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
