import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import Cover from "./Cover";
import Modal from "./Modal";

interface Iprops {
  coverColor: string;
  coverImg: string;
  subImgs: string[];
}

export default function Magazines(props: Iprops) {
  const { coverColor, coverImg, subImgs } = props;
  return (
    <Container>
      <Cover coverColor={coverColor} coverImg={coverImg}></Cover>
      <Carousel subImgs={subImgs}></Carousel>
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  height: 100vh;
  /* height: 800px; */
  min-height: 720px;
  max-height: 900px;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
`;
