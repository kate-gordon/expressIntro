const express = require('express'), 
    router = express.Router();  // Handling requests that come in from the app 


router.get("/", (req, res) => {
    const {name} = req.query;
    let snippet = `<h1>Hello ${name}</h1>`; 

    if (!name) {
        snippet = `<h1>No name provided</h1>`
        res.status(500)
        .send(snippet)
        .end(); 
    }
}); 

module.exports = router; 