// 레이아웃의 역할
// 비로그인 사용자는 로그인 페이지로 리다이렉트

import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function ProtectedLayout() {
  // 로그인 상태
  const isLogin = false;

  if (isLogin === false) {
    return <Navigate to="/auth/login"></Navigate>;
  }

  return <Outlet></Outlet>;
}
