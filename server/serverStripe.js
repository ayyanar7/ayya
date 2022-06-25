var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51L3VdaSFSIIZqqxo2ued1yagf0sP3OD8a85gpMIsHRRatDvEZeJ0TTf5qdJmlQDsk6LxkZKImyGfSz76tkAhvfE4001ONO5qpH');
    var app = express();
    var port = process.env.PORT || 4000;

    // enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 // confirm the paymentIntent
app.post('/pay', async (request, response) => {
    try {
      // Create the PaymentIntent
      let intent = await stripe.paymentIntents.create({
        payment_method: request.body.payment_method_id,
        description: "Test payment",
        amount: request.body.amount * 100,
        currency: 'inr',
        confirmation_method: 'manual',
        confirm: true
      });
      // Send the response to the client
      response.send(generateResponse(intent));
    } catch (e) {
      // Display error on client
      return response.send({ error: e.message });
    }
  });
  const generateResponse = (intent) => {
    console.log("Status: "+intent.status);
    if (intent.status === 'succeeded') {
      // The payment didn’t need any additional actions and completed!
      // Handle post-payment fulfillment
      return {
        success: true
      };
    } else {
      // Invalid status
      console.log("Error: "+intent.status);
      return {
        error: 'STATUS: '+intent.status
      };
    }
  };
app.listen(port, () => {
    console.log('Server started on: ' + port);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Payment Gateway tutorial');
});