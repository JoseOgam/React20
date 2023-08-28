const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./dbConnect");
const router = require("./routes/movies");
const bodyParse = require("body-parser");

const app = express();
dbConnect();

app.use(express.json());
app.use(cors());
app.use(bodyParse.urlencoded({ extended: false }));
app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}...`));
