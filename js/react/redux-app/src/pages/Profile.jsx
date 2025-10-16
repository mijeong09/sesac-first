import React from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 액션을 실행하기위한
// 액션 생성자 함수와 useDispatch 훅
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  // 로그인 검증 로직
  // 사용자 정보 관리 상태
  const [decodeToken, setDecodeToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // 토근 복호화 => 사용자 정보 불러오기
    if (token) {
      setDecodeToken(jwtDecode(token));
    } else {
      // navigate("/login");
    }
  }, [token]);

  // 토근(token) 복호화 코드
  // const decodeToken = jwtDecode(token);

  console.log(decodeToken);

  // 로그아웃 핸들러 함수
  function handleLogout() {
    // dispatch  함수로 logout 액션을 스토어(store) 전달
    dispatch(logout());
  }

  return (
    <div>
      <div>{token ? token : "로그인을 해주세요."}</div>;
      <div>
        {decodeToken ? `이메일: ${decodeToken.email}` : "로그인을 해주세요."}
      </div>
      <div>
        <button
          className="border-2"
          onClick={() => {
            handleLogout();
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
