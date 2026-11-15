# 📄 마이링크 (MyLink) 제품 요구사항 정의서 (PRD)
**링크트리(Linktree) 클론 멀티유저 SaaS 플랫폼**
*Version: 1.4 (Updated: 2026-11-15 - shadcn/ui 디자인 시스템 표준 확정)*

---

## 1. 프로젝트 개요 (Project Overview)

### 1.1 서비스 명칭 및 슬로건
- **서비스명**: 마이링크 (MyLink)
- **슬로건**: "하나의 링크로 나를 표현하는 가장 쉬운 방법"
- **서비스 형태**: 다중 사용자(Multi-Tenant SaaS) 기반 웹 애플리케이션
- **디자인 시스템 표준**: **shadcn/ui** (Preset: `b6u0Tmjb6`, Style: `base-rhea`, Base Color: `olive`)

### 1.2 개발 배경 및 목표
- 인스타그램, 틱톡, 유튜브 등 소셜 플랫폼의 프로필 단일 링크 제한을 해결.
- 개발자, 크리에이터, 대학생 등 누구나 1분 만에 자신만의 감각적인 멀티 링크 페이지(`/@사용자명` 또는 `/[username]`)를 생성하고 관리할 수 있도록 지원.
- 단순 링크 연결을 넘어 **유튜브/음악 등 풍부한 미디어 임베드**와 **실시간 유입/클릭 분석 대시보드**를 기본 제공하여 콘텐츠 영향력 극대화.
- 직관적인 **좌측 편집 패널 + 우측 실시간 모바일 목업 미리보기(Live Preview)** 환경을 제공하여 최상의 관리자 경험 구축.
- **향후 모든 UI/UX 개발은 shadcn/ui 공식 컴포넌트와 토큰 시스템을 단일 진실 공급원(SSOT)으로 삼아 일관성 있게 구현.**

---

## 2. 타겟 사용자 및 핵심 가치 (Target & Value Proposition)

| 구분 | 주요 특징 및 니즈 | 제공 가치 |
|---|---|---|
| **학생 및 주니어 개발자** | 깃허브, 블로그, 포트폴리오 노션을 한곳에 모으고 싶음 | 깔끔하고 감각적인 프로필 페이지를 무료로 손쉽게 구축 |
| **SNS 크리에이터 / 인플루언서** | 신규 영상 홍보, 음원 스트리밍, 협찬 링크 노출 필요 | 유튜브 영상 인라인 재생 및 실시간 클릭/조회수 분석 제공 |
| **일반 개인 및 브랜드** | 오픈채팅, 명함, 소셜 계정, 행사 안내 링크 집약 필요 | 코딩 지식 없이 프리셋 테마 및 직관적 블록 조립으로 완성 |

---

## 3. 사용자 페르소나 및 시나리오 (User Personas & Scenarios)

### 3.1 대표 페르소나 정의

```
[페르소나 A: 이다영 (20세, 컴퓨터공학과 1학년)]
• 배경: 바이브 코딩 및 프론트엔드 웹 개발을 배우며 첫 개인 포트폴리오를 준비 중.
• 니즈: 깃허브, 기술 블로그, 포트폴리오 노션 링크를 깔끔한 단일 페이지로 만들어 이력서와 인스타 프로필에 걸고 싶음.
• 불편 사항: 기존 링크 서비스는 커스터마이징이 제한적이거나 불필요하게 복잡함.

[페르소나 B: 박민수 (24세, IT/테크 크리에이터)]
• 배경: 유튜브 채널과 인스타그램을 운영하며 주 2회 리뷰 영상을 업로드함.
• 니즈: 최신 영상을 링크 페이지 내에서 바로 재생시키고, 어떤 링크가 클릭을 많이 받는지 데이터로 확인하고 싶음.
• 불편 사항: 링크 클릭 시 외부 브라우저로 튕기면 유저 이탈률이 높고, 클릭 통계 분석이 유료 플랜에만 묶여 있음.

[페르소나 C: 김지우 (22세, 모바일 방문자)]
• 배경: 인스타그램 탐색 탭에서 관심 있는 크리에이터의 프로필 링크를 클릭해 방문함.
• 니즈: 로딩이 빠르고, 모바일 화면에서 깨짐 없이 직관적으로 원하는 링크를 누르고 싶음.
```

---

### 3.2 핵심 사용자 시나리오 (End-to-End User Journeys)

