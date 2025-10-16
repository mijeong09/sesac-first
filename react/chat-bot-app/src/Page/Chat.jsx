import { useState } from "react";
import MessageList from "../components/MessageList";
import ChatForm from "../components/ChatForm";

import { chat } from "../utils/genai";

import { config } from "../utils/genai";

export default function Chat() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    // 프롬프트가 비어있거나 AI 응답을 대기 중이라면
    // isLoading === true 고, promt.trim() === "" 라면 작업 x
    if (isLoading === true || prompt.trim() === "") return;

    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    const currentPrompt = prompt;
    // 상태 prompt 초기화
    setPrompt("");

    // 대화 내역 상태를 업데이트
    // 사용자의 프롬프트를 대화 내역에 추가(role: "user")
    // role 역할 : user라면 오른쪽, ai라면 왼쪽에 배치
    setIsLoading(true);
    await generaateAiContent(currentPrompt);
    setIsLoading(false);
  }

  // AI에게 요청을 보내서 응답을 생성하는 함수
  async function generaateAiContent(currentPrompt) {
    try {
      // 단순 텍스트 생성
      const response = await chat.sendMessage({
        message: currentPrompt,
        config: config,
      });

      // 사용자 입력 프롬프트 초기화
      // setPrompt("");

      // message 상태에 AI의 응답을 저장
      setMessages((prev) => [...prev, { role: "ai", content: response.text }]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* 사용자 - AI 대화 내용 출력 컴포넌트 */}
      <MessageList messages={messages}></MessageList>
      {/* 사용자의 프롬프트 작성 폼 컴포넌트 */}
      <ChatForm
        prompt={prompt} // 사용자 입력값 관리 상태
        setPrompt={setPrompt} // 사용자 입력값 상태 변경함수
        isLoading={isLoading} // AI 응답 대기 상태
        onSubmit={handleSubmit} // form 요소 제출 이벤트 핸들러 함수
      ></ChatForm>
    </>
  );
}
