import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBh96beHQhEEi18e2KhSfYKQYKQjReb4xE",
  authDomain: "livesite-9cddd.firebaseapp.com",
  databaseURL: "https://livesite-9cddd-default-rtdb.firebaseio.com",
  projectId: "livesite-9cddd",
  storageBucket: "livesite-9cddd.firebasestorage.app",
  messagingSenderId: "566052465081",
  appId: "1:566052465081:web:e0d6f4f0d002964bf46e68",
  measurementId: "G-BJ3ZL18V2V"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, get, set, update };
