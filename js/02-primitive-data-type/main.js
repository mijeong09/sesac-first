// 자료형 확인 키워돠(예약어)
// typeof 확인하는 데이터
console.log(typeof "Hello World"); // string

// 개발 입문자라면 데이터의 자료형을 자주 확인하는 습관 필요

// 원시 자료형 5개(원래는 7개)
// 문자열(String)
// 문자들의 나열 : 0개 이상의 문자를 나타내는 자료형 ((즉, 빈 문자열도 문자열)
console.log(typeof ""); // string

// 문자열 표현 방법 3개
// 큰 따옴표(""), 작은 따옴표(''), 백틱(``)

// 숫자형(Number)
// 모든 종류의 숫자(정수, 0, 실수)
console.log(typeof 10);
console.log(typeof 0);
console.log(typeof 1.1);

// 논리형, 불리언(Boolean)
// true / false 2개의 데이터만 존재
console.log(typeof true);

// undefined
// 변수에 데이터가 없음을 표현
// 개발자가 의도하지 않음

// null
// 변수에 데이터가 없음을 표현
// 개발자가 의도한 것
console.log(typeof undifined); // undefined
console.log(typeof null); // object -> JavaScript 초창기 버전의 버그
