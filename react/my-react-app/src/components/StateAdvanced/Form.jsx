import React from "react";
import { useState } from "react";

export default function Form() {
  // 입력 요소를 객체로 관리할 상태
  const [form, setForm] = useState({
    username: "",
    age: 0,
    email: "",
  });

  // 입력 요소의 값을 관리할 3개의 상태
  const [username, stateUsername] = useState("");
  const [age, stateAge] = useState(0);
  const [email, stateEmail] = useState("");

  // event 객체 : 발생한 이벤트의 정보를 속성으로 저장한 객체
  function handleChange(event) {
    // event 객체의 target 속성: 이벤트가 발생한 요소 정보
    const target = event["target"];
    console.log(target);

    // 객체에서 속성 꺼내서 출력
    const { name, value } = target;
    console.log(name, value);

    // form 객체 상태의 모양
    // 새로운 form 객체 생성
    // 계산된 속성명을 사용해서 속성명을 변수로 대체
    const newForm = { ...form, [name]: value };

    setForm(newForm);

    // if (name === "username") {
    //   stateUsername(value);
    // } else if (name === "age") {
    //   stateAge(value);
    // } else if (name === "email") {
    //   stateEmail(value);
    // }
  }

  return (
    <div>
      <form>
        {/* 3개의 input 요소의 값(value)을 상태로 관리 */}
        {/* input 요소의 value 속성은 사용자가 입력한 값 */}
        {/* 왼쪽 value: 속성 / 오른쪽 {변수} : 상태 변수 */}
        <input
          className="border-2"
          type="text"
          name="username"
          value={form["username"]}
          // 화살표함수의 매개변수 event를 handleChange에 전달
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          className="border-2"
          type="number"
          name="age"
          value={form["age"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          className="border-2"
          type="email"
          name="email"
          value={form["email"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>
    </div>
  );
}
