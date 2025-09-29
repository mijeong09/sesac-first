import React from "react";

export default function Profile(props) {
  return (
    <div>
      {/* 객체 전달받기 */}
      {/* 저는 {props["user"]["name"]}이고, {props["user"]["age"]}입니다. 관리자
      여부는 {props["user"]["isAdmin"]} */}

      {/* 변수 전달받기 */}
      {/* 저는 {props["name"]}이고, {props["age"]}입니다. 관리자 여부는{" "}
      {props["isAdmin"]} */}

      {/* 비객체 데이터의 구조 분해 할당 */}
    </div>
  );
}
