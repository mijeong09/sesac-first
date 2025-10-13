import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router";

// 라우터 설정을 에플리케이션에 적용할 컴포넌트(Provider)
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* RouterProvider 배치 */}
    <RouterProvider router={router} />
  </StrictMode>
);
