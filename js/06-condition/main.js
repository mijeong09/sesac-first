// 조건문의 기본 구조

/*
if(조건식) {
  // 조건식이 참이면 실행되는 코드 영역
}(
*/
if (5 > 1) {
  console.log("5는 1보다 큼");
}

/* if ~ else if 조건문 기본 구조
if(조건식) {

} else if(조건식') {
  조건식' 는 조건식이 false 일 때 평가 됨
} else if(조건식'') {
  조건식'' 는 조건식'이 false 일 때 평가 됨
}
*/

if (5 > 10) {
  console.log("5는 10보다 큼");
} else if (5 > 7) {
  console.log("5는 7보다 큼");
} else if (5 > 5) {
  console.log("5는 5보다 큼");
} else if (5 > 3) {
  console.log("5는 3보나 큼");
}

/* if ~ else if ~ else 조건문 기본 구조
if (조건식) {
} else if (조건식') {
} else {
  else는 조건식이 X
  대신 위의 모든 조건식이 false면 실행
  else 아래에는 또 다른 else if나 else가 존재할 수 X
]}
*/

// 변수 number를 선언하고, 숫자 1을 할당하는 지시문
let number = 1;

// Ex1
if (number > 0) {
  console.log("양수");
} else {
  console.log("음수");
}

// Ex2
let number2 = 0;
if (number2 > 0) {
  console.log("양수");
} else if (number2 < 0) {
  console.log("음수");
} else {
  console.log("0");
}


// 중첩 조건문
// 조건문 내부에 조건문을 중첩하는 조건문

// 변수 score를 선언하고, 숫자 75를 할당한다
// 만약 변수 socre가 90 이상이라면
// 그런데 만약 변수 score가 90 미만 그리고(&&), 80 이상이라면
// 그런데 만약 변수 score가 80 미만 그리고(&&), 70 이상이라면
// 그런데 만약 변수 score가 70 미만 그리고(&&), 60 이상이라면
// 그런데 모두 아니라면

let score = 75;
if (score > 90) {
  console.log("90 이상");
} else if (score > 80) {
  console.log("90 미만 80 이상");
} else if (score > 70) {
  console.log("80 미만 70 이상");
} else if (score > 60) {
  console.log("70 미만 60 이상");
} else {
  console.log("60 미만")
}