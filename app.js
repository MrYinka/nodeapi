//imports; libraries and dependencies
const express =  require('express');
const app = express();
const morgan  = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

//Db Connection
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true } )
    .then(() =>  console.log("DB Connected!!!"));

mongoose.connection.on("error", err  => {
    console.log(`DB Connection failed: ${err.message}`);
});


//bringing in routes
const postRoutes = require('./routes/posts');
const authRoutes = require('./routes/auth');




//middleware
app.use(morgan('dev'));
app.use(expressValidator());
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', postRoutes);
app.use('/', authRoutes);

const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`NodeJS is listening on port: ${port}`);
});
