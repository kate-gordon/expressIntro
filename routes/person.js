const express = require('express'), 
    router = express.Router();  // Handling requests that come in from the app 

router.get("/:person_name/:birthyear?", (req, res) => {
    const { person_name, birthyear } = req.params; 
    const currentYr = 2019; 
    const yourAge = currentYr - birthyear;

    const snippet = `<h1>Hi ${person_name}, you are ${yourAge} years old!</h1>`; 
    res.status(200)
        .send(snippet)
        .end(); 
}); 

module.exports = router; 