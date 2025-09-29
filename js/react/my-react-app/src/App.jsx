import React from "react";
// import Rule from "./components/JSX/Rule";
// import Interpolation from "./components/JSX/Interpolation";
// import Header from "./components/Header";
import OnClick from "./components/EventHandling/OnClick";
import OnChange from "./components/EventHandling/OnChange";
import OnSubmit from "./components/EventHandling/OnSubmit";

// --------------------------------------------

// 파일명과 동일한 함수는 컴포넌트 함수
// 컴포넌트 함수 : 태그(HTML 문서)를 생성하는 함수
// 컴포넌트 함수는 파일 당 하나만 존재
export default function App() {
  // 영역 1. 내부 기능 로직을 작성하는 영역
  // 이벤트 핸들러 함수를 정의
  // 이벤트 핸들러 함수 : 이벤트가 발생할 때 실행될 기능
  // --------------------------------------------
  return (
    <div>
      {/* App 컴포넌트 내부에 OnClick 컴포넌트 배치 */}
      <OnClick></OnClick>
      <OnChange></OnChange>
      <OnSubmit></OnSubmit>
    </div>

    // <div>
    // App 컴포넌트는 Header 컴포넌트와 Interpolation 컴포넌트를 포함(중첩)한다
    //   <Interpolation></Interpolation>
    //   <Header></Header>
    //   <MyList></MyList>
    //   <MyButton></MyButton>
    // </div>
  );
}
