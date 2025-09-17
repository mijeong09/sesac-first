// 변수에 데이터를 할당함(assign O, save X)
// 데이터를 재사용하기 위해서 필요함

// 변수명 = 할당할 데이터
// "Hello World" 데이터를 저장한 공간의 이름이 message
// 변수 message에 "Hello World" 를 할당
// = : 할당 연산자
message = "Hello World";
console.log(message);

// 선언과 할당은 분리 가능

// 선언의 방식 2가지 (원래는 3가지)
// let
// 데이터의 재할당 가능
// 변수 message3에 "Hello variable"을 할당
let message3 = "Hello variavle";

// 변수 message3에 "Hello let variable"을 재할당
message3 = "Hello let variable";
// let은 안붙이나요? -> let을 붙이면 선언이 됨
// let 키워드는 재선언이 불가능

// let 변수 messag4를 선언
let message4;
// 재선언은 불가능
// let message4;

// const
// 데이터의 재할당이 불가능 (! 중요 !) -> 개발에서는 상수라고 표현함
const message5 = "Hello Const";
// 데이터 재할당이 X
// message5 = "Hello Const";

// let VS const
// let : 변하는 데이터를 저장하는 변수 선언 방식
// const : 변하면 안되는 데이터를 저장하는 변수 선언 방식

