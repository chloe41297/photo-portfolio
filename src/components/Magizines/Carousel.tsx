import React from "react";
import uuid from "react-uuid";
import styled, { keyframes } from "styled-components";

interface Iprops {
  subImgs: string[];
}

interface StyledProps {
  direction: string;
}

export default function Carousel(props: Iprops) {
  const { subImgs } = props;
  return (
    <FilmContainer>
      <ImageContainer direction={"up"}>
        {subImgs.map((item: any) => (
          <Image key={uuid()} src={item}></Image>
        ))}
        {subImgs.map((item: any) => (
          <Image key={uuid()} src={item}></Image>
        ))}
      </ImageContainer>
      <ImageContainer direction={"down"}>
        {subImgs.map((item: any) => (
          <Image key={uuid()} src={item}></Image>
        ))}
        {subImgs.map((item: any) => (
          <Image key={uuid()} src={item}></Image>
        ))}
      </ImageContainer>
    </FilmContainer>
  );
}

const moveUp = keyframes`
  100%{
    transform: translateY(-50%);
  }
`;

const moveDown = keyframes`
  0%{
    transform: translateY(-50%);
  }
  100%{
    transform: translateY(0%);
  }
`;

const FilmContainer = styled.section`
  height: inherit;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ImageContainer = styled.div<StyledProps>`
  padding: 0;
  margin: 0;
  animation: ${(props) => (props.direction === "up" ? moveUp : moveDown)} 15s
    linear infinite;
  :hover {
    animation-play-state: paused;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;
