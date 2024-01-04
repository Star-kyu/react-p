import React from 'react';
import ReactDOM from 'react-dom/client';
import Paths from './cjs/paths.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Paths/>
  //<React.StrictMode> 리액트 검사도구... 지랄같은 두번을 실행시키게 한다
  //</React.StrictMode>

  // React의 Strict Mode는 무엇일까?
  // StrictMode는 리액트에서 제공하는 검사 도구이다. 개발 모드일때 디버그를 통하여, 이 태그로 감싸져있는 App 컴포넌트까지 다.. 자손을 검사하는 것이다. 안전하지 않은 생명 주기를 가진 컴포넌트, 권장되지 않은 부분, 배포 후 문제가 될 수 있는 부분들까지 미리 확인하는 친구이다.
  // 내가 creat-react-app으로 앱을 만들면 이래된다..
);
