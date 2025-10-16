import React from "react";
import { useState } from "react";

export default function ArrayState() {
  const [arr, setArr] = useState([
    { id: 1, name: "철수" },
    { id: 2, name: "영희" },
    { id: 3, name: "동수" },
  ]);

  const handleAdd = () => {
    if (arr.length === 0) {
      alert("친구 없음");
      return;
    }
    // 마지막 ID
    let lastId = arr.length;

    // 기존 배열에서 마지막 id와 같은 데이터를 제외한 새로운 배열 생성
    const newArr = arr.fileter((e) => {
      if (e["id"] !== lastId) {
        return true;
      }
    });
    setArr(newArr);
  };

  return <div>ArrayState</div>;
}
