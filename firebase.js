// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBA7Lp_2yYR9SRx0vSQTwVZTseQmHCEmWI",
  authDomain: "xooxle-89b89.firebaseapp.com",
  projectId: "xooxle-89b89",
  storageBucket: "xooxle-89b89.appspot.com",
  messagingSenderId: "748442359113",
  appId: "1:748442359113:web:70f2cb55cc6ceda1903698",
  databaseURL: "https://xooxle-89b89-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore db
export { db };
