import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import HomeIcon from "./Icons/HomeIcon";
import ShopIcon from "./Icons/ShopIcon";
import SettingsIcon from "./Icons/SettingsIcon";
import BookIcon from "./Icons/BookIcon";
import CalIcon from "./Icons/CalIcon";

const FooterWrapper = styled.div`
  background: rgba(217, 217, 217, 0.85);
  display: grid;
  flex-shrink: 0;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  column-gap: 30px;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterLinks>
        <FooterLink href="/calendar">
          <CalIcon color="#023047" />
        </FooterLink>
        <FooterLink href="/recipes">
          <BookIcon color="#023047" />
        </FooterLink>
        <FooterLink href="/">
          <HomeIcon color="#023047" />
        </FooterLink>
        <FooterLink href="/shopping">
          <ShopIcon color="#023047" />
        </FooterLink>
        <FooterLink href="/pantry">
          <SettingsIcon color="#023047" />
        </FooterLink>
      </FooterLinks>
    </FooterWrapper>
  );
}
