const express = require('express'), 
    router = express.Router();  // Handling requests that come in from the app 

router.get("/", (req, res) => {
    res.status(200)
    .render('template', {
        locals: {
            title: "Welcome!"
        },
        partials: {
            partial: "partial-index"
        }
    })
}); 

module.exports = router; 


