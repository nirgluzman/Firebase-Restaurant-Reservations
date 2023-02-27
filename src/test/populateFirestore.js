const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("../../key/serviceAccountKey.json");

// Initialize Firebase
initializeApp({
  credential: cert(serviceAccount),
});

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();

const {
  reservations,
  reviews,
  restaurants,
  dateAvailabilities,
} = require("./testData");

function populateCollection(collectionName, items) {
  return Promise.all(
    items.map((item) => {
      const { id, ...data } = item;
      return db.collection(collectionName).doc(id).set(data);
    })
  );
}

Promise.all([
  populateCollection("reservations", reservations),
  populateCollection("reviews", reviews),
  populateCollection("restaurants", restaurants),
  populateCollection("dateAvailabilities", dateAvailabilities),
])
  .then(() => {
    console.log("Done!");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
  });
