const admin = require("firebase-admin");
require("dotenv").config();
const serviceAccount = JSON.parse(process.env.GOOGLE_CREDS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = db

async function decodeIDToken(req, res, next) {
  if (req.headers?.authorization?.startsWith('Bearer ')) {
    const idToken = req.headers.authorization.split('Bearer ')[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req['currentUser'] = decodedToken;
    } catch (err) {
      console.log(err);
    }
  }
  next();
}

module.exports.authenticate = decodeIDToken;