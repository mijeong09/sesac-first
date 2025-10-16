import React, { useState } from "react";

export default function ObjectState() {
  const [objectState, setObjectState] = useState({
    age: 10,
    name: "길동",
  });

  const updateObjState = () => {
    let newObj = {
      ...objectState,
      age: objectState.age + 1,
    };

    setObjectState(newObj);
  };

  const deleteObj = () => {
    const { age, ...restObj } = objectState;
    setObjectState(restObj);
    console.log(objectState["age"]);
  };

  return (
    <div>
      <button
        onClick={() => {
          updateObjState();
        }}
      >
        나이 증가
      </button>
      <button
        onClick={() => {
          deleteObj();
        }}
      >
        나이 제거
      </button>
      <p>이름 : {objectState["name"]}</p>
      <p>나이 : {objectState["age"] || "없음"}</p>
    </div>
  );
}
