import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrE5UEsy3t_e4Q7BsZqrIzwl0KMn3ngaE",

    authDomain: "notebook-app-8c215.firebaseapp.com",
  
    projectId: "notebook-app-8c215",
  
    storageBucket: "notebook-app-8c215.appspot.com",
  
    messagingSenderId: "490271106884",
  
    appId: "1:490271106884:web:18cb247374c049a6309911",
  
    measurementId: "G-FZKK0VZ4DK"
  
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };