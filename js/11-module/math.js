// 외부 파일(모듈)로 분리할 코드
function add(n1, n2) {
  return n1 + n2;
}

// 빼기 함수
function substract(n1, n2) {
  return n1 - n2;
}

// 곱하기 함수
function multiply(n1, n2) {
  return n1 * n2;
}

// 나누기 함수
function devide(n1, n2) {
  return n1 / n2;
}

// 상수도 내보내고 불러오기 가능
const PI = 3.14;

// 함수 내보내기
export { substract };
export { multiply };
export { devide };

// 함수 add 내보내기
export { add };
export { PI };
