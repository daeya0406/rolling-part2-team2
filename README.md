<img width="1600" height="500" alt="README 넣을 배너" src="https://github.com/user-attachments/assets/98b0db77-9c09-479b-a544-5254234b36b3" />

## ☺️ 소개

서로 메시지를 남길 수 있는 **롤링페이퍼**를 만드는 프로젝트입니다.

---

## 🛠️ 기술 스택

- **프레임워크**: React 19 + Vite + ES6
- **라우팅**: React Router 7
- **스타일링**: SCSS
- **라이브러리**: React-Quill, Swiper

---

## ✨ Features

<table>
  <tr>
    <td align="center" colspan="2">
      <b>반응형 UI + 접근성 고려</b><br>
      <img src="https://github.com/user-attachments/assets/6a3c8373-5ce8-475c-9185-c836fa8ae606"><br>
      다양한 해상도 및 접근성 대응
    </td>
  </tr>
  <tr>
    <td align="center" colspan="2">
      <b>슬라이드</b><br>
      <img src="https://github.com/user-attachments/assets/e7d2f227-9a79-4cf5-b4fe-6dfe7570e29e"><br>
      Swiper.js를 활용한 슬라이드 구현
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>무한스크롤</b><br>
      <img src="https://github.com/user-attachments/assets/866e38e9-dfd1-49ba-afdd-f4ababae105b"><br>
      Intersection Observer 기반 콘텐츠 로드
    </td>
    <td align="center">
      <b>관리자 모드 토글(+ 메시지 삭제)</b><br>
      <img src="https://github.com/user-attachments/assets/36ffb62f-5b5f-4ac2-9bf7-dbd9f6e8cf52"><br>
      관리자 전용 삭제/관리 기능
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>롤링페이지 생성</b><br>
      <img src="https://github.com/user-attachments/assets/5818be76-8961-4b77-a399-f700f67f88c5"><br>
      사용자 맞춤 롤링페이지 생성
    </td>
    <td align="center">
      <b>메시지 보내기</b><br>
      <img src="https://github.com/user-attachments/assets/3e3db5ac-be47-4014-b961-50a47c945eb8"><br>
      작성된 메시지 전송 및 확인
    </td>
  </tr>
</table>

---

## 👥 Team (파트2-2팀)

- **김정대**: 팀장, 프로젝트 세팅, 배포, 페이지 작업(롤링페이지 만들기[/post], 메세지보내기[post/:id/message]), 로딩 컴포넌트
- **윤시현**: 리팩토링, 프로젝트 정리 및 개선, 헤더, 팝업, 페이지 작업(롤링페이지[/post/:id, /post/:id/edit]), 무한스크롤 구현, 커스텀 훅
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

## 🚩 Starting

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

## ⚙️ Git 가이드라인

1.  브랜치 전략

    - main: 배포
    - dev: 통합
    - feature/<scope>: 기능 단위 작업

2.  커밋 컨벤션

    - feat: ... (새 기능)
    - fix: ... (버그 수정)
    - refactor: ... (리팩토링)
    - docs: ... (문서/README 수정)

3.  버전 관리

    - 배포 전 dev → main 머지 시 버전 업데이트 진행
    - `package.json`의 version 수정  
      예시: `"version": "1.0.3"`
    - 커밋 메시지 예시 및 버전 규칙
      ```
      chore(release): v1.0.1  // 패치 버전(버그 수정)
      chore(release): v1.1.0 // 마이너 버전(기능 추가)
      chore(release): v2.0.0 // 메이저 버전(큰 변경)
      ```

4.  PR 규칙

    - 최소 1명 코드리뷰 승인 후 머지
    - PR 제목: [feat] 보드 생성 기능

---

## 🧩 문서 & 일정 관리

![Notion 활용](https://github.com/user-attachments/assets/2e2e91a8-46bc-493e-85da-e452963cb214)

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
- [배포 URL](https://rolling-19-2.vercel.app/)

---
