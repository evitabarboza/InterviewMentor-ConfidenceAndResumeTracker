const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const path=require('path')
require('dotenv').config();

const demo= require('./routes/demo');

app.use(cors());
app.use(express.json());
app.use('/login',demo);

app.listen(3000,()=>{
    console.log("Running at port 3000\n");
})