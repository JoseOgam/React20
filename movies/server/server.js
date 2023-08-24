const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./dbConnect");

const app = express();
dbConnect();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}...`));
