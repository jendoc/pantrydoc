import React from "react";
import styled from "styled-components/macro";

const ImgLinkEl = styled.a`
  display: flex;
  column-gap: 15px;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  margin-${(props) => (props.reverse ? "right" : "left")}: -80px;
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: inline-block;
`;

const ImgLinkImg = styled.img`
  width: 400px;
  height: 172px;
  object-fit: cover;
  vertical-align: middle;
  transition: all 0.8s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.8s ease;
  }
`;

const ImgLinkTitle = styled.h2`
  text-transform: uppercase;
  color: rgba(142, 202, 230, 0.95);
  writing-mode: vertical-rl;
  ${(props) => (props.reverse ? "" : "transform: rotate(180deg);")};
  font-size: 32px;
  margin: 0;
`;

export default function ImgLink({ img, title, reverse }) {
  return (
    <ImgLinkEl reverse={reverse}>
      <ImgWrapper>
        <ImgLinkImg src={img} />
      </ImgWrapper>
      <ImgLinkTitle reverse={reverse}>{title}</ImgLinkTitle>
    </ImgLinkEl>
  );
}
