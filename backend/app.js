const path = require("path");
const postRoutes = require("./routes/posts");
require("./db/connection");
require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.APP_PORT;

app.use(express.json());
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(postRoutes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));