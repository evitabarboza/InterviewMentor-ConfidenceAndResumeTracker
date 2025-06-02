// const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const app = express();
// const path=require('path')
// require('dotenv').config();

// const demo= require('./routes/demo');
// const uploadRoute = require('./routes/uploadExcel');

// app.use(cors());
// app.use(express.json());
// app.use('/login',demo);
// app.use('/uploadExcel', uploadRoute);

// app.listen(3000,()=>{
//     console.log("Running at port 3000\n");
// })

const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');
require('dotenv').config();

const loginRoute = require('./routes/login');         // ✅ correct login route
const uploadRoute = require('./routes/uploadExcel');  // ✅ your Excel route

app.use(cors());
app.use(express.json());

app.use('/login', loginRoute);        // ✅ backend for login form
app.use('/uploadExcel', uploadRoute); // ✅ backend for Excel upload

app.listen(3000, () => {
    console.log("Running at port 3000\n");
});
