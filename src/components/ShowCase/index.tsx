import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
interface Iprops {
  bgColor: string;
  imgs: string[];
}

interface ContainerProps {
  bgColor: string;
}

// interface ImageProps {
//   isCenter: Boolean;
// }

export default function ShowCase(props: Iprops) {
  const { bgColor, imgs } = props;
  const [index, setIndex] = useState<number>(0);
  const MAXLENGTH = imgs.length;

  const handlePrev = () => {
    setIndex((prev) => (prev <= 0 ? MAXLENGTH - 1 : prev - 1));
    imgRef.current.style = `  transform: translateX(-${300 * index + 300}px);`;
    // if(index <= 0){
    //   imgRef.current.
    // }
  };
  const handleNext = () => {
    setIndex((prev) => (prev >= MAXLENGTH - 1 ? 0 : prev + 1));
    imgRef.current.style = `  transform: translateX(-${300 * index + 300}px);`;
  };
  console.log(index);
  const imgRef = useRef<any>();
  // useEffect(()=>{

  // },[])

  return (
    <Container bgColor={bgColor}>
      <Frame>
        <ImgContainer ref={imgRef}>
          <Img src={imgs[MAXLENGTH - 1]}></Img>
          {imgs.map((item, i) => (
            <Img
              src={item}
              key={uuid()}
              style={{
                width: i === index ? "500px" : "",
                height: i === index ? "500px" : "",
              }}
            ></Img>
          ))}
          <Img src={imgs[0]}></Img>
        </ImgContainer>
      </Frame>
      <IconWrapper onClick={handlePrev}>{"<"}</IconWrapper>
      <IconWrapper onClick={handleNext}>{">"}</IconWrapper>
    </Container>
  );
}
const Container = styled.section<ContainerProps>`
  width: 100%;
  height: 100vh;
  max-height: 900px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Frame = styled.div`
  width: 1100px;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  transition: all 1s ease-in;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* transform: translateX(-300px); */
`;

const Img = styled.img`
  object-fit: cover;
  width: 300px;
  height: 300px;
  filter: brightness(0.7);
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  text-align: center;
  line-height: 50px;
`;
