import React from "react";
import Profile from "./Profile";
import Profile2 from "./Profile2";

export default function ProfileContainer() {
  const name = "영구";
  const age = 0;
  const isAdmin = true;

  return (
    <div>
      {/* 객체 전달하기 */}
      {/* <Profile user={{ name: "현우", age: 22, isAdmin: true }}></Profile>
      <Profile user={{ name: "수진", age: 21, isAdmin: false }}></Profile> */}

      {/* 변수 전달하기 */}
      {/* <Profile name={name} age={age} isAdmin={isAdmin}></Profile> */}

      {/* 비객체 데이터의 구조 분해 할당 */}
      <Profile2 name="일구" age={1} isAdmin={true}></Profile2>
      <Profile2 name="이구" age={2} isAdmin={false}></Profile2>
    </div>
  );
}
