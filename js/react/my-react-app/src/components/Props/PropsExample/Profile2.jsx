import React from "react";

// props = {name: ###, age: ###, isAdmin: ###};
export default function Profile2({ name, age, isAdmin }) {
  return (
    <div>
      {/* 비객체 데이터의 구조 분해 할당 */}
      저는 {name} 이고, {age} 세 이며, 관리자 여부는 {isAdmin}입니다.
    </div>
  );
}
