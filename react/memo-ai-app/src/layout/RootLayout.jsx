import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function RootRayout() {
  const navItems = [
    { path: "/", label: "Memo AI" },
    { path: "/memo/create", label: "메모 작성" },
    { path: "/memo/list", label: "메모 목록" },
  ];
  return <div>RootRayout</div>;
}