#### 🎬 시나리오 1: 대학생/주니어 개발자의 포트폴리오 링크 구축 및 배포
1. **회원가입 & 핸들 선점**:
   - 이다영은 '마이링크' 랜딩 페이지에서 `[Google로 3초 만에 시작하기]`를 클릭한다.
   - 고유 URL 핸들 입력란에 `dayoung`을 입력하자 실시간으로 `사용 가능한 주소입니다!` 녹색 체크가 뜬다.
2. **2단 분할 대시보드 진입**:
   - 가입 완료 즉시 좌측에는 shadcn/ui 기반 [링크 관리] 편집 패널, 우측에는 스마트폰 목업 화면이 나란히 뜬다.
   - `[+ 새 블록 추가]` 버튼을 눌러 'GitHub 저장소', 'Velog 기술 블로그', 'Notion 이력서' 링크 3개를 등록한다.
3. **드래그 앤 드롭 정렬 & 실시간 피드백**:
   - 이번 주에 완성한 'Notion 이력서'를 가장 돋보이게 하기 위해 링크 왼쪽 핸들(`:::`)을 잡아 상단으로 끌어올린다.
   - 우측 폰 목업에서 실시간으로 이력서 버튼이 맨 위로 부드럽게 이동하는 것을 확인한다.
4. **테마 선택 및 프로필 단장**:
   - `[프로필 & 테마]` 탭으로 이동하여 아바타 사진을 업로드하고, 바이오에 "코드로 아이디어를 현실로 만드는 주니어 개발자"를 입력한다.
   - 테마 프리셋 중 올리브 톤의 모던 미니멀 테마를 클릭하자 오른쪽 폰 화면이 즉시 감각적인 올리브 테마 카드로 변신한다.
5. **공유 및 배포**:
   - 우측 상단 `[내 링크 복사]` 버튼을 눌러 클립보드에 `mylink.io/dayoung`을 복사한 뒤, 인스타그램 프로필 바이오와 이력서 링크란에 등록한다.

---

#### 🎬 시나리오 2: 크리에이터의 유튜브 인라인 영상 홍보 및 실시간 분석
1. **영상 블록 추가**:
   - 크리에이터 박민수는 새로 제작한 유튜브 영상 조횟수를 올리기 위해 대시보드에 로그인한다.
   - `[+ 새 블록 추가]`에서 **[유튜브 임베드]**를 선택하고 유튜브 영상 URL을 붙여넣는다.
   - 우측 폰 목업에서 별도의 팝업 없이 16:9 반응형 유튜브 플레이어가 즉시 생성되어 썸네일과 재생 버튼이 뜨는 것을 확인한다.
2. **섹션 구분으로 가독성 향상**:
   - 영상 위에는 shadcn Badge/Header를 활용한 `[헤더 블록]`을 추가하여 `🎬 이번 주 신규 영상` 라벨을 달고, 그 아래에는 `🛍️ 영상 속 사용 장비` 링크 그룹을 분리 배치한다.
3. **실시간 트래픽 및 클릭 분석**:
   - 인스타그램 스토리에 마이링크 주소를 공유한 지 하루 뒤, 대시보드의 `[통계 분석 (Analytics)]` 탭을 연다.
   - 상단 KPI 카드에서 **오늘 총 조회수 1,280회**, **총 클릭수 420회 (CTR 32.8%)**를 확인한다.
   - 링크별 성과 랭킹 표를 보며 어떤 장비 링크가 가장 많이 클릭되었는지 파악하고 다음 콘텐츠 기획에 반영한다.

---

#### 🎬 시나리오 3: 모바일 방문자의 부드러운 콘텐츠 소비 및 원클릭 공유
1. **인앱 브라우저 접속**:
   - 모바일 방문자 김지우는 인스타그램 프로필에서 `mylink.io/dayoung` 링크를 탭한다.
   - 인앱 브라우저 환경임에도 1초 미만으로 지연 없이 깔끔하게 모바일 풀스크린 뷰가 열린다.
2. **콘텐츠 탐색 및 인터랙션**:
   - 상단의 인스타그램, 깃허브 원형 아이콘 바를 훑어본 뒤, 이다영이 작성한 기술 블로그 링크 버튼을 누른다.
   - 버튼을 누르는 순간 shadcn 버튼의 쫀득한 햅틱 애니메이션(`active:scale-[0.98]`)을 느끼며 새 탭에서 블로그 글로 이동한다.
