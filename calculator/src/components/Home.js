import React from "react";
import "./Home.css";
import Playground from "./playground";

function Home() {
  return (
    <div className="Home">
      <div className="inner">
        <div className="result">
          <div className="resbox">
            <Playground />
          </div>
        </div>
      </div>
      <div className="btns"></div>
    </div>
  );
}

export default Home;
