const express = require('express'); //Load Express 
const es6Renderer = require('express-es6-template-engine'); 
const compression = require('compression'); 
const helmet = require('helmet'); 
const app = express(); // Run Express



app.listen(3333, function() {
    console.log("listening on port 3333"); 
})

// Middleware 

app.use(compression()); 
app.use(helmet()); 


// Engine to view HTML files

app.engine('html', es6Renderer); 
app.set('views', './views'); 
app.set('view engine', 'html'); 

// Routes 

const rootController = require('./routes/index'), 
 allController = require('./routes/all'),
 wpController = require('./routes/wp'),
 personController = require('./routes/person'), 
 catsController = require('./routes/cats'),
 dogsController = require('./routes/dogs'); 


// Express USE the router that we've exported 

app.use('/', rootController); 
app.use('/all', allController); 
app.use('/wp', wpController); 
app.use('/person', personController); 
app.use('/cats', catsController);
app.use('/dogs', dogsController); 




