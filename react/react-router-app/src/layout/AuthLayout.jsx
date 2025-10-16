import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function AuthLayout() {
  // NavLink 기본 class
  const baseClass = `border-3 p-3`;
  // NavLink 활성화 class
  const activeClass = `border-3 border-blue-400 p-3`;

  return (
    <div>
      <div className="flex gap-2">
        {/* JSX 보간법 + 템플릿 리터럴 혼합 + 화살표 함수 혼합 */}
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to="/auth"
          end
        >
          인증 홈페이지
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to="/auth/login"
        >
          login 페이지
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to="/auth/signup"
        >
          signup 페이지
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to="/"
        >
          홈페이지
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
