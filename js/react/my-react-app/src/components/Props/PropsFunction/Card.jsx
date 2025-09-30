import React from "react";

// 전달한 props 객체
// props = {
//   user: { name: "길동", age: 7 },
//   onClick: handleClick,
// };

export default function Card({ userProps, onClickProps }) {
  return (
    <div>
      <button
        onClick={() => {
          onClickProps(userProps);
        }}
      >
        클릭
      </button>
    </div>
  );
}
