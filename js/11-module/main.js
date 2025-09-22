// 모듈 불러오기
// import / from

// from : 어디서 불러올 것인지
// import : 무엇을 불러올 것인지
import { add, substract, multiply, devide, PI } from "./math.js";

// 여러개 내보내기/ 불러오기는 일부만도 가능
// 트리 셰이킹
// 프로덕션 환경을 위한 파일을 생성(빌드)할 때 사용하지 않은 코드는 제거하는 기술

console.log(add(1, 2));

console.log(substract(3, 1));
console.log(multiply(2, 5));
console.log(devide(4, 2));

// 하나만 불러오기 (Default Export)
// 내가 불러온 함수의 이름을 결정

// 대표성을 띈다는 특징
import plus from "./계산기.js";
console.log(plus(1, 2));