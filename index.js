const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {MONGO_DB_CONFIG} = require("./config/app.config");
const cors = require('cors');
const router = require ('./router/app.route')


// ================= MONGO DB CONNECTION ======================= //

mongoose.connect(MONGO_DB_CONFIG.DB,{

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connection to MongoDB Successful');

}).catch((error)=>{
    console.log('Error Connecting to MongoDB: ', error);

})


// ======= Enable Cors ============= //
app.use(cors());


//====== Middleware to parse JSON Data ====== //

app.use(express.json());

//======= Define Route to fetch data ===============//

app.use("/api",router);

// Start Sever //

app.listen(8000, ()=> {
    console.log("Server Started on port 8000");

})