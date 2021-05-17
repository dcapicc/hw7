const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCCqWUyWMzZS-fMEWj-fS1j_wkms1m7wiA",
    authDomain: "kiei-451-a9348.firebaseapp.com",
    projectId: "kiei-451-a9348",
    storageBucket: "kiei-451-a9348.appspot.com",
    messagingSenderId: "996156698303",
    appId: "1:996156698303:web:e68b20903b2b910fcf200a"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase