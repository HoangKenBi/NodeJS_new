require("dotenv").config();
const express = require("express");
// connect mongodb
const database = require("./src/database");
const app = express();
// start session
const session = require("express-session");
app.use(session({
    resave: true,
    saveUninitialized:true,
    secret: "t2203e",
    cookie: {
        maxAge: 3600000, // miliseconds
        // secure: true
    },
}))
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log("Server is running...");
})
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))


