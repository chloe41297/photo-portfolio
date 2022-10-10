import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import HoverToggle from "./HoverToggle";

export default function NavigationBar() {
  return (
    <Container>
      <Title>JeongSik.</Title>
      <Icons>
        <Icon
          onClick={() => {
            window.open("mailto:wjdtlr5453@gmail.com");
          }}
        >
          <AiOutlineMail></AiOutlineMail>
          {/* <HoverToggle>아아아</HoverToggle> */}
        </Icon>
        <Icon
          onClick={() => {
            window.open(
              "https://instagram.com/shinpictures?igshid=ODBkMDk1MTU="
            );
          }}
        >
          <AiOutlineInstagram></AiOutlineInstagram>
        </Icon>
      </Icons>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.div`
  font-size: 20px;
  padding: 0 5px;
  position: relative;
  :hover {
    cursor: pointer;
  }
`;
