const app = require('./app');
const connectwithDb = require('./config/db');
require("dotenv").config();

// connect with database
connectwithDb();

app.listen(process.env.PORT, ()=>{
    console.log(`server is running at port: ${process.env.PORT}`);
});