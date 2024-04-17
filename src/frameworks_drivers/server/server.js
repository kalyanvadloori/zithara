const express = require('express')
const app = express()

const customerRoutes = require('../../interface_adapters/controllers/CustomerController');

app.use(express.urlencoded({ limit: '50mb', extended: false }))
app.use(express.json())

app.use('/api/v1/customer',customerRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app