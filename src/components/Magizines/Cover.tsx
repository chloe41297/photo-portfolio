import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

interface Iprops {
  coverColor: string;
  coverImg: string;
}

interface MainTheme {
  coverColor: string;
}

export default function (props: Iprops) {
  const { coverColor, coverImg } = props;
  return (
    <Main coverColor={coverColor}>
      <Image src={coverImg}></Image>
      <Title>{"Seoul"}</Title>
    </Main>
  );
}

const Main = styled.main<MainTheme>`
  width: 100%;
  background-color: ${(props) => props.coverColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 56px;
  font-weight: 600;
  font-family: "Zilla Slab", serif;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;
