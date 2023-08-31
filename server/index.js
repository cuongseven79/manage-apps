const express = require("express");
const http = require("http");
const twillo = require("twilio");
const app = express();
const dotenv = require("dotenv");
const PORT = 3001;
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    from: process.env.FROM_PHONE_NUMBER,
    to: process.env.TO_PHONE_NUMBER,
    body: "Testapp from server",
  })
  .then((messsage) => console.log(messsage.body));


app.use(express.urlencoded());

app.post("/verify", (req, res) => {
  if (twillo.validateRequest()) {
    return res.json({ messages: "success" });
  } else {
    return res.json({ messages: "failed" });
  }
});
app.listen(PORT, () => {
  console.log("server is running");
});
