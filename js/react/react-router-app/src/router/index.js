// import Home from "../pages/Home.jsx";
// import About from "../pages/About.jsx";
// import Profile from "../pages/Profile.jsx";

// React Router에서 모듈 불러오기
// crateBrowserRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : URL 과 컴포넌트를 매핑
import { createBrowserRouter } from "react-router-dom";

// 레이아웃 컴포넌트 불러오기
import RootLayout from "../layout/RootLayout.jsx";
import AuthLayout from "../layout/AuthLayout.jsx";
import ProtectedLayout from "../layout/ProtectedLayout.jsx";

// 페이지 컴포넌트 불러오기
import Home from "../pages/RootPages/Home.jsx";
import About from "../pages/RootPages/About.jsx";
import Profile from "../pages/RootPages/Profile.jsx";

import AuthHome from "../pages/AuthPages/AuthHome.jsx";
import Login from "../pages/AuthPages/Login.jsx";
import Signup from "../pages/AuthPages/Signup.jsx";

// 라우터 설정 생성
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      // 중첩할 자식 경로 객체를 정의하는 배열
      {
        index: true, // index: true -> 부모 경로의 기본(root) 경로
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        // path: "profile",
        // Component: Profile,

        // path 속성 X
        Component: ProtectedLayout,
        // 보호할 경로와 컴포넌트 정의
        children: [
          {
            path: "profile",
            Component: Profile,
          }
        ]
      },
    ],
  },
  // AuthLayout 경로 설정
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      {
        // 상대경로라서 / 없이 가능
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: Signup,
      },
    ],
  },
]);
export default router;
