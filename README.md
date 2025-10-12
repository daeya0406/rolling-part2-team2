# 롤링페이퍼 기초 프로젝트 ( 파트2-2팀 )

서로 메시지를 남길 수 있는 **롤링페이퍼**를 만드는 프로젝트입니다.

---

## 기술 스택

- **프레임워크**: React 19 + Vite + ES6
- **라우팅**: React Router 7
- **스타일링**: SCSS
- **라이브러리**: React-Quill, Swiper, react-toastify

---

## Features

- 반응형 UI + 접근성 고려
- CRUD 작업 기반 작업

---

## Team (파트2-2팀)

- **김정대**: 팀장, 프로젝트 세팅, 배포, 페이지 작업(롤링페이지 만들기[/post], 메세지보내기[/post/:id/message]), 로딩 컴포넌트
- **윤시현**: 리팩토링, 프로젝트 정리 및 개선, 헤더, 팝업, 페이지 작업(롤링페이지 메세지 보기[/post/:id], 롤링페이지 삭제하기[/post/:id/edit]), 커스텀 훅(무한스크롤,Async)
- **이나래**: 프로토타입 정리 및 공유, 공통 컴포넌트 작업, 접근성, QA, 페이지 작업(메인페이지[/main], 롤링페이지 리스트[/list]), Toast 구현

---

## 📂 디렉토리 구조

```
src/
  src/
  apis/            # API
  assets/          # 이미지, 아이콘, 폰트, 스타일 등 정적 자원
  components/      # 재사용 UI 컴포넌트 (버튼, 모달 등)
  hooks/           # 커스텀 훅
  layouts/         # 공통 레이아웃
  pages/           # 라우트 단위 페이지
  router/          # 라우터 설정
  utils/           # 유틸리티 함수
  main.jsx         # 앱 진입점
```

---

## ⚙️ Starting

```bash
# 1. 레포 클론
git clone https://github.com/daeya0406/rolling-part2-team2.git
cd rolling-part2-team2

# 2. 패키지 설치
npm install

# 3.
.env 파일에서 실제 키 값으로 수정
VITE_KAKAO_APP_KEY=팀에서_공유받은_실제_키값

# 5. 개발 서버 실행
npm run dev

# 6. 테스트 실행
npm run test
```

---

## 🛠️ Git 가이드라인

1. 브랜치 전략

   - main: 배포
   - dev: 통합
   - feature/<scope>: 기능 단위 작업

2. 커밋 컨벤션

   - feat: ... (새 기능)
   - fix: ... (버그 수정)
   - refactor: ... (리팩토링)
   - docs: ... (문서/README 수정)

3. PR 규칙
   - 최소 1명 코드리뷰 승인 후 머지
   - PR 제목: [feat] 보드 생성 기능

---

## 📅 일정 계획

- 09/25 - 09/26 : 요구사항 체크, 환경셋업, 컴포넌트 분리 및 가이드
- 09/27 - 09/28 : 각 페이지 구조 세팅
- 09/29 - 10/06 : 핵심 기능 개발 및 1차 피드백
- 10/07 - 10/11 : 핵심 기능 개발 및 2차 피드백 및 리팩토링
- 10/12 - 10/13 : 리팩토링 및 배포
- 10/13 - 10/14 : 배포 & QA & 제출 자료 준비 & 발표 준비
- 10/15 : 발표

---

## 🔗 링크

- [Notion 기획 문서](https://www.notion.so/27e1306908cc806a9c62c0c330d8a2de?v=27e1306908cc800fa717000c2b1b76d9)
- [Figma 디자인](https://www.figma.com/design/cbZ9PNKSFg4mS7Lf1roZlp/-AAA-%E1%84%85%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%86%BC?node-id=0-1&t=9ro8YozglWSgW6hw-1)
- [GitHub Projects](https://github.com/daeya0406/rolling-part2-team2)

---
