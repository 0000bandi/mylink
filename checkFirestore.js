import { db } from "./lib/firebase";
import { collection, getDocs } from "firebase/firestore";

async function test() {
  try {
    const snapshot = await getDocs(collection(db, "users/anonymous/links"));
    console.log("Firestore connection successful, docs count:", snapshot.size);
  } catch (e) {
    console.error("Firestore connection error:", e);
    process.exit(1);
  }
}

test();
