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

// 대소문자 구분하기 떄문에 두 변수는 다른 변수
let message6;
let MESSAGE6;

// 카멜 케이스 적용 (hellomessage)
let helloMessage;

// 템플릿 리터럴
// 문자열 사이에 변수를 삽입해서 문자열을 생성하는 방법
// 1. 문자열을 백틱으로 표현
// 2. 변수 삽입 위치에 기호 ${변수} 를 사용

let name = "철수";
let greet = `안녕하세요 ${name} 입니다.`;
console.log(greet);

// var (! 절대 쓰지 말아야 할 변수 선언 방법 !)
// 재선언도 가능하고, 재할당도 가능
// 같은 이름으로 재선언을 해버리면 변수명 중복 가능성
// 기존 변수에 저장된 데이터가 의도치않게 삭제

// 호이스팅 현상
// 변수를 선언하기 전에 사용이 가능