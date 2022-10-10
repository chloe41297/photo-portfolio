import React, { MouseEvent, useState } from "react";
import Magazines from "./components/Magizines";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import styled from "styled-components";
import ShowCase from "./components/ShowCase";

const data = {
  mainColor: "#D47D4E",
  coverImg:
    "https://pbs.twimg.com/media/DyTUSFbU8AARSA5?format=jpg&name=medium",
  subImgs: [
    "https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg",
    "https://cdn.pixabay.com/photo/2022/04/04/13/54/city-7111380__480.jpg",
    "https://cdn.pixabay.com/photo/2015/01/29/15/57/modern-616312__480.jpg",
  ],
  carouselImgs: [
    "https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg",
    "https://cdn.pixabay.com/photo/2022/04/04/13/54/city-7111380__480.jpg",
    "https://cdn.pixabay.com/photo/2015/01/29/15/57/modern-616312__480.jpg",
  ],
};
// {
// mainColor: "#88966D",
//   coverImg:
//     "https://cdn.pixabay.com/photo/2022/04/04/13/54/city-7111380__480.jpg",
//   subImgs: [
//     "https://pixabay.com/ko/photos/%eb%8f%84%ec%8b%9c-%eb%a9%94%ed%8a%b8%eb%a1%9c-%ed%8f%b4-%eb%a6%ac-%ed%83%84-%ec%9d%bc%eb%aa%b0-4119806/",
//     "https://pbs.twimg.com/media/DyTUSFbU8AARSA5?format=jpg&name=medium",
//     "https://cdn.pixabay.com/photo/2015/01/29/15/57/modern-616312__480.jpg",
//   ],
// },

function App() {
  // const [coordinate, SetCoordinate] = useState<number[]>([0, 0]);
  // const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
  //   const clientX = e.clientX;
  //   const clientY = e.clientY;
  //   SetCoordinate([clientX, clientY]);
  // };

  return (
    <div className="App">
      {/* <MousePointer coordinate={coordinate}></MousePointer> */}
      <NavigationBar></NavigationBar>

      <Magazines
        coverColor={data.mainColor}
        coverImg={data.coverImg}
        subImgs={data.subImgs}
      ></Magazines>

      <ShowCase bgColor={data.mainColor} imgs={data.carouselImgs}></ShowCase>
    </div>
  );
}

export default App;

// const MousePointer = styled.div<StyledProps>`
//   position: absolute;
//   top: ${(props) => `${props.coordinate[1] - 15}px`};
//   left: ${(props) => `${props.coordinate[0] - 15}px`};
//   width: 30px;
//   height: 30px;
//   border-radius: 15px;
//   background-color: red;
//   z-index: 300;
// `;
