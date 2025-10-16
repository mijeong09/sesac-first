import React from "react";

// 기본 컨텐츠 생성형 AI
import { GoogleGenAI } from "@google/genai";

// 환경 변수 GEMINI API KEY
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_KEY;

// AI 객체 생성
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

import { useState } from "react";
import MessageList from "../components/MessageList";
import ChatForm from "../components/ChatForm";

export default function CreateContent() {
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    // 프롬프트가 비어있거나 AI 응답을 대기 중이라면
    // isLoading === true 고, promt.trim() === "" 라면 작업 x
    if (isLoading === true || prompt.trim() === "") return;

    // 대화 내역 상태를 업데이트
    // 사용자의 프롬프트를 대화 내역에 추가(role: "user")
    // role 역할 : user라면 오른쪽, ai라면 왼쪽에 배치
    setMessage((prev) => [...prev, { role: "user", content: prompt }]);
  }

  async function generaateAiContent(params) {}

  return (
    <div>
      {/* 사용자 - AI 대화 내용 출력 컴포넌트 */}
      <MessageList messages={message}>
        {/* 사용자의 프롬프트 작성 폼 컴포넌트 */}
        <ChatForm
          prompt={prompt} // 사용자 입력값 관리 상태
          setPrompt={setPrompt} // 사용자 입력값 상태 변경함수
          isLoading={isLoading} // AI 응답 대기 상태
          onSubmit={handleSubmit} // form 요소 제출 이벤트 핸들러 함수
        ></ChatForm>
      </MessageList>
    </div>
  );
}
