# Guideline for Conribution

## Start project

```bash
yarn          # same "npm install"
yarn format   # call prettier to fix the code style
yarn lint     # find problem in code file
yarn dev      # start react
```

아래 사항을 참고해주세요.

## ✏️ Commit Convention

- Commit의 단위는 최소의 기능 단위로 세분화합니다.
- 아래 타입을 고려해서 커밋 메시지를 남겨주세요.
  | Type | 설명 |
  |------------|-------------------------------------------------------------------------|
  | Feat: | 새로운 기능 추가 |
  | Docs: | 문서 추가 및 수정 |
  | Fix: | 버그 수정 또는 typo |
  | Refactor: | 리팩토링 |
  | Design: | CSS 등 사용자 UI 디자인 변경 |
  | Comment: | 필요한 주석 추가 및 변경 |
  | Style: | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
  | Test: | 테스트(테스트 코드 추가, 수정, 삭제, 비즈니스 로직에 변경이 없는 경우) |
  | Chore: | 위에 걸리지 않는 기타 변경사항(빌드 스크립트 수정, assets image, 패키지 매니저 등) |
  | Init: | 프로젝트 초기 생성 |
  | Rename: | 파일 혹은 폴더명 수정하거나 옮기는 경우 |
  | Remove: | 파일을 삭제하는 작업만 수행하는 경우 |

예시)

```bash
git commit -m "Feat: 회원가입 유효성 검사 함수 구현"
```

## 🚀 Branch

> **🚨 main은 배포하는 브랜치이기 때문에 main으로 PR보내지 않도록 주의해주세요. 🚨**

기본적으로 master-develop branch가 존재하며 PR merge를 요청하는 branch는 **develop**입니다. <br>
**develop**에서 분기한 branch의 이름은 `feature/이슈넘버 or xxx`, `fix/이슈넘버 or xxx` , `refactor/xxx` 로 지정해주세요

- PR을 Merge 하기 위해선 반드시 1명 이상의 **Approve**가 필요합니다.
- main <- develop으로 Merge 시에는 **Create a merge commit** 옵션으로 Merge합니다.
- PR 제목은 아래와 같이 지어주세요. (issue가 없다면 생략해주세요.)

```
  (#issue-number) 내용 요약
```

## 🎯 PR (Pull Request)

- PullRequest 단위는 최소의 기능 단위로 세분화합니다.
- PR 형식은 아래와 같습니다.

  ## 예시)

  ### 개요

  변경 사항 및 관련 이슈에 대해 간단하게 작성해주세요. 어떻게보다 무엇을 왜 수정했는지 설명해주세요.

  ### PR 유형

  어떤 변경 사항이 있나요?

  - [ ] 새로운 기능 추가
  - [ ] 버그 수정
  - [ ] CSS 등 사용자 UI 디자인 변경
  - [ ] 코드에 영향을 주지 않는 변경사항(오타 수정, 탭 사이즈 변경, 변수명 변경)
  - [ ] 코드 리팩토링
  - [ ] 주석 추가 및 수정
  - [ ] 문서 수정
  - [ ] 테스트 추가, 테스트 리팩토링
  - [ ] 빌드 부분 혹은 패키지 매니저 수정
  - [ ] 파일 혹은 폴더명 수정
  - [ ] 파일 혹은 폴더 삭제

  ### PR Checklist

  PR이 다음 요구 사항을 충족하는지 확인하세요.

  - [ ] 커밋 메시지 컨벤션에 맞게 작성했습니다.
  - [ ] 변경 사항에 대한 테스트를 했습니다.(버그 수정/기능에 대한 테스트)

  ***

- 위의 양식은 root 디렉토리에 `pull_request_template.md`로 템플릿을 만들어 놨습니다. (PR양식이 자동으로 적용됩니다.)

## 🔎 Code Review

[코드 리뷰 참고 글](https://tech.kakao.com/2022/03/17/2022-newkrew-onboarding-codereview/)을 읽어주세요.

- 왜 개선이 필요한지 이유를 **충분한 설명**해 주세요.
- 답을 알려주기보다는 스스로 고민하고 개선 방법을 선택할 수 있게 해주세요.
- **코드를 클린** 하게 유지하고, 일관되게 구현하도록 안내해 주세요.
- 리뷰 과정이 숙제검사가 아닌 학습과정으로 느낄 수 있게 리뷰해 주세요.
- 리뷰를 위한 리뷰를 하지 마세요. 피드백 할 게 없으면 **칭찬**해 주세요.
