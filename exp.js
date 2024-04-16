const express = require('express');
const color = require('color')
const app = express();

app.get("", (req, resp) => {
    resp.send(`<span><h1>Welcome to my page${req.query.name}</h1> <a href="/about">About</a></br></br><a href="/help">Help</a></span>`);
});

app.get("/about", (req, resp) => {
    resp.send(`
    <input type="text" placeholder="Enter Your username" value="${req.query.name}"></input>
    <button>Click me</button>
    <h2>Welcome, This is a About Page</h2><a href="/">Back to Home</a>
    `);
});

app.get("/help", (req, resp) => {
    resp.send(`
    <h2>Welcome, This is a Help Page</h2><a href="/">Back to Home</a></br></br>
    [
        {
            name:"amit kumar",
            dob:"17 may 1994",
        },
        {
            name:"ashish kumar",
            dob:"16 march 1993", 
        },
        {
            name:"anurag kumar",
            dob:"22 jan 2002", 
        },
        {
            name:"umesh kumar yadav",
            dob:"21 march 1965", 
        },
        {
            name:"sabnam devi",
            dob:"02 march 1973", 
        },
    ]
    `);
});


app.listen(7000);