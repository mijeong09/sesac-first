import React from "react";
// 상태(State) 를 사용하기 위한 모듈
import { useState } from "react";

// 리액트 훅(Hook)
// JS 함수와 유사한 개념이지만 함수는 X
// 함수 : 특정 동작을 수행하는 "코드 블럭"
// 훅 : 리액트에서 틀정 동작을 수행하는 "도구"
// useState 훅 : 리액트에서 상태 관리를 수행하는 "도구"
export default function StateBasic() {
  // useState 훅은 배열 [ ] 을 생성함
  // 배열에는 2개의 원소가 존재
  // [상태를 저장할 변수, 상태를 설정(변경)할 함수]

  // 구조 분해 할당: 배열 - 변수의 위치, 객체 - 변수와 같은 이름
  // 배열의 구조 분해 할당을 활용
  /*
  let array = [1, 2]
  const [one, two] = array
  */

  // const [one, two] = [상태를 저장할 변수, 상태를 설정(변경)할 함수]
  // 변수명과 함수명이 관례적임
  const [somethingState, setSomethingState] = useState();
  const [something, setSomething] = useState();

  // 문자열 데이터로 관리하는 상태(State)
  // string은 상태 데이터를 저장할 변수
  // setString은 상태 데이터를 변경할 함수
  const [string, setString] = useState("문자열");
  // 초기값: 생성될 때 저장할 첫 값

  // 배열 데이터를 관리하는 상태
  // array : 상태 데이터를 저장하는 변수
  // setArray : 상태를 변경하는 함수
  const [array, setArray] = useState([1, 2, 3]);

  function handleClick() {
    // array.push(4);   // 잘못된 코드 : 상태 데이터를 저장하는 변수를 직접 수정해서

    // 새로운 배열 데이터를 생성해서 변수 newArray에 할당
    const newArray = [...array, 4];

    // 변수 newArray를 새로운 상태로 변경
    setArray(newArray);

    console.log("상태 변경");
    // 상태 데이터를 변경하는 코드
    // 상태 데이터를 저장한 변수를 직접 수정하면 절대 X

    // 불변성
    // 메모리 주소가 바뀌는게 중요한 이유:
    // 리액트는 상태에 저장된 메모리 주소가 바뀌었을 때 화면을 다시 그리기 때문
    // 화면을 다시 그리는 이유 => 사용자에게 보여줄 데이터가 바뀌었으니까
    // 리액트는 상태 변수에 저장된 메모리 주소가 그대로라면 상태 변경이 없는 것과 동일함 (효율적임)

    // 변경할 데이터를 상태 변경 함수(setString)에 전달해야함
    setString("상태 변경");
  }

  return (
    <div>
      {/* button 태그의 onClick 속성에서 handleClick() 함수 실행 */}
      <button
        onClick={() => {
          handleClick();
        }}
      >
        원소 추가
      </button>
      {array.map((ele) => {
        return <li>{ele}</li>;
      })}

      {/* {string}
      <button
        onClick={() => {
          handleClick();
        }}
      >
        상태변경
      </button> */}
    </div>
  );
}
