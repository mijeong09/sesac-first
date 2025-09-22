// 예외처리
try {
  // try 코드 블록
  // 원래 실행할 코드
  console.log(obj);
} catch (error) {
  // try 코드 블록이 오류가 발생할 때 실행할 코드
  // catch 코드 블록
  // error 매개변수 -> 오류의 정보를 저장하고 있는 객체
  console.log(error.name);
  console.log(error.message);
} finally {
  // finally 코드 블록
  // try ~ catch 와 상관없이 무조건 실행되는 코드
  // 함수에 쓰일 때 -> return에 의해서 함수가 종료돼도 실행함
}
