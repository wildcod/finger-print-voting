const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const userRoutes = require('./routes/user');
const voterRoutes = require('./routes/voterRoutes');
const adminRoutes = require('./routes/adminRoutes');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/dataset'));

const URL = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_ATLAS_PW}@clusterv1.xfbeh.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGO_CLUSTER}`

const init = async () => {
    try {
        await mongoose.connect(URL);
        console.log('MONGODB CONNECTED')
    } catch (error) {
        console.error(error)
    }
}

init();

//For CORS error
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method == "OPTIONS") {
        res.header('Access-Control-Allow-Methods', 'PUT ,POST ,DELETE,GET,PATCH')
        return res.status(200).json({})
    }
    next();
});

app.use('/users', userRoutes);
app.use('/voter', voterRoutes);
app.use('/admin', adminRoutes);


// for routes not found
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;