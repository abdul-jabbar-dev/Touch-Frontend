import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA8WZszavXRzOGWw-Dd9pBhGhuSdELoZeI",
  authDomain: "touch-chat-media.firebaseapp.com",
  projectId: "touch-chat-media",
  storageBucket: "touch-chat-media.appspot.com",
  messagingSenderId: "302414639396",
  appId: "1:302414639396:web:1fd299a5dec9b3ae3203b1",
};

const app = initializeApp(firebaseConfig);
export const FirebaseApp = getAuth(app);
