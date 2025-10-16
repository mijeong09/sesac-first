import axios from "axios";
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];
// create(): axios 객체 데이터를 생성
// 객체 : 속성(key - value) 구성된 자료형

// 아래 axiosInstance 변수로 요청을 보내면
// 기본 주소: "https://api.themoviedb.org/3"
// 헤더에는 인증 정보(Authorization)가 설정되어서 요청이 감
const axiosInstance = axios.create({
  // axios 객체가 가질 속성의 정보
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    // Authorization: `Bearer ${API_KEY}`,
    // 캐쉬가 남아 있어서 지워도 인증 error 가 되지 않았음
    // (ctr+shift+R 로 캐쉬 초기화하면 됨)
    Authorization: `Bearer ${API_KEY}`,
  },
  params: {
    language: "ko-KR",
  },
  timeout: 5000, // 요청 제한 시간
});

// 응답 인터셉터 : 서버가 사용자에게 돌려주는 응답 데이터를 가로채서 추가 작업을 함
axiosInstance["interceptors"]["response"].use(
  // 2개의 함수 전달
  // 통신(요청-응답) 성공 했을 때 함수
  // 매개변수 response
  (response) => {
    console.log("통신 성공 응답 인터셉터");
    // 응답 데이터 반환(return)
    return response["data"];
  },
  (error) => {
    if (error.response) {
      // 401: 인증 오류(API 키, 인증 토큰 문제)
      if (error.response.status === 401) {
        alert("인증에 문제가 있습니다.");
      }
      //404: Not Found (없는 주소를 요청)
      else if (error.response.status === 404) {
        alert("Not Found")
      }
    }
    return Promise.reject(error);
  }

  // 통신(요청-응답) 실패 했을 때 함수
);

export default axiosInstance;
