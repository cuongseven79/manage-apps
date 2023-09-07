const express = require("express");
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

async function CreateNewAccessCode(phoneNumber) {
  const newAccessCode = Math.floor(100000 + Math.random() * 900000).toString();
  try {
    const snapshot = await User.where("phoneNumber", "==", phoneNumber).get();

    if (!snapshot.empty) {
      const docId = snapshot.docs[0].id;
      await User.doc(docId).update({ accessCode: newAccessCode });
    } else {
      await User.add({ accessCode: newAccessCode, phoneNumber: phoneNumber });
    }
  } catch (error) {
    console.error("Error at CreateNewAccessCode:", error);
  }
  return newAccessCode;
}

async function ValidateAccessCode(accessCode, phoneNumber) {
  const snapshot = await User.get();
  try {
    const dataStored = snapshot.docs.find(
      (doc) => doc.data().phoneNumber === phoneNumber
    );
    if (dataStored && dataStored.data().accessCode === accessCode) {
      await User.doc(dataStored.id).update({ accessCode: "" });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error at ValidateAccessCode:", error);
  }
}
app.get("/", (req, res) => {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  res.json({ fullUrl });
  console.log(fullUrl);
});
app.post("/", async (req, res) => {
  const { codeEntered, phoneEntered } = req.body;

  try {
    if (phoneEntered && !codeEntered) {
      const newAccessCode = await CreateNewAccessCode(phoneEntered);
      client.messages
        .create({
          from: process.env.FROM_PHONE_NUMBER,
          to: process.env.TO_PHONE_NUMBER,
          body: newAccessCode,
        })
        .then((messsage) => console.log(messsage.body));
      return res.json({ newAccessCode });
    }

    const isLoggedIn = await ValidateAccessCode(codeEntered, phoneEntered);
    if (isLoggedIn) {
      console.log("Login successful");
      return res.json({
        messages: "Login successful",
        phoneNumber: phoneEntered,
      });
    } else {
      console.log("Login failed");
      return res.json({ messages: "Login failed" });
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.listen(PORT, () => {
  console.log("server is running");
});
