import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <div
      style={{
        textAlign: "center",
        height: "20vh",
        lineHeight: "20vh",
        fontSize: "xx-large",
        color: "black",
      }}
    >
      <nav>
        <Link to="/join">
          <div
            style={{ border: "1px solid black", color: "black" }}
            title="회원가입"
          >
            Join
          </div>
        </Link>

        <Link to="/review">
          <div style={{ border: "1px solid black", color: "black" }}
          title="족보"
          >족보</div>
        </Link>
      </nav>
    </div>
  );
}
