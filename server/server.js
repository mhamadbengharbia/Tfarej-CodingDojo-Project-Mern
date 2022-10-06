const express = require("express");
const app = express();
const cors = require('cors');
const myFirstSecret = process.env.FIRST_SECRET_KEY;
const AllMyUserRoutes = require("./routes/user.routes");

var corsOptions = {
  origin: "http://localhost:3000"
};

require('dotenv').config();
require("./config/mongoose.config");

app.use(cors({credentials:true,origin:"http://localhost:3000"}))

 
 
app.use(express.json(), express.urlencoded({ extended: true }));

AllMyUserRoutes(app);
const userRoutes = require('./routes/user.routes')
userRoutes(app)
 

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`The server is all fired up on port ${port}` ));