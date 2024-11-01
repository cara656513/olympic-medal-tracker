# Olympic Medal Tracker 만들기
- 2024 파리 올림픽의 메달 집계를 관리하는 Olympic Medal Tracker
- 리액트 컴포넌트, 이벤트 관리, 상태(state) 관리를 통해 CRUD 기능을 구현
- 🔭[배포용 링크](https://olympic-medal-tracker-git-main-caras-projects-c508497a.vercel.app/)
<br>

## 💻기술 스택
<div style="display:flex; justify-contents: center;">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
</div>
<br>

## ✔필수 요구사항
- 제출 폼 UI 구현
- 메달 집계 CRUD 기능
- 메달 집계 정렬
- 레이아웃 설정
- 컴포넌트 구조
<br>

## 👍선택 요구사항
- 중복 국가 처리
- 존재하지 않는 국가 알림
- 총 메달 수 정렬
- 로컬 스토리지 활용
<br>

## 🎥기능 구현
- 기본 레이아웃을 설정하고, 입력 폼을 구현했습니다.

메달 수는 99개까지 입력 가능하게 하고, 빈 국가명과 중복된 국가명은 신규 등록되지 않도록 했습니다.

![image](https://github.com/user-attachments/assets/cba8080b-69dd-4124-adfd-7fdc6800883f)

- 메달 집계 리스트를 출력하고 CRUD 기능을 구현했습니다.

금메달 순위대로 정렬되도록 하고, 없는 국가는 업데이트되지 않도록 했습니다.

![image](https://github.com/user-attachments/assets/0bb1b37b-52f1-40fc-bc7a-6622fc5aabd3)

- MedalInput, MedalList로 컴포넌트를 분리했습니다.
