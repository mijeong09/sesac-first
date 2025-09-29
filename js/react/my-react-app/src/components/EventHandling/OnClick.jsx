import React from "react";

export default function OnClick() {
  // 클릭 이벤트 핸들링 함수
  // 관례적으로 핸들링 함수명은 handle이벤트명
  // 매개변수가 없는 함수
  function handleClick() {
    alert("클릭!");
  }

  // 매개변수가 있는 함수
  // param : parameter
  function handleParamClick(param) {
    alert(param);
  }

  return (
    <div>
      <button
        className="cursor-pointer border-10 p-2 bg-yellow-100 text-blue-400 shadow m-1 text-9xl"
        onClick={() => {
          // 인자로 "Hello World"를 전달한 handleParamClick() 함수 실행
          handleParamClick("Hello World");
        }}
      >
        클릭
      </button>

      {/* 이벤트 속성은 카멜 케이스로 작성해야 함 */}
      {/* JSX 보간법 {} 을 활용해서 함수를 호출 */}
      <button
        className="cursor-pointer border-10 p-2 bg-blue-400 text-yellow-100 shadow m-1 text-9xl"
        onClick={() => {
          handleClick();
        }}
      >
        클릭
      </button>
    </div>
  );
}
