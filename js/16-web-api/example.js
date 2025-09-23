import axios from "axios";

// 도메인주소
const BASE_URL = "https://dummyjson.com";

// async 화살표 함수
const testRoute = async () => {
  // fetch('https://dummyjson.com/test')
  // .then(res => res.json())
  // .then(data => console.log);

  const data = await axios.get(`${BASE_URL}/test`);
  console.log(data["data"]);
};
testRoute();

async function getAllProducts() {
  const response = await axios.get(`${BASE_URL}/products`);
  const data = response["data"];
  const products = data["products"];
  //console.log(products);

  //console.log(response["data"]);
  //console.table(Object.entries(response["data"]));
}
getAllProducts();

async function searchProducts(searchItem) {
  const queryParams = new URLSearchParams({ q: searchItem });
  const res = await axios.get(`${BASE_URL}/products/search?${queryParams}`);
  const data = res["data"];
  console.log(data);
}
searchProducts("IPhone");
