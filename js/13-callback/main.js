// 함수 선언식
function 함수명() {}

// 일급 객체
// 1. 변수에 할당 O

// 함수 표현식
// 함수명이 X, 대신 변수에 할당 O
const functionExpression = function () {};

// 화살표 함수
// 함수명이 X, 대신 변수에 할당 O

// 일급 객체
// 2. 함수의 반환값으로 사용 가능

function calculator(n1, n2, operator) {
  if (operator === "더하기") {
    return (n1, n2) => {
      return n1 + n2;
    };
  }
  if (operator === "빼기") {
    return (n1, n2) => {
      return n1 - n2;
    };
  }
}
const add = calculator("더하기");
const sub = calculator("빼기");
// console.log(add(1, 2));
// console.log(sub(1, 2));

// 배열 고차 메서드
// 배열 원소에 콜백 함수를 (반복을 통해) 순차적으로 적용하는 메서드
// 배열의 반복문을 함수화
const numbers3 = [1, 2, 3];

// 인덱스 반복문의 문제
// 1. 조건식 실수
// 2. 인덱스를 통해서 원소에 접근
for (let index = 0; index < numbers3.length; index++) {}

// for...of
// 1. 조건식 X
// 2. 원소에 바로 직접 접근
//for...of 문제점
// 1. 내부 로직 관리의 어려움
// 2. 유연함이 떨어진다
for (let element of numbers3) {
}

// 배열 고차메서드
// 1. 문법이 간결
// 2. 콜백함수로 반복작업을 유연하게 제어
//numbers3.forEach(콜백함수);

// 각 원소에 + 1 한 결과를 출력
const numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach((element) => {
  // 원소에 반복적으로 수행할 로직 콛
  console.log(element + 1);
});

console.log("-----");
// 각 원소 % 2 === 0 인 원소만 출력
numbers4.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
  }
});

console.log("-----");

// map()
// 새로운 데이터를 생성하기 때문에 '표현식'임
const newArr = numbers4.map((element) => {
  return element * 2;
});
console.log(newArr);

// -----
console.log("-----");

// reduce()
// 배열의 누적을 반환
const numbers10 = [1, 2, 3, 4, 5];
const result = numbers10.reduce((accValue, currElement) => {
  // accValue : 이전 반복동안 반환된 값을 누적한 데이터
  // currElement : 현재 원소

  // 반환값들이 누적된다
  return accValue + currElement;
}, 100); // 누적 초기 값
console.log(result);

// -----
console.log("-----");

// sort()
// 배열을 정렬하는 고차 메서드
// 원소를 2개씩 비교하며 정렬
// 원본 배열의 데이터를 변경하기 때문에 할당할 필요 X

const numbers11 = [2, 6, 1, 9, 7];
numbers11.sort((a, b) => {
  // 정렬 rbclr
  // 반환값이 양수라면 a가 뒤로 배치
  // 반환값이 음수라면 a가 앞으로 배치
  // 반환값이 0이라면 같다

  // 오름차순 축약
  return a - b;

  // 내림차순 축약
  return b - a;

  // 오름차순
  if (a < b) {
    return -1;
  }
  if (b < a) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
});
console.log(numbers11);
