const router=require('express').Router()
const bodyParser = require('body-parser');
const twilio=require('twilio')

const accountSid = 'AC42adc57b1e7641bfa5209041f877ce96';
const authToken = '5a01b9256cb009d4c222b0893786159f';
const client = new twilio(accountSid, authToken);





router.post('/incoming', (req, res) => {
  const message = req.body.Body;
  console.log(`Received message: ${message}`);

  
  res.send(`<Response><Message>Thanks for your message: ${message}</Message></Response>`);
});




module.exports=router