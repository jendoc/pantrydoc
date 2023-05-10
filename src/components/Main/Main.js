import React from "react";
import "./Main.css";
import ImgLink from "../ImgLink";
import img1Path from "../../images/home1.jpg";
import img2Path from "../../images/home2.jpg";
import img3Path from "../../images/home3.jpg";
import logo from "../../images/icon.png";

function Main({ handleRouteClick }) {
  return (
    <>
      <header className="main__header">
        <h1 className="main__header_title">
          What's cookin'
          <br />
          good lookin'?
        </h1>
        <img className="main__header_icon" src={logo} />
      </header>
      <div className="main__links">
        <ImgLink img={img1Path} title="shopping" onClick={handleRouteClick} />
        <ImgLink img={img2Path} title="recipes" reverse />
        <ImgLink img={img3Path} title="pantry" />
      </div>
    </>
  );
}

export default Main;
