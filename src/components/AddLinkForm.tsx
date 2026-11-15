import React, { useState, useEffect } from "react";
import { addLink, getLinks } from "../../lib/linkService";

export default function AddLinkForm() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [links, setLinks] = useState<Array<{ id: string; url: string; title?: string; createdAt?: any }>>([]);

  // 페이지 로드 시 Firestore에서 최신 링크 목록 가져오기
  const fetchLinks = async () => {
    try {
      const data = await getLinks();
      setLinks(data);
    } catch (err) {
      console.error("Failed to fetch links:", err);
      setStatus(`❌ 링크 목록 로드 실패`);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      setStatus("⚠️ URL을 입력해 주세요.");
      return;
    }
    try {
      const id = await addLink({ url, title });
      setStatus(`✅ 저장 성공! 문서 ID: ${id}`);
      setUrl("");
      setTitle("");
      // 저장 후 목록 재조회
      await fetchLinks();
    } catch (err) {
      setStatus(`❌ 저장 실패: ${(err as Error).message}`);
    }
  };

  return (
    <div style={{ margin: "1rem" }}>
      <h3>링크 추가</h3>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <input
          type="url"
          placeholder="링크 URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{ marginBottom: "0.5rem" }}
        />
        <input
          type="text"
          placeholder="제목 (선택)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem" }}>
          링크 추가
        </button>
      </form>
      {status && <p>{status}</p>}

      <h4>최근 링크 목록</h4>
      {links.length === 0 ? (
        <p>저장된 링크가 없습니다.</p>
      ) : (
        <ul>
          {links.map((link) => (
            <li key={link.id} style={{ marginBottom: "0.4rem" }}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title || link.url}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
