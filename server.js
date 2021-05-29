const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(express.json());

const db = require("./models");
db.sequelize.sync({force: true}).then(()=>{
    console.log("Drop and re-sync");
});

app.get("/healthz",(req,res)=>{
    res.json({"msg": "Server is working"});
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Sever is running on port ${PORT}.`);
})