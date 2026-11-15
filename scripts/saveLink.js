// scripts/saveLink.js
// Simple Node script to add a link to Firestore using the linkService.
// Run with: node scripts/saveLink.js

import { addLink } from "../lib/linkService.js";

async function main() {
  const url = "https://www.youtube.com/watch?v=q-ZFpbrokMg&list=RDq-ZFpbrokMg&start_radio=1";
  const title = "christmas carol";
  try {
    const id = await addLink({ url, title });
    console.log("Link saved with ID:", id);
  } catch (e) {
    console.error("Failed to save link:", e);
    process.exit(1);
  }
}

main();
