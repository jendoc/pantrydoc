import React from "react";
import { Page } from "./Page";
import logo from "../images/icon.png";

function Recipes() {
  return (
    <>
      <Page.Header>
        <Page.Title>Recipes</Page.Title>
        <img className="main__header_icon" src={logo} />
      </Page.Header>
      <Page.Body>
        <p>recipes go here</p>
      </Page.Body>
    </>
  );
}

export default Recipes;
