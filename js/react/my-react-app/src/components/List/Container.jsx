import React from "react";
import User from "./User";

export default function Container() {
  // 반복 렌더링할 배열 데이터
  const array = [1, 2, 3, 4, 5];

  // 객체 원소를 저장한 배열
  const userArray = [
    { id: 1, name: "우영" },
    { id: 2, name: "길동" },
    { id: 3, name: "철수" },
    { id: 4, name: "짱구" },
    { id: 5, name: "영희" },
  ];

  return (
    <div>
      {userArray.map((userE) => {
        // userE 원소의 형태
        // {id: 1, name: 우영}

        // User 컴포넌트의 user 속성에 원소 userE를 값으로 전달(지정)
        return <User user={userE}></User>;
      })}

      {/* array 배열을 map() 메서드로 반복*/}
      {array.map((element) => {
        // 원소(element) 를 li 태그에 감싸서 return(반환)
        // 원소 element 는 보간법 {} 사용해서 표현
        return <li>{element}</li>;
      })}
    </div>
  );
}
