
import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBsQgKKMSKhS9tOW54qCTJ-un_cNgBQFuw",
  authDomain: "login-b9847.firebaseapp.com",
  projectId: "login-b9847",
  storageBucket: "login-b9847.appspot.com",
  messagingSenderId: "687919312502",
  appId: "1:687919312502:web:2ad8bb683be1c672e1b957"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;