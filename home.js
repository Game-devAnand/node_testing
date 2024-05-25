
const express = require("express");
const path = require("path");
const router = express.Router();


router.route("/home").get(home);

const home = (res,req) =>{
    res.sendFile(path.join(__dirname, "public/index.html"));
}