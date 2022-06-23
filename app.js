const express = require('express');

//Routes
 const { registriesRouter } = require('./Routes/registries.routes');

//Initialize the app
const app = express();

app.use(express.json());


//Endpoints
app.use('/api/v1/registrations', registriesRouter);

//Global error handler
app.use('*', (err, req, res, next) => {
    //console.log(err);
    res.status(err.statusCode).json({
        status: 'fail',
        message: err.message,
        error: err,
        stack: err.stack
    });
});


module.exports = { app };
