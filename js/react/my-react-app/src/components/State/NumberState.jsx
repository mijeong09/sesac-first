import React from "react";
import { useState } from "react";

export default function NumberState() {
  const [numberState, setNumberState] = useState(0);

  const updateNumberState = () => {
    let newNum = numberState + 1;
    setNumberState(newNum);
  };

  return (
    <div>
      <button
        onClick={() => {
          updateNumberState();
        }}
      >
        카운트 증가
      </button>
      <p>{numberState}</p>
    </div>
  );
}
