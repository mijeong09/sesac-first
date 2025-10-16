import React from "react";

export default function OnChange() {
  // change 이벤트의 핸들러 함수 정의
  // 핸들러 함수 이름 규칙: handle이벤트명

  // 이벤트 핸들러의 event 객체 : 이벤트 정보를 저장한 객체
  function handleChange(event) {
    console.log(event);
    // 이벤트가 발생한 요소의 정보
    console.log(event["target"]);
    // 이벤트가 발생한 입력 요소의 사용자 입력 값
    console.log(event["target"]["value"]);
  }

  // 실습 1.
  function handleNumberChange(event) {
    // 이벤트가 발생한 입력 요소의 사용자 입력 값이 10보다 작으면
    // console.log()를 사용해서 "10보다 작은 수" 라고 출력
    const value = event["target"]["value"];
    if (value < 10) {
      console.log("10보다 작은 값");
    }
  }

  return (
    <div>
      {/* 실습2 */}
      {/* Input 태그의 onChange 이벤트 속성에서 이벤트 객체를 전달하면서 handleNumberChange 호출 */}
      <input
        type="number"
        className="w-7xl border-2 border-gray-700 p-2 m-2"
        onChange={(event) => {
          handleNumberChange(event);
        }}
      />

      {/* onChange 이벤트 속성 적용 */}
      <input
        type="text"
        // 이벤트 객체 event는 화살표 함수의 매개변수
        onChange={(event) => {
          // handleChange() 함수 호출
          // 화살표 함수의 매개변수 event에서 가져옴
          handleChange(event);
        }}
        className="w-7xl border-2 border-gray-700 p-2 m-2"
      />
    </div>
  );
}
