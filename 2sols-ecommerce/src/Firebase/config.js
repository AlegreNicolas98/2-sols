// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkIK-dY-ugOv50zf4JdK2OSafFFfHlXys",
  authDomain: "sols-3d7a8.firebaseapp.com",
  projectId: "sols-3d7a8",
  storageBucket: "sols-3d7a8.appspot.com",
  messagingSenderId: "957692839046",
  appId: "1:957692839046:web:8bead04357f86f87aa3d07"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// funcion para exportar el app
export const db=getFirestore(app);

export default function iniFirebase(){
    return app
}