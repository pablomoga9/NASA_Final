
const mongoose = require("mongoose");
require('dotenv').config();

const dbUrl = `mongodb+srv://moyagarcia99:viEMKRDWewMrNcnL@nasa.g5qnyno.mongodb.net/NasaApi?retryWrites=true&w=majority`
console.log(process.env.db_User);

const connectionParams = {
    useNewUrlParser: true, useUnifiedTopology: true, ssl: true
}

mongoose
.connect(dbUrl,connectionParams)
.then(()=>{
    console.info("Connected to the DB")
})
.catch((e)=>{
    console.log("Error:", e);
})
// mongoose.connect('mongodb://localhost:27017/fakeshop',{useNewUrlParser: true, useUnifiedTopology: true, ssl: true})
// mongoose.connection.on('connected',()=>{
//     console.log("allright");
// })

const db = mongoose.connection;


db.on("error", error => console.log(error));
db.once("open", () => console.log("conexion con mongodb establecida"));

module.exports = mongoose;


