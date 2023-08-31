const express = require("express");
const http = require("http");
const twillo = require("twilio");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const User = require("./config");

const PORT = 3001;
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

function writeUserData(code, phone) {
  app.post("/create", async (req, res) => {
    try {
      // const data = req.body;
      await User.add(code, phone);
      res.send({ messages: "Created Successful" });
    } catch (error) {
      console.log("ERROR is ", error);
    }
  });
}
function updateUserData(data) {
  app.post("/update", async (req, res) => {
    try {
      const id = req.body.id;
      delete id;
      const data = req.body;
      await User.doc(id).update(data);
      res.send({ messages: "Updated" });
    } catch (error) {
      console.log("ERROR is ", error);
    }
  });
}
function getAllUserData() {
  app.get("/", async (req, res) => {
    const snapshot = await User.get();
    const listData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.send(listData);
  });
}
function getCodeById(code) {
  app.get("/", async (req, res) => {
    const snapshot = await User.get();
    const codeStored = snapshot.docs.map((doc) => doc.exists);
  });
}

app.post("/login", async (req, res) => {
  let { code, phone } = req.body;
  console.log(code, phone);

  if (phone && !code) {
    const verify_code = Math.floor(100000 + Math.random() * 900000);
    writeUserData(verify_code, phone);
    client.messages
      .create({
        from: process.env.FROM_PHONE_NUMBER,
        to: process.env.TO_PHONE_NUMBER,
        body: verify_code,
      })
      .then((messsage) => console.log(messsage.body));
    return res.json({ messages: "success", verify_code });
  }

  if (verifyCodes[phone] && code === verifyCodes[phone]) {
    return console.log("success");
  } else {
    console.log(code, verifyCodes[phone]);
    return console.log("failure");
  }
});

// app.post("/verify", (req, res) => {
//   if (twillo.validateRequest()) {
//     return res.json({ messages: "success" });
//   } else {
//     return res.json({ messages: "failed" });
//   }
// });

app.listen(PORT, () => {
  console.log("server is running");
});
