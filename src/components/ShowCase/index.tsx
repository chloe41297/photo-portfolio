import React from "react";
import styled from "styled-components";

interface Iprops {
  bgColor: string;
}

export default function ShowCase(props: Iprops) {
  const { bgColor } = props;
  return <Container bgColor={bgColor}>ShowCase</Container>;
}
const Container = styled.section<Iprops>`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  opacity: 50%;
`;
