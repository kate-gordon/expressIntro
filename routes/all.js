const express = require('express'), 
    router = express.Router();  // Handling requests that come in from the app 

const data = {
    meetDog: [
        {name: 'Dee', breed: 'Doodle'},
        {name: 'Bb', breed: 'Pug'}
    ]
};

router.get("/", (req, res) => {
    let json = {
        data
    }; 
    
    res.status(200)
        .send(json)
        .end(); 
}); 

module.exports = router; 


