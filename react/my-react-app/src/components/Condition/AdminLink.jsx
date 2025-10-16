import React from "react";

// isAdmin Props 데이터를 매개변수에서 받는다
export default function AdminLink({ isAdmin }) {
  return (
    <div>
      <p>현재 권한 : {isAdmin === true ? "관리자" : "일반 사용자"}</p>
      {isAdmin && <a className = "text-violet-600">관리 페이지 이동</a>}
    </div>
  );
}
