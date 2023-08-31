const firebase = require("firebase-admin");
var serviceAccount = require("./path/service-account.json");

const firebaseConfig = {
  apiKey: "AIzaSyC-4NYZ61wYw64lCKIwT2GzD9r4DpjTKAA",
  authDomain: "manage-apps-857ed.firebaseapp.com",
  projectId: "manage-apps-857ed",
  storageBucket: "manage-apps-857ed.appspot.com",
  messagingSenderId: "109526861221",
  appId: "1:109526861221:web:4756d90a6d439988ba544c",
};

firebase.initializeApp({
  firebaseConfig,
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://manage-apps-857ed.firebaseio.com/",
});
const database = firebase.firestore();
const User = database.collection("userInfor");

module.exports = User;