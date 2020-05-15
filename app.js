//imports; libraries and dependencies
const express =  require('express');
const app = express();
const morgan  = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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

const myMiddleware = (req, res, next) => {
    console.log("Middleware Applied");
    next();
};


//middleware
app.use(morgan('dev'));
app.use(myMiddleware);
app.use(bodyParser.json());


app.use('/', postRoutes);

const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`NodeJS is listening on port: ${port}`);
});
