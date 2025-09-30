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
        // id는 고유한 속성  / name은 고유하지 X 속성

        // User 컴포넌트의 user 속성에 원소 userE를 값으로 전달(지정)
        // 반복의 대상이 되는 요소에 key 라고 하는 이름의 속성과 값을 설정 해야함
        // key 에 설정되는 고유한 값(객체의 속성)이어야 함 (예약어임)
        // 반복 렌더링에서 key 속성의 역할: 동일하게 반복 생성된 컴포넌트를 식별하기 위함
        return <User key={userE["id"]} user={userE}></User>;
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
