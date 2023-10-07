const BigPromise = require('../middleware/bigPromise')

exports.home = BigPromise(async(req, res) =>{
    //const db = await something()
    res.status(200).json({
        success: true,
        greeting: "Hello from API"
    });
});

exports.homeDummy = (req, res) =>{
    try {
        res.status(200).json({
            success: true,
            greeting: "Hello from another dummy route"
        });   
    } catch (error) {
      console.log(error);  
    }
};