3. **SNS 원클릭 공유**:
   - 유익한 포트폴리오라고 생각한 김지우는 우측 상단의 `[공유]` 아이콘을 터치한다.
   - 모바일 시스템 공유 창(Web Share API)이 열려 카카오톡 단체방에 바로 링크를 전송한다.

---

## 4. 디자인 시스템 표준: shadcn/ui (`b6u0Tmjb6`) ✨ 신규 확정

> **중요 원칙**: 앞으로 마이링크 프로젝트의 모든 신규 화면 및 컴포넌트 개발은 임의의 인라인 스타일링을 지양하고, **shadcn/ui 컴포넌트와 토큰 시스템을 표준으로 사용**합니다.

### 4.1 프리셋 명세 (Preset Specification)
- **Preset Code**: `b6u0Tmjb6`
- **Style Archetype**: `base-rhea` (부드러운 곡률, 세련된 카드 보더, 최신 Base UI 기반)
- **Base Color Palette**: `olive` (자연스럽고 편안한 올리브 그린 계열)
- **Color System**: 차세대 **OKLCH** 시맨틱 색상 체계 적용
- **Border Radius**: `--radius: 0.625rem` (`rounded-2xl` 및 `rounded-[24px]` 카드 지오메트리)
- **Dark Mode**: 완벽한 다크 테마 지원 (`.dark` 클래스 스위칭 시 올리브 딥 차콜/블랙으로 전환)

### 4.2 주요 컴포넌트 및 용도 매핑
| 컴포넌트 | 위치 | 용도 및 역할 |
|---|---|---|
| **Button** | `@/components/ui/button` | 주요 CTA(Primary Olive), 2차 액션(Secondary), 외곽선(Outline), 위험(Destructive) 버튼 |
| **Card** | `@/components/ui/card` | 대시보드 관리 패널, 통계 요약 카드, 모바일 링크 카드, 유튜브 플레이어 래퍼 |
| **Badge** | `@/components/ui/badge` | 프리셋 표시, 링크 클릭수, 카테고리 태그, 온라인 상태 표시 |
| **Avatar** | `@/components/ui/avatar` | 프로필 사진 렌더링, `AvatarFallback`(이니셜), `AvatarBadge`(온라인 점) |
| **Tabs** | `@/components/ui/tabs` | 대시보드 메인 탭([링크], [프로필], [통계], [설정]) 및 뷰 스위처 |
| **Input** | `@/components/ui/input` | 링크 제목/URL 입력창, 사용자 검색, 프로필 바이오 입력 |
| **Switch** | `@/components/ui/switch` | 개별 링크 실시간 활성화/비활성화 토글 스위치 |
| **Separator** | `@/components/ui/separator` | 프로필과 링크 영역 사이의 정갈한 구분선 |

---

## 5. 기술 스택 및 아키텍처 (Tech Stack & Architecture)

### 5.1 Frontend
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Library**: React 19
- **Design System**: **shadcn/ui (Preset `b6u0Tmjb6`)**
- **Core Primitives**: `@base-ui/react` (shadcn 공식 프리미티브)
- **Styling**: Tailwind CSS v4, `tw-animate-css`, `class-variance-authority`
- **Icons**: `lucide-react`
- **Drag & Drop**: `@dnd-kit/core` 및 `@dnd-kit/sortable` (터치 및 데스크톱 드래그 앤 드롭 지원)
- **Data Visualization**: `Recharts` 또는 경량 모던 SVG 차트 컴포넌트 (분석 대시보드용)

### 5.2 Backend & Infrastructure (BaaS)
- **BaaS**: Supabase 또는 Firebase
  - **인증 (Authentication)**: 소셜 로그인 (Google, GitHub) + 이메일/비밀번호 간편 가입
  - **데이터베이스 (Database)**: PostgreSQL (Supabase) 또는 Cloud Firestore (Firebase)
  - **스토리지 (Storage)**: 프로필 아바타 이미지 및 썸네일 업로드 버킷
- **배포 (Deployment)**: Vercel 또는 Firebase App Hosting

---

## 6. 데이터 모델 정의 (Data Schema)

