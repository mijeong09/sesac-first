import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// 주소에 있는 경로 파라미터를 불러오는 훅(hook)
// /posts/:postId -> :postId 부분이 경로 파라미터
import { useParams } from "react-router-dom";

export default function PostDetail() {
  // 의존성 배열의 변수명을 라우터 설정에서 설정한 파라미터명과 동일해야함
  const { postId } = useParams();
  useEffect(
    (postId) => {
      // console.log(postId);
      async function getPost() {
        const response = await axios("");
      }
    },
    [postId]
  );
  return <div>PostDetail</div>;
}
