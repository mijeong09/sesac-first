import React from "react";
import { useEffect, useState } from "react";

export default function Basic() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  // useEffect 훅은 데이터를 생성하는 훅 X
  useEffect(() => {
    // 콜백 함수가 내부에 존재
    // 화면 렌더링과 관련 없는 일을 함
    // API 요청하기, 타이머 시작하기 ...
    console.log("의존성 배열이 없는 useEffect");
  });
  useEffect(() => {
    console.log("의존성 배열이 있는데 빈 배열인 useEffect");
  }, []); // 의존성 배열

  useEffect(() => {
    console.log("의존성 배열에 number 상태가 저장");
  }, [number]);

  useEffect(() => {
    console.log("의존성 배열에 number2 상태가 저장");
  }, [number2]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(1);
    }, 1000);
    return () => {
      // 정리 함수
      // 컴포넌트가 언마운트 될 때 실행되는 함수
      clearInterval(intervalId);
    };
  });
  return (
    <div>
      <button
        className="text-5xl"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
      <button
        className="text-5xl"
        onClick={() => {
          setNumber2(number2 + 1);
        }}
      >
        {number2}
      </button>
    </div>
  );
}
