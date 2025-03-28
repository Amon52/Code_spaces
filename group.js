// DEMONSTRATE HOW TO DEFINE ROUTES FOR DIFFERENT HTTP METHODS.


const express = require('express');
const app = express();

//GET METHOD: It is used to retrieve data from the server
app.get('/users', (req , res) => {
    res.send('List of users');
});
app.listen(4000)
 //whenever there is a request at /users endpoint the response will be List of users.

//POST METHOD:It is used to create new data on the server
app.post('/read', (req, res)=>{
    res.send('Get a POST request');
});
app.listen(4000)


//PUT METHOD:Is used to update existing data on the server.
app.put('/user', (req,res)=>{
    res.send('Get a PUT request');
});
app.listen(4000)

//DELETE METHOD: I sused to delete data
app.delete('/', (req,res)=>{
    res.send('Get a DELETE request');
});
app.listen(4000)


//Show how routing and middleware are used together to handle common web application tasks like user authentication or API endpoint creation.

//middleware to check if user is authentiucated.
const authenticate = (req, res, next)=>{
    const isAuthenticated = req.query.auth === 'true';
    if (isAuthenticated) {
        next();
    } else {
        res.status(401).send('Acess denied')
    }
};
app.get('/', (req, res)=>{
    res.send('Welcome, log in to access profile.');
});
app.get('/Profile', authenticate, (req, res)=>{
    res.send('Welcome to profile');
});
app.listen(3000)

//Create a simple express.js application with multiple routes and middleware functions to demonstrate these concepts 
//This wil check if a user is logged in, and have multiple routes like /dashboard and /about.

app.use((req, res, next)=>{
    next();
});
const checkauthenticate = (req, res, next)=>{
    const isLogged = req.query.auth === 'true';
    if(isLogged){
        next();
    }else {
        res.status(401).send('Acces denied')
    }
};

//Home
app.get('/', (req, res)=>{
    res.send('Welcome to my website')
});

//About 
app.get('/about', (req,res)=>{
    res.send('About us: We do a good job')
});

//Dashboard
app.get('.Dashboard', checkauthenticate,(req, res)=>{
    res.send('Welcome to your dahsboard');
});
app.listen(4000)


