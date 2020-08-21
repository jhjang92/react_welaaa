import React, { useRef, useLayoutEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

import HeaderWeb from "./components/commons/HeaderWeb";
import HeaderMobile from "./components/commons/HeaderMobile";
import HomeMain from "./components/home/HomeMain";
import Footer from "./components/commons/Footer";
import { useInitState, useInitDispatch } from "./components/welaaaContext";

function App() {
  console.log("APP");
  const state = useInitState();
  const dispatch = useInitDispatch();
  const resizeState = useRef(false);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    function updateResize() {
      if (window.innerWidth <= 1023 && !resizeState.current) {
        resizeState.current = true;
        dispatch({
          type: "DEVICE",
          device: true,
        });
      } else if (window.innerWidth >= 1024 && resizeState.current) {
        resizeState.current = false;
        dispatch({
          type: "DEVICE",
          device: false,
        });
      }
    }
    window.addEventListener("resize", updateResize);
    updateResize();
  }, []);

  return (
    <>
      <GlobalStyle />
      {state.device ? <HeaderMobile /> : <HeaderWeb />}
      {/* 나중에 라우터로 main을 분기할예정. 홈일땐 HomeMain class일땐 ClassMain */}
      <HomeMain />
      <Footer />
    </>
  );
}

export default React.memo(App);

const GlobalStyle = createGlobalStyle`

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
