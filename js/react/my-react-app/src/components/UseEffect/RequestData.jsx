import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

export default function RequestData() {
  const [products, setproducts] = useState([]);

  // 빈 의존성 배열 : 컴포넌트가 첫 렌더링 될 때만 콜백함수 실행
  useEffect(() => {
    // 첫 렌더링 될 때 데이터를 요청하기(axios를 써서)
    async function getProducts() {
      const response = await axios("https://dummyjson.com/products");
      const data = response["data"];
      console.log(data);
      // 응답 데이터에서 필요한 속성을 상태(state)로 변경
      setproducts(data["products"]);
    }
    getProducts();
  }, []);

  return (
    <div>
      {/* products : 배열 */}
      {/* map : 반복 메서드 */}
      {products.map((product) => {
        return <Product key={product.id} product={product}></Product>;
      })}
    </div>
  );
}
