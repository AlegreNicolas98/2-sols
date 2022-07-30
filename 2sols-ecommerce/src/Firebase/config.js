import { initializeApp } from "firebase/app";

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

export default function IniFirebase(){
    return app
}