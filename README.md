## 클론코딩 사이트 - React, welaaa

리액트를 사용하여 실제 사이트를 클론코딩 합니다.

### 첫 시작은 퍼블리싱부터

예전에 일을 할때 아무것도 모른채 테이블코딩으로 admin 페이지를 유지보수 했었습니다.
시멘틱을 알고나니 퍼블리싱도 중요하구나를 깨닫고 기본에 충실하려 합니다.

리액트에 맞게 컴포넌트화를 시키기전에 마크업을 먼저 하였습니다.

### 컴포넌트 설계

위의 마크업코드를 목적에 맞게 나누어 컴포넌트화 시킨 후
스타일작업을 할 계획 입니다.

### 컴포넌트 분리

Route 를 사용할 계획이기에 home 폴더와 각 sub 폴더를 나눠서 <br/>
컴포넌트를 분리하였습니다. <br/>
home 폴더에서는 각 section 마다 컴포넌트를 나눠둔 상태입니다.

### styled-component 스타일링

header 부분만 스타일작업 하였습니다. <br />
1024~1920 반응형 처리 해뒀으며, 모바일용도 해야하고.. snb 메뉴도 추가작업 해야합니다.

### package.json 의 homepage

"homepage": "https://jhjang92.github.io/react_welaaa/" <br />
위와같이 깃허브에 페이지를 띄울때 사용하는 키워드가 <br/>
로컬에서 기본경로를 바꾸기때문에 이미지가 안나오던 현상이 있었습니다. <br />
.evn 에 public 경로설정하는게 있다고하니 작업먼저 하고 추가해야 합니다.
