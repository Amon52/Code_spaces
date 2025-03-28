EXPRESS.JS:

Express.js is a minimal and flexible node.js web application framework that provides a robust set of features for web and mobile applications.

Key Feature:

Express.js provides a simple way to handle HTTP requests and responses.
It is responsible for routing requests and sending responses.
The process of determining how an application responds to a client request to a particular end point is referred to as routing.

How Routing works?

A client sends a request to a server with a specific URL. 
The server recieves the request and checks the URL against a set of predefined routes.
The server matches the URL.
Server executes function.
Lastly, the server sends a response back to the client.

STRUCTURE OF THE EXPRESS.JS ROUTES:

A route consists of a path, an HTTP method, and a callback function that executes when a request is made.
It follows this syntax: app.METHOD(PATH, CALLBAcK FUNCTION)
For example:

app.get('/users', (req,res)=>{
    res.send('List of users');
});

In this example:
app is the express.js application instance.
get is the HTTP method.
/users is the URL path.
The callback function sends a response with the string 'List of users'.
(req,res) is an arrow function that takes two paramters.


ROUTE PARAMETERS:

Route parameters are placeholders in the URL that represent actual values when the URL is accessed.
Route parameters are denoted by (:)
They allow one to create URLs that change based on users input. 
They allow for reusability.
For example using social media platforms.
If the URL is /users/:username, this url structure will let the user view several other profiles by simply replacing :username with the actual username.

How to access route parameters in express.js:
app.get('/users:id', (req,res)=>{
    console.log(req.params); //captures the value of the id and is made available in the req.params
    res.send('Users Id')
})


QUERY STRINGS:

This is a way for a client to pass additional data to the server through the URL.It comes after the question mark.
It consists of key-value pairs separated by ampstands (&).
It is necessary for filtering data.
Foe example:

URL:https://examples.com./users?name=John&age=30

In this example:
https://examples.com/users is the base URL
? is the query string delimeter.
name=John&age=30 are key-value pairs

How to access query strings in express.js:

It can be accessed using the req.query object.
for example:
app.get('/search, (req, res)=>{
    const name = req.query.name
    const age = req.query.age
    res.send('Hello, ${name}. You are ${age} years old.');
}); This will access the name and age parameters using the req.query.name and req.query.age because the req.query will have stored the parameters.


Why Routes are Important?

Routes determine how the application will respond to different HTTP methods and URL paths,
Routes help keep the code organized.
Routes can easily be added, removed or modified.

How Routes are Used:

Routes define the API endpoints and the data formats used for communication.
Routes handles requets for web pages, images and other resources.
Routes can be used to communicate between micrservices.

EXPLAIN THE CONCEPT OF MIDDLEWARE FUNCTIONS, INCLUDING APPLICATION-LEVEL, ROUTE-LEVEL, AND ERROR HANDLING MIDDLEWARE:

Middleware functions are functions that have access to the request object, response object and the next middleware function in the application's request-response cycle. 
They can execute any code therefore carrying out a wide range of tasks like authentication.
They can modify the request and response objects.
End the request-response cycle.
Call the next middleware in the stack using the next function.

If the current middleware function doesnt end the request-response cycle it must call the next() function. This is in order to pass control to the next middleware function.


This is as demonstrated below:

app.use('/', (req, res, next)=>{
    console.log('Received);
    next();
});
app.get('/',(req,res)=>{
    res.send('Get request');
});


get: represents the http method
'/' : this is the path for which the function applies
function: middleware function
req: request argument to the middleware function
res: response argument to the middleware function
next: callback argument to the middleware function 

Application-Level Middleware:

It can be used to perform tasks that should be executed for incoming requests. You can add it using the app.use() method.

app.use((req, res, next) => {
    console.log('Request received');
    next();
}); Here, the application level middleware is executed for every request. It will log the message to console then call the next() to pass on control to the next middleware function.

So it is used to authenticate incoming requests as well as validate them.

Route level:

Route-level middleware is bound to a specific route. It works the same way as the application-level middleware. It is bound to the express.Router(). 
It can be added using the router.use() and router.METHOD() functions.
Where Method is the HTTP METHOD

const express = require('express')
const app = express()
const = router = express.Router()

app.get('/', (req, res, next)=>{
    console.log('Route-level midldeware for /');
    next();
})

Error handling middleware:

It is used to catch and handle errors that occur during the request-response cycle. It takes four arguments: err, req, res and next. It can be added using the app.use() method.



app.use((err, req, res, next) =>{
    console.error(err);
    res.status(500).send('Something went wrong')
}); This error handling middleware catches the erorr thrown by the previous function and sends a  500 internal server error response.



