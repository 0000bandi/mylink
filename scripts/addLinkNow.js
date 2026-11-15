import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsNzyOhA6uh2V_qocqq1lvVnhOTcF4OYI",
  authDomain: "my-hy-link-6587b.firebaseapp.com",
  projectId: "my-hy-link-6587b",
  storageBucket: "my-hy-link-6587b.firebasestorage.app",
  messagingSenderId: "16141008018",
  appId: "1:16141008018:web:b0cdf9fd90216582c0fa4b",
  measurementId: "G-62W661J6EE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function main() {
  const url = "https://www.youtube.com/watch?v=q-ZFpbrokMg&list=RDq-ZFpbrokMg&start_radio=1";
  const title = "christmas carol";
  const docRef = await addDoc(collection(db, "links"), {
    url,
    title,
    createdAt: serverTimestamp(),
  });
  console.log("Saved link ID:", docRef.id);
}

main().catch((e) => {
  console.error("Error saving link:", e);
  process.exit(1);
});