### 6.1 Profiles (사용자 프로필)
| 필드명 | 타입 | 필수 여부 | 설명 |
|---|---|:---:|---|
| `id` | UUID (PK) | O | Auth 사용자 고유 식별자 |
| `username` | String (Unique) | O | 고유 URL 핸들 (영문/숫자/언더스코어, 예: `dayoung`) |
| `display_name` | String | O | 화면에 표시될 사용자 이름 (예: `이다영`) |
| `bio` | Text | X | 한 줄 소개글 (최대 120자) |
| `avatar_url` | String | X | 프로필 이미지 스토리지 URL |
| `theme_id` | String | O | 적용된 테마 ID (기본값: `'olive-rhea'`) |
| `social_links` | JSON | X | `{ instagram?: string, github?: string, youtube?: string, email?: string }` |
| `total_views` | Integer | O | 프로필 누적 방문자 수 (기본값: `0`) |
| `created_at` | Timestamp | O | 계정 생성 일시 |
| `updated_at` | Timestamp | O | 프로필 수정 일시 |

### 6.2 Links & Blocks (링크 및 미디어 블록)
| 필드명 | 타입 | 필수 여부 | 설명 |
|---|---|:---:|---|
| `id` | UUID (PK) | O | 블록 고유 식별자 |
| `profile_id` | UUID (FK) | O | 소유자 프로필 식별자 (`Profiles.id`) |
| `type` | String | O | 블록 유형: `'standard'`(일반 링크), `'youtube'`(유튜브 영상), `'music'`(음악), `'header'`(구분 제목) |
| `title` | String | O | 링크 라벨 또는 섹션 헤더 제목 |
| `url` | String | X | 대상 URL (`type='header'`인 경우 nullable) |
| `metadata` | JSON | X | 부가 데이터: `{ video_id?: string, embed_type?: string, subtitle?: string }` |
| `is_active` | Boolean | O | 공개 활성화/비활성화 토글 여부 (기본값: `true`) |
| `order_index` | Integer | O | 목록 내 노출 정렬 순서 (0, 1, 2...) |
| `click_count` | Integer | O | 누적 클릭 수 (기본값: `0`) |
| `created_at` | Timestamp | O | 블록 생성 일시 |
| `updated_at` | Timestamp | O | 블록 수정 일시 |

### 6.3 Analytics Logs (방문 및 클릭 로깅)
| 필드명 | 타입 | 필수 여부 | 설명 |
|---|---|:---:|---|
| `id` | UUID (PK) | O | 이벤트 고유 식별자 |
| `profile_id` | UUID (FK) | O | 프로필 식별자 |
| `link_id` | UUID (FK) | X | 클릭된 링크 식별자 (페이지 뷰인 경우 `null`) |
| `event_type` | String | O | 이벤트 구분: `'page_view'`(페이지 조회) 또는 `'link_click'`(링크 클릭) |
| `referrer` | String | X | 유입 출처 도메인 (예: `instagram.com`, `t.co`, `direct`) |
| `device` | String | X | 기기 환경: `'mobile'`, `'desktop'`, `'tablet'` |
| `created_at` | Timestamp | O | 이벤트 발생 시각 |

---

## 7. 화면별 상세 기능 요구사항 (Functional Requirements)

### 7.1 회원가입, 로그인 및 핸들 선점 (Auth & Onboarding)
1. **간편 인증**:
   - 구글 원클릭 로그인 및 이메일/비밀번호 회원가입 지원.
2. **핸들(Username) 검증**:
   - 회원가입 시 고유 핸들 설정 (최소 3자~최대 20자, 영문 소문자/숫자/언더스코어/하이픈).
   - 실시간 중복 검증(`Check Availability`)으로 이미 존재하는 핸들 차단.
3. **가입 즉시 기본 템플릿 생성**:
   - 계정 생성 완료 시 샘플 링크 2개와 기본 프로필이 자동 세팅되어 즉시 작동 가능한 상태로 대시보드 진입.

---

### 7.2 관리자 대시보드 (Admin Dashboard)
대시보드는 **2단 분할 레이아웃(Split Screen)**으로 구성되며, 모든 컨트롤은 shadcn/ui 컴포넌트로 구현됩니다.
- **좌측 영역 (Editing Panel)**:
  - 상단 메인 탭(shadcn Tabs): `[링크/블록 관리 (Links)]` / `[프로필 & 테마 (Appearance)]` / `[통계 분석 (Analytics)]` / `[설정 (Settings)]`
  - 링크/블록 추가(shadcn Card, Input, Button), 인라인 수정, 드래그 앤 드롭 순서 변경
  - 변경 사항은 실시간 반영(Debounced Auto-save)
