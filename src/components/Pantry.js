import React from "react";
import { Page } from "./Page";
import logo from "../images/icon.png";

function Pantry() {
  return (
    <>
      <Page.Header>
        <Page.Title>Pantry</Page.Title>
        <img className="main__header_icon" src={logo} />
      </Page.Header>
      <Page.Body>
        <p>pantry goes here</p>
        <Page.List>
            <Page.ListHeader>Sauces/Oils</Page.ListHeader>
            <Page.ListItem>Chickpeas</Page.ListItem>
            <Page.ListItem>Salsa</Page.ListItem>
        </Page.List>
      </Page.Body>
    </>
  );
}

export default Pantry;
