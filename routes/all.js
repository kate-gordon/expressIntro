const express = require('express'), 
    router = express.Router();  // Handling requests that come in from the app 

const data = {
    meetDog: [
        {name: 'Dee', breed: 'Doodle'},
        {name: 'Bb', breed: 'Pug'}
    ]
};

router.get("/", (req, res) => {
    res.status(200)
        .render('template', {
            locals: {
                title: "A Listing of Rangers!", 
                meetDog: data.meetDog
            },
            partials: {
                partial: "partial-all"
            }
    })
}); 

module.exports = router; 


