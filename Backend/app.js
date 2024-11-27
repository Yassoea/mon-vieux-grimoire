require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');



const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');
const {limiter} = require("./middleware/rate-limiter");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const { string } = require('prop-types');

const app = express();

const dbServer = process.env.DB_SERVER;
const dbUserName = process.env.DB_USER_NAME;
const dbPassword = process.env.DB_PASSWORD;


mongoose.connect(`mongodb+srv://${dbUserName}:${dbPassword}@${dbServer}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=MonVieuxGrimoire`,
    { useNewUrlParser: true,
    useUnifiedTopology: true }
)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => console.log('Connexion à MongoDB échouée !', error.message));



app.use(helmet({ crossOriginResourcePolicy: false }));



app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(express.json());
app.use(mongoSanitize());
app.use(limiter);

app.use('/api/auth', userRoutes);
app.use('/api/books', bookRoutes);

module.exports = app;

