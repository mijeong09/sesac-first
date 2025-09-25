import axios from "axios";

async function addProduct() {
  // 요청 주소
  const URL = "https://dummyjson.com/products/add";

  // 요청 방법(목적)
  const METHOD = "POST";

  // 요청 본문(boby)
  const body = {
    title: "아이폰 100",
    category: "스마트폰",
  };

  // 요청 헤더(headers)
  // 헤더(headers) : 요청의 부가 정보
  const headers = {
    // Content-Type : 요청 본문(body)의 데이터 형식
    // application/json : json 확장자 데이터
    "Content-Type": "application/json",
  };

  // axios 요청 설정 파일
  const config = {
    url: URL,
    method: METHOD,
    headers: headers,
    // data: axios에서의 본문(boby)
    data: body,
  };
  // axios로 API 요청
  const response = await axios(config);

  // 데이터 객체 추출
  const data = response["data"];

  console.log(data);
}
addProduct();
