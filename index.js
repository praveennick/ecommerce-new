let express = require("express");
let dotenv= require("dotenv");

let app = express();

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("Server Started!! at PORT no:"+PORT);
})