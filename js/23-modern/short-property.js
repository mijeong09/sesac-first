const name = "홍길동";
const age = 20;

// 객체
const user = {
  name: name, // name: "홍길동"
  age: age, // age: 20
};
console.log(user);

// 단축 속성
// 변수명을 key로 사용할 때
// 변수명과 key가 동일 할 때
const user2 = {
  name,
  age,
};
console.log(user2);
