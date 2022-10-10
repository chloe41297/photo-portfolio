import React from "react";
import styled from "styled-components";

interface Iprops {
  children: any;
}

export default function HoverToggle({ children }: Iprops) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  position: absolute;
  width: 30px;
  top: 15px;
  background: #484848;
  color: white;
  border-radius: 5px;
  /* padding: 12px 12.8px; */
  font-size: 16px;
  :after {
    border-top: 10px solid #484848;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
  }
`;
