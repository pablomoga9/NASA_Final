const express = require('express');
const cookieParser= require('cookie-parser')
require('./utils/dbMongo.js');
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51MPTt5CSfHjUvrMmnlh0s1AzT9ytvrHAQIOoqcgZAaLI9KgF4rw1QKDgR12Fvn09VpcVWRLoDSS5O1SY50hehkqV00bdAkeNcy");

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
    origin: 'http://localhost:3001',
    credentials:  true
  }
app.use(cors(corsOptions));
app.use(cookieParser())
//APIs
app.use('/api', landingsRouter);
app.use('/api', neasRouter);
app.use('/api', usersRouter);

app.post("/api/checkout", async (req, res) => {
  
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "EUR",
      description: "neas/landings",
      payment_method: id,
      confirm: true, 
    });

    console.log(payment);

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});

//Display error
app.use(middle404);

//See if server working
app.listen(port, ()=>{
    console.log("Everything is ok");
})