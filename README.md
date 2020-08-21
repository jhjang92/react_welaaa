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

### 3d z값을 이용한 slide ?

js로만 작업할때 슬라이드는 다양하게 바닐라로 만들어 보았는데
3d로 깊이가 추가되니 계산이 조금 복잡하네요
그래도 좋은 방법 하나 더 알아가는 중입니다.

### 반응형 작업....

퍼블리싱 작업이 금방 끝날 줄 알았습니다만..
반응형 작업이 엄청 오래걸렸네요
단순히 사이즈에 맞게 줄어들뿐만 아니라
텍스트의 줄바꿈 및 해당 폰트사이즈 등을 미리 알지 못하는 상태여서
일일히 확인하며 작업하느라 오래걸렸습니다.
슬라이드 부분은 z값을 이용했기 때문에 퍼블리싱단계에서 바로잡기보다는
틀만 잡아놓고 js로 기능작업할때 같이 잡을 예정입니다.

# 기능구현을 시작하기에 앞서..

기능구현을 하려다보니 컴포넌트의 구조가 고민이 되었습니다.
components 폴더내에 모든 컴포넌트들이 모여있으며
view 와 기능구현을 나눌생각에 screen 폴더안에 view 컴포넌트들을 모아놨었으나
contextApi 와 reduceApi 를 사용하여 기능호출 & view 는 한 컴포넌트내에
기능의 구현은 store개념처럼 contextComponent 한곳에 작성할 생각입니다.

cotext컴포넌트에서 기능구현 후 reducer 를 메인페이지용,서브페이지1,2 등등 여러개를 만들어 구분지을 생각 입니다.
메인페이지의 컴포넌트들은 메인페이지용 reducer와 상호작용하게끔...
