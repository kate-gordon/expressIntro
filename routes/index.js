const express = require('express'), 
    router = express.Router();  // Handling requests that come in from the app 

router.get("/", (req, res) => {
    const snippet = `<h1>Hello World!</h1>`; 
    res.status(200)
    .send(snippet)
    .end(); 
}); 

module.exports = router; 


