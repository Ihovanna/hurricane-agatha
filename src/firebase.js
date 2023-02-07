import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBwyxLp4-xMwM6eAqC1oLcAAovM2nt21Gg",
  authDomain: "hurricane-agatha-2022-map.firebaseapp.com",
  projectId: "hurricane-agatha-2022-map",
  storageBucket: "hurricane-agatha-2022-map.appspot.com",
  messagingSenderId: "903213746797",
  appId: "1:903213746797:web:352fb2815e6823f1f18d64",
  measurementId: "G-LX37NYKW0W"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;