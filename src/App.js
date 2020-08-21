import React from "react";
import Header from "./components/screen/commons/Header";
import HeaderMobile from "./components/screen/commons/HeaderMobile";
import HomeMain from "./components/screen/home/HomeMain";
import Footer from "./components/screen/commons/Footer";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
  *{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    color: #555555;
  }
  body{
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  a, ul,li ol, button, input {
    margin: 0;
    padding: 0;
    outline-style: none;
    text-decoration: none;
    border: none;
    background: none;
    color: black;
  }

`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 추후 모바일 웹 분기하여 header 노출 */}
      {/* <Header /> */}
      <HeaderMobile />
      {/* 나중에 라우터로 main을 분기할예정. 홈일땐 HomeMain class일땐 ClassMain */}
      <HomeMain />
      <Footer />
    </>
  );
}

export default App;
