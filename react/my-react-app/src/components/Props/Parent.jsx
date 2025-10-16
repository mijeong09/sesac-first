import React from "react";
import Child from "./Child";

export default function Parent() {
  return (
    // div 태그의 속성 - className, id, onClick ...
    <div className="" id="" onClick="">
      {/* 데이터(Props, 자식 컴포넌트의 속성)를 전달 하는 방법 */}
      {/* Chile 컴포넌트의 name 속성과 age 속성 */}
      {/* 문자열 속성은 따옴표 사이 */}
      {/* 숫자 속성은 중괄호 사이 */}
      <Child name="홍길동" age={20}></Child>
      <Child name="김철수" age={25}></Child>
      <Child name="영희" age={3}></Child>
    </div>
  );
}
