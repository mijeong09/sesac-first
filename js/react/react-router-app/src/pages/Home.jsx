import React, { Component } from "react";
// a 태그를 대체하는 Link 컴포넌트
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="font-bold text-4xl">홈페이지</h1>
        {/* 내부적으로 이동하는 건 무조건 Link 컴포넌트 사용, 외부로 이동할 때만 a 사용 */}
        {/* to 속성 : 어떤 주소로 이동할 것인지? */}
        <Link to="/">홈</Link>
        <br />
        <Link to="/about">소개</Link>
        <br />
        <Link to="/profile">사용자 정보</Link>
      </div>
    );
  }
}

export default Home;
