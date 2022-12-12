const express = require('express');
const cookieParser= require('cookie-parser')
require('./utils/dbMongo.js');
//Routes
const landingsRouter = require('./routes/landingsRoutes.js')
const neasRouter = require('./routes/neasRoutes.js');
const usersRouter = require('./routes/usersRoutes.js')
var cors = require('cors');
//Middlewares
const middle404 = require('./middlewares/error404')


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
var corsOptions = {
    origin: '*',
    credentials:  true
  }
app.use(cors(corsOptions));
app.use(cookieParser())
//APIs
app.use('/api', landingsRouter);
app.use('/api', neasRouter);
app.use('/api', usersRouter);

//Display error
app.use(middle404);

//See if server working
app.listen(port, ()=>{
    console.log("Everything is ok");
})