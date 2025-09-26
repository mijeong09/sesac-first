const user = {
  neme: "홍길동",
  address: {
    city: "서울",
  },
};

// ["속성명"]
// .속성명
// 옵서녈 체이닝 -> ?.속성명
console.log(user?.address);
console.log(user?.address?.city);
console.log(user?.address?.country); // undefined

console.log(user?.contact?.mail); // undefined
console.log(user?.contact?.mail); // undefined
