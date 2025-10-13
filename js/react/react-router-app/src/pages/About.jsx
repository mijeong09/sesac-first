import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class About extends Component {
  render() {
    return (
      <div>
        <h1 className="font-bold text-4xl">소개</h1>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "text-red-600 font-bold text-5xl" : "";
          }}
        >
          홈
        </NavLink>
        <br />
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return isActive ? "text-red-600 font-bold text-5xl" : "";
          }}
        >
          소개
        </NavLink>
        <br />
        <NavLink to="/profile">사용자 정보</NavLink>
      </div>
    );
  }
}

export default About;
