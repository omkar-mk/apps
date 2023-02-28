// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB9ENM2igTBlfM78UhC-oJ12AJMoh4mvxw",
//   authDomain: "medium-clone-20602.firebaseapp.com",
//   projectId: "medium-clone-20602",
//   storageBucket: "medium-clone-20602.appspot.com",
//   messagingSenderId: "915318857508",
//   appId: "1:915318857508:web:3824f97f8093329288ddb1",
//   measurementId: "G-RNFB1YRT5V",
// };
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmAeB6E3pIROkrWHukhghfhuOPxAJRDfE",
  authDomain: "blog-c007e.firebaseapp.com",
  projectId: "blog-c007e",
  storageBucket: "blog-c007e.appspot.com",
  messagingSenderId: "387838462459",
  appId: "1:387838462459:web:f75c432ad7d6e0d7e4e35e",
  measurementId: "G-FFV9W6YNTH"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
