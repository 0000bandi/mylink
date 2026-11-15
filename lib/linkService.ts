// lib/linkService.ts
// Firestore에 링크 데이터를 저장하는 헬퍼 함수 (TypeScript)
// 사용 예시: await addLink({ url: "https://example.com", title: "예시 사이트" });

import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

/**
 * Firestore "links" 컬렉션에 새 문서를 추가합니다.
 * @param link - 저장할 링크 정보
 */
export async function addLink(link: { url: string; title?: string }) {
  try {
    const docRef = await addDoc(collection(db, "users/anonymous/links"), {
      url: link.url,
      title: link.title ?? null,
      createdAt: serverTimestamp(),
    });
    console.log("Link added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding link:", error);
    throw error;
  }
}

// Firestore에서 링크 목록을 읽어오는 헬퍼
import { getDocs, query, orderBy } from "firebase/firestore";

/**
 * "links" 컬렉션의 모든 문서를 반환합니다.
 * @returns {Promise<Array<{id:string; url:string; title:string|null; createdAt:any}>>}
 */
export async function getLinks() {
  try {
    const q = query(collection(db, "users/anonymous/links"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching links:", error);
    throw error;
  }
}