- **우측 영역 (Sticky Live Mobile Preview)**:
  - 스마트폰 외곽선(iPhone/Android 프레임) 목업 제공.
  - 좌측에서 링크를 추가, 수정, 순서 변경하거나 테마를 바꾸면 **오른쪽 폰 화면에서 새로고침 없이 실시간으로 동기화(Real-time Reflection)**.
  - 목업 상단에 내 공개 링크 URL 복사 및 새 창 열기 버튼 제공.

---

### 7.3 다양한 블록 및 링크 관리 (Blocks & Links Management)
1. **블록 타입 선택 추가**:
   - `[+ 새 블록 추가]` 버튼 클릭 시 블록 선택 모달/드롭다운 노출:
     - 🔗 **일반 링크 (Standard Link)**: 제목 + 대상 URL 입력.
     - 🎥 **유튜브 임베드 (YouTube Embed)**: 유튜브 영상/쇼츠 링크 입력 시 자동으로 영상 ID를 파싱하여 공개 페이지에서 인라인 비디오 플레이어로 재생.
     - 🎵 **음악 스트리밍 (Music Embed)**: Spotify/SoundCloud 트랙 링크 임베드 플레이어 지원.
     - 🏷️ **섹션 구분 헤더 (Section Header)**: 링크들을 카테고리별로 묶어주는 텍스트 헤더 라벨.
2. **인라인 에디팅 & 실시간 수정**:
   - 대시보드 카드 내에서 제목과 URL을 클릭하여 즉시 수정.
3. **활성화/비활성화 토글 (shadcn Switch)**:
   - 스위치 컴포넌트로 링크를 삭제하지 않고 임시 숨김 처리.
4. **드래그 앤 드롭 정렬 (Drag & Drop Reordering)**:
   - 핸들 아이콘(`:::`)을 드래그하여 직관적으로 노출 순서를 변경 (`order_index` 즉시 갱신).
5. **개별 링크 통계 확인**:
   - 링크 카드 우측에 누적 클릭수 배지(shadcn Badge) 표시.

---

### 7.4 프로필 및 테마 커스텀 (Appearance & Profile)
1. **프로필 정보 편집**:
   - 아바타 이미지 업로드 및 크롭/미리보기 (shadcn Avatar, 스토리지 저장).
   - 표시 이름(Display Name) 및 한 줄 바이오(Bio) 입력 (최대 120자 글자 수 카운터).
2. **소셜 아이콘 바 (Social Links Bar)**:
   - 인스타그램, 깃허브, 유튜브, X(트위터), 이메일 등 원하는 소셜 계정 URL 등록.
   - 공개 프로필의 프로필 사진 바로 아래 또는 하단에 모던한 원형 아이콘으로 노출.
3. **테마 커스텀 & 다크 모드**:
   - shadcn/ui Olive(b6u0Tmjb6) 테마를 기본으로 하되, 사용자의 취향에 따라 라이트/다크 모드 및 액센트 컬러 프리셋 선택 지원.

---

### 7.5 실시간 분석 대시보드 (Analytics Dashboard)
대시보드의 `[통계 분석 (Analytics)]` 탭에서 사용자 링크 페이지의 트래픽을 한눈에 파악합니다.

1. **상단 핵심 지표 요약 카드 (shadcn Card KPIs)**:
   - **총 조회수 (Total Views)**: 공개 프로필 누적 방문자 수
   - **총 클릭수 (Total Clicks)**: 전체 링크 누적 클릭 횟수
   - **평균 클릭률 (Average CTR)**: `(총 클릭수 / 총 조회수) * 100` (%) 지표
2. **일별/주별 트래픽 추이 차트**:
   - 최근 7일 / 30일 조회수 및 클릭수 추이를 시각화하는 꺾은선/바 차트.
3. **링크별 성과 랭킹 (Top Performing Links)**:
   - 가장 많은 클릭을 유도한 링크 TOP 5 리스트와 개별 CTR 지표 노출.
4. **유입 경로 및 기기 분석 (Referrer & Devices)**:
   - **유입 출처**: Instagram, YouTube, X(Twitter), Direct(직접 유입) 등 점유율 비율 표시.
   - **디바이스 비율**: 모바일(Mobile) vs 데스크톱(Desktop).

---

### 7.6 공개 링크 페이지 (Public Profile Page: `/[username]`)
1. **모바일 최적화 반응형 뷰**:
   - 인스타그램/틱톡 인앱 브라우저 및 모든 모바일 디바이스에서 여백 깨짐 없이 최적화된 풀스크린 레이아웃.
