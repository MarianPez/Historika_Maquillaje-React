import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA-IJVRFJkIWZVBdDDmnWMrdWgasPmKdvY",
  authDomain: "historika-maquillaje.firebaseapp.com",
  projectId: "historika-maquillaje",
  storageBucket: "historika-maquillaje.appspot.com",
  messagingSenderId: "297381117841",
  appId: "1:297381117841:web:2f74f3ca4ab8cd35b42430"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);