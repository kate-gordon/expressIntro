const express = require('express'), 
    router = express.Router(); 

router.get("/", (req, res) => {
    const snippet = `<h1>WOOF</h1>`

    res.status(200)
        .send(snippet)
        .end(); 
}); 

module.exports = router; 