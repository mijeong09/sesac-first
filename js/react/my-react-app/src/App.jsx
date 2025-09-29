import React from "react";
import Rule from "./components/JSX/Rule";
import Interpolation from "./components/JSX/Interpolation";
import Header from "./components/Header";
import OnClick from "./components/EventHandling/OnClick";
import OnChange from "./components/EventHandling/OnChange";

// App 컴포넌트는 Header 컴포넌트와 Interpolation 컴포넌트를 포함한다
// App 컴포넌트는 Header 컴포넌트와 Interpolation 컴포넌트가 중첩됐다

// App 컴포넌트 내부에 OnClick 컴포넌트 배치
export default function App() {
  return (
    <div>
      <OnClick></OnClick>
      <OnChange></OnChange>
    </div>

    // <div>
    //   <Header></Header>
    //   <Interpolation></Interpolation>
    //   <MyList></MyList>
    //   <MyButton></MyButton>
    // </div>
  );
}
