# 롤링페이퍼 기초 프로젝트 ( 파트2-2팀 )

서로 메시지를 남길 수 있는 **롤링페이퍼**를 만드는 프로젝트입니다.  

---

## 기술 스택

- **프레임워크**: React + Vite + TypeScript
- **라우팅**: React Router
- **상태 관리**: Redux Toolkit
- **스타일링**: SCSS

---

## Features

- 반응형 UI + 접근성 고려
- CRUD 작업 기반 작업

---

## Team (파트2-2팀)

- **김정대**: 팀장, FE 아키텍처, 상태관리, 배포/CI
- **윤시현**: 기능 구현, 메시지 CRUD, 저장
- **이나래**: UI 리드, 컴포넌트, 반응형, 접근성, 테스트

---

## 📂 디렉토리 구조

```
src/
  components/          # 재사용 UI (버튼, 모달 등)
    ui/
      Button.jsx       # 컴포넌트는 파스칼 표기법 (맨앞에 대문자, 띄우지말고 대문자 예시 UserCard.jsx) 
      Modal.jsx
      Badge.jsx
      scss/            # scss는 케밥 케이스 표기법( 예시 type-name.scss )
        button.scss
        modal.scss
        badge.scss
    home/              # 메인페이지 안의 컴포넌트
      MainPoint01.jsx
      MainPoint02.jsx
  layouts/             # 공통 레이아웃
    DefaultLayout.jsx
    MainLayout.jsx
    scss/
      default-layout.scss
      main-layout.scss
  pages/               # 라우트 엔트리
    HomePage.jsx
    WritePage.jsx      
    scss/
      home-page.scss
      write-page.scss
  router/
    routes.jsx
  styles/
    index.css
  main.jsx
  App.jsx
```

---

## ⚙️ Starting

```bash
# 1. 레포 클론
git clone https://github.com/<org-or-username>/rolling-paper.git
cd rolling-paper

# 2. 패키지 설치
npm install

# 3. 개발 서버 실행
npm run dev

# 4. 테스트 실행
npm run test
```

---

🛠️ Git 가이드라인

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

📅 일정 계획
- 9/25 - 9/26 : 요구사항 체크, 환경셋업, 컴포넌트 분리 및 가이드  
- 9/27 - 9/28 : 각 페이지 구조 세팅  
- 9/29 - 10/04 : 핵심 기능 개발 및 1차 피드백  
- 10/05 - 10/10 : 핵심 기능 개발 및 2차 피드백  
- 10/11 - 10/12 : 배포 & QA  
- 10/13 : QA & 발표 준비  
- 10/14 : 제출 자료 준비 & 발표 준비  
- 10/15 : 발표


---

🔗 링크
- Notion 기획 문서()
- [Figma 디자인](https://www.figma.com/design/cbZ9PNKSFg4mS7Lf1roZlp/-AAA-%E1%84%85%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%86%BC?node-id=0-1&t=9ro8YozglWSgW6hw-1)
- GitHub Projects()
- 배포 URL ()

---