2. **인라인 미디어 재생**:
   - 유튜브 블록: 16:9 반응형 iframe으로 페이지 이탈 없이 그 자리에서 바로 영상 시청 가능.
3. **상단 공유 기능**:
   - 우측 상단 `[공유]` 버튼: 모바일에서는 Web Share API(`navigator.share`) 트리거, 데스크톱에서는 클립보드 링크 자동 복사 및 토스트 알림.
4. **클릭 로깅 및 인터랙션**:
   - shadcn 버튼 터치 시 쫀득한 스케일 다운 피드백(`active:scale-[0.98]`).
   - 새 탭(`target="_blank"`, `rel="noopener noreferrer"`)으로 안전하게 링크 이동.
   - 클릭 이벤트 발생 시 비동기 백그라운드로 `click_count` 및 유입 로그 기록.
5. **마이링크 푸터**:
   - 하단에 "Powered by 마이링크" 배지 노출 (클릭 시 서비스 메인으로 이동하여 신규 가입 유도).

---

## 8. 비기능적 요구사항 (Non-Functional Requirements)

1. **성능 및 반응 속도 (Performance)**:
   - Next.js의 SSR / ISR을 활용하여 공개 링크 페이지 초기 로딩 시간 1초 미만(FCP < 1.0s) 달성.
   - 유튜브 iframe은 레이지 로딩(`loading="lazy"`)을 적용하여 초기 페이지 로딩 속도 저하 방지.
   - 프로필 이미지는 Next.js `<Image />` 최적화 및 WebP 포맷 지원.
2. **모바일 및 웹 호환성**:
   - 인스타그램, 카카오톡, 라인, 틱톡 인앱 브라우저 내에서 자바스크립트 및 링크 이동이 정상 동작해야 함.
3. **접근성 (Accessibility - A11y)**:
   - shadcn/ui 및 Base UI의 내장 접근성 표준(WAI-ARIA, 키보드 네비게이션, 포커스 링 관리)을 준수.
4. **보안 (Security)**:
   - Supabase/Firebase의 Row Level Security (RLS) 적용: 사용자는 오직 본인이 소유한 프로필과 링크만 수정/삭제 가능.
   - 누구나 공개된 활성 링크(`is_active == true`)는 읽기(Read) 가능.
   - URL 입력 필드에 `http://` 또는 `https://` 유효성 검증 및 XSS 살균.
5. **SEO 및 오픈그래프 (OpenGraph)**:
   - 카카오톡이나 SNS에 링크 공유 시 해당 사용자의 프로필 사진, 표시 이름, 소개글이 카카오톡 미리보기 카드에 동적으로 노출되도록 Dynamic Metadata 구현.

---

## 9. 개발 로드맵 및 마일스톤 (Milestones)

```
[Phase 1: 기반 구축 & shadcn/ui 디자인 시스템 확립]
├─ 1.1 shadcn/ui 프리셋 (b6u0Tmjb6, Olive, Base-Rhea) 프로젝트 초기화 및 구축 완료 [DONE]
├─ 1.2 핵심 UI 컴포넌트 라이브러리(Button, Card, Badge, Avatar, Tabs, Input, Switch) 셋업 [DONE]
├─ 1.3 DB 스키마 설계 및 Supabase/Firebase 환경 연동 (Profiles, Links, Analytics)
├─ 1.4 인증 시스템 구현 (소셜 로그인 및 고유 핸들 선점)
├─ 1.5 shadcn/ui 기반 2단 분할 관리자 대시보드 구현
└─ 1.6 공개 페이지 (/[username]) 배포 및 모바일 최적화

[Phase 1.5: 미디어 임베드 & 실시간 분석]
├─ 2.1 유튜브 인라인 플레이어 임베드 블록 구현
├─ 2.2 실시간 페이지 뷰 / 링크 클릭 비동기 로깅
└─ 2.3 대시보드 내 분석 탭 (KPI 카드, 7일 추이 차트, Top 5 랭킹)

[Phase 2: 확장 기능 (Next Step)]
├─ 3.1 오프라인용 QR 코드 자동 생성 및 다운로드 기능
├─ 3.2 음악 스트리밍 (Spotify/SoundCloud) 플레이어 임베드
└─ 3.3 테마 및 버튼 스타일 자유 커스터마이징 고도화
```
