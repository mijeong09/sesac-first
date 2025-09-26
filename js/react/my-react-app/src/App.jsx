import React from "react";
import Rule from "./components/JSX/Rule";
import Interpolation from "./components/JSX/Interpolation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyButton from "./components/Component/MyButton";
import MyList from "./components/Component/MyList";

// App 컴포넌트는 Header 컴포넌트와 Interpolation 컴포넌트를 포함한다
// App 컴포넌트는 Header 컴포넌트와 Interpolation 컴포넌트가 중첩됐다
export default function App() {
  return (
    <div>
      <Header></Header>
      <Interpolation></Interpolation>
      <MyList></MyList>
      <MyButton></MyButton>
    </div>
  );
}
