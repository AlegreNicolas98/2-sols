// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC4RXDdfkeHj1aGSG-5sPA5vDQSdV6VO5s",
  authDomain: "sols-ecommerce.firebaseapp.com",
  projectId: "sols-ecommerce",
  storageBucket: "sols-ecommerce.appspot.com",
  messagingSenderId: "1017034559915",
  appId: "1:1017034559915:web:3a32ce2e01fd8e3ded02ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// funcion para exportar el app
export const db=getFirestore(app);

export default function iniFirebase(){
    return app
}