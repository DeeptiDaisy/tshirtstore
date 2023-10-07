const mongoose = require('mongoose')

const connectwithDb = ()=>{
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log(`DB IS CONNECTED`))
    .catch(error =>{
        console.log(`DB Coonection issue...`);
        console.log(error);
    })
}


module.exports = connectwithDb