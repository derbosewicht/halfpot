import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Optional, for Analytics

const firebaseConfig = {
  apiKey: "AIzaSyAgWbNEiH3Ip24jbNgX4OBt3gJeB2b6OVE",
  authDomain: "halfpot-852fe.firebaseapp.com",
  projectId: "halfpot-852fe",
  storageBucket: "halfpot-852fe.appspot.com",
  messagingSenderId: "520198980118",
  appId: "1:520198980118:web:0ce7fe0feb94e7aed76b37",
  measurementId: "G-PT37CQCL89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Initialize Analytics if needed
const analytics = getAnalytics(app);

export default app;
