// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD01FBKxQnnbZxWpWmYXT-SyOwKc5YkB_U",
  authDomain: "netflixgpt-1b2fa.firebaseapp.com",
  projectId: "netflixgpt-1b2fa",
  storageBucket: "netflixgpt-1b2fa.appspot.com",
  messagingSenderId: "196695947532",
  appId: "1:196695947532:web:b56a58bbddaebe5eb37129"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;

*/

// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD01FBKxQnnbZxWpWmYXT-SyOwKc5YkB_U",
  authDomain: "netflixgpt-1b2fa.firebaseapp.com",
  projectId: "netflixgpt-1b2fa",
  storageBucket: "netflixgpt-1b2fa.appspot.com",
  messagingSenderId: "196695947532",
  appId: "1:196695947532:web:b56a58bbddaebe5eb37129",
  measurementId: "G-LCHYZBYCJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;
