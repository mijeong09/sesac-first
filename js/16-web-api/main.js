// axios 불러오기
import axios from "axios";

// async/await
async function connectTest() {
  // axios.get(url): 데이터 요청에 대한 응답 데이터를 생성(반환)
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(response["data"]);
  
  // 항상 객체의 key와 value를 먼저 파악하는 것이 중요 (예- 객체의 속성에 접근)
//   console.table(Object.entries(response));
//   console.table(Object.keys(response));
}
connectTest();