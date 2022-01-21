const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.group("First Middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Second Middleware");
//     res.send("<p>Assignment Solved</p>")
// });

app.use('/users', (req, res, next) => {
    console.log('/user Middleware')
    res.send('<p>The Middleare that handles just users</p>')
});

app.use('/', (req, res, next) => {
    console.log('/ Middleware')
    res.send('<p>The Middleare that handles just /</p>')
});


app.listen(3000);