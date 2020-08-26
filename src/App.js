import React, { useRef, useLayoutEffect, useMemo } from "react";
import styled, { css, createGlobalStyle } from "styled-components";

import Header from "./components/commons/Header";
import HomeMain from "./components/home/HomeMain";
import Footer from "./components/commons/Footer";
import { useInitState, useInitDispatch } from "./components/welaaaContext";

function App() {
  const state = useInitState();
  const burgerMenu = state.burgerMenu;
  const dispatch = useInitDispatch();
  const resizeState = useRef(false);

  useLayoutEffect(() => {
    function updateResize() {
      if (
        window.outerWidth <= 1023 ||
        (window.innerWidth <= 1023 && !resizeState.current)
      ) {
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
      <GlobalStyle open={burgerMenu} />
      <Header />
      {/* 나중에 라우터로 main을 분기할예정. 홈일땐 HomeMain class일땐 ClassMain */}
      <HomeMain />
      <Footer />
    </>
  );
}

export default App;

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
  @media(max-width: 768px){
    ${(props) =>
      props.open &&
      css`
        body {
          overflow-y: hidden;
        }
      `}
  }
`;
