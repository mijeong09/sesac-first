import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Profile from "../pages/Profile.jsx";

// React Router에서 모듈 불러오기
// crateBrowserRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : URL 과 컴포넌트를 매핑
import { createBrowserRouter } from "react-router-dom";
import { Component } from "react";

const router = createBrowserRouter([
  {
    path: "/", // 주소(URL)
    Component: Home, // 주소에 해당되는 컴포넌트
  },
  {
    path: "/about",
    Component: About,
    //element: <About></About>, // Component 속성과 동일하지만 컴포넌트 이름이 아니라 컴포넌트 태그를 입력성능이 더 떨어짐
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);
export default router;
