import React from "react";
import { useState } from "react";

export default function StringState() {
  const [string, setString] = useState("");

  const updateStringState = () => {
    let newString = `${string} 추가`;
    setString(newString);
  };

  return (
    <div>
      <button
        onClick={() => {
          updateStringState();
        }}
      >
        문자열 추가
      </button>
      <p>{string}</p>
    </div>
  );
}
