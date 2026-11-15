// Firebase initialization with environment variables
// Ensure you have a .env file at the project root with VITE_FIREBASE_API_KEY defined.
// Example: VITE_FIREBASE_API_KEY=your_api_key_here

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// The API key is read from an environment variable for security.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hy-my-link.firebaseapp.com",
  projectId: "hy-my-link",
  storageBucket: "hy-my-link.firebasestorage.app",
  messagingSenderId: "1001711745294",
  appId: "1:1001711745294:web:66c2b4932c167f7e8d7f5f",
  measurementId: "G-52MF16V8Q7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
