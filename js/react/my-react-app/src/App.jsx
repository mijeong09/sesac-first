import React from "react";
import Container from "./components/State/Container";
import StringState from "./components/State/StringState";
import NumberState from "./components/State/NumberState";
import ObjectState from "./components/State/ObjectState";
import ArrayState from "./components/State/ArrayState";
// 컴포넌트 함수 외부는 import 문을 제외하고는 작성하지 않는다

// --------------------------------------------

// 파일명과 동일한 함수는 컴포넌트 함수
// 컴포넌트 함수 : 태그(HTML 문서)를 생성하는 함수
// 컴포넌트 함수는 파일 당 하나만 존재
export default function App() {
  // 영역 1. 내부 기능 로직을 작성하는 영역
  // 이벤트 핸들러 함수를 정의
  // 이벤트 핸들러 함수 : 이벤트가 발생할 때 실행될 기능

  // --------------------------------------------

  // 영역 2. 태그(HTML 문서)를 return(생성)하는 영역
  return (
    <div>
      <ObjectState></ObjectState>
      <NumberState></NumberState>
      <StringState></StringState>
    </div>

    // <div>
    //   {/* App 컴포넌트 내부에 OnClick 컴포넌트 배치 */}
    //   <OnClick></OnClick>
    //   <OnChange></OnChange>
    //   <OnSubmit></OnSubmit>
    // </div>

    // <div>
    // App 컴포넌트는 Header 컴포넌트와 Interpolation 컴포넌트를 포함(중첩)한다
    //   <Interpolation></Interpolation>
    //   <Header></Header>
    //   <MyList></MyList>
    //   <MyButton></MyButton>
    // </div>
  );
}
