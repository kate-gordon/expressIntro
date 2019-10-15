const express = require('express'); //Load Express 
const compression = require('compression'); 
const helmet = require('helmet'); 
const app = express(); // Run Express

//Tell it what to listen on 

app.listen(3333, function() {
    console.log("listening on port 3333"); 
})

// Compression & helmet examples of "middleware" - they sit in the middle 

app.use(compression()); 
app.use(helmet()); 

const rootController = function(req, res) {
    const snippet = `<h1>Hello World!</h1>`; 
    res.status(200).send(snippet).end(); 
}

app.get('/', rootController); 

const data = {
    meetDog: [
        {name: 'Dee', breed: 'Doodle'},
        {name: 'Bb', breed: 'Pug'}
    ]
};

app.get("/all", function(req, res){
    let json = {
        data
    }; 

    res.status(200)
        .send(json)
        .end(); 
})


app.get("/cats", function(req, res){
    const snippet = `<h1>Meow</h1>`

    res.status(200)
        .send(snippet)
        .end(); 
})

app.get("/dogs", function(req, res){
    const snippet = `<h1>Woof!</h1>`

    res.status(200)
        .send(snippet)
        .end(); 
})

app.get("/cats_and_dogs", function(req, res){
    const snippet = `<h1>Living Together</h1>`

    res.status(200)
        .send(snippet)
        .end(); 
})

app.get("/greet", function(req, res){
    const {name} = req.query;
    let snippet = `<h1>Hello ${name}</h1>`; 
    if (!name) {
        snippet = `<h1>No name provided</h1>`
        res.status(500)
        .send(snippet)
        .end(); 
    }

    res.status(200).send(snippet).end();  
})

app.get("/age", function(req, res){
    const currentYr = 2019; 
    const birthYear = currentYr - req.query.age;
   
    let snippet = `<h1>You were born in ${birthYear}</h1>`; 
    // if (!name) {
    //     snippet = `<h1>No name provided</h1>`
    //     res.status(500)
    //     .send(snippet)
    //     .end(); 
    // }

    res.status(200).send(snippet).end();  
})