const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const admin = require("firebase-admin");

const serviceAccount = require("./velerioimeteosystem-be735-firebase-adminsdk-9xshq-20984ffdd1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://velerioimeteosystem-be735.firebaseio.com"
});

const db = admin.firestore();


app.get('/getmeteostation', (request, response) => {
  let res = [];
  db.collection('meteoStation')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let document = {
            id: doc.id,
            data: doc.data()
          }
          res.push(document)
        })
        return response.send(res)
      })
      .catch((error) => {
        return response.send("Error getting documents: ", error);
      })
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});