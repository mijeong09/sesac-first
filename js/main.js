// 형 변환
// 명시적 형 변환 : 개발자가 한 것
// 암시적 형 변환 : JS 엔진이 자동으로 한 것

// 문자열로의 명시적 변환
// String() 함수 : 문자열로 변환하는 도구
// 함수 : 프로그래밍 언어의 특정 기능을 수행하는 도구

// String(데이터) / String(변수)
console.log(String(123)); // 숫자형 -> 문자열
console.log(String(123) == "123"); // true

String(true);
String(undefined);
String(null);

// 숫자형 명시적 형 변환
// Number() 함수: 숫자형으로 변환하는 도구
// Number(데이터) / Numbrt(변수)
console.log(Number("123") === 123); //true

// 불리언 명시적 형 변환
// 불리언 데이터 : true / false
// Boolean() 함수 :

// 불리언 형 변환 규칙
// 각 자료형마다 최소 1개는 false로 변환
// false가 아닌 데이터는 모두 true로 변환
// ! false 인 것을 아는 것이 중요한 것 !
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); //false
console.log(Boolean("")); // false
console.log(Boolean("     ")); // true

// 암시적 불리언 형 변환
// 불리언 데이터가 아닌 데이터에 대한 논리연산(&& , || , |)
console.log(!0);

// 0--불리언형변환--> false --not연산 --> true
console.log(!1); //false

// 정확한 논리연산자 작동 방식
// AND(&&) : 2개의 데이터가 모두 true인 데이터라면 오른쪽 데이터를 생성

// true && true
console.log(1 || 0); // 1

// OR(||) : 왼쪽 데이터가 ture면 왼쪽 데이터 생성,
// 왼쪽 데이터가 false 면, 오른쪽 데이터를 생성
