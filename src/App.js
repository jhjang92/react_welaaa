import React from "react";
import Header from "./components/screen/commons/Header";
import HomeMain from "./components/screen/home/HomeMain";
import Footer from "./components/screen/commons/Footer";
function App() {
  return (
    <>
      <Header />
      {/* 나중에 라우터로 main을 분기할예정. 홈일땐 HomeMain class일땐 ClassMain */}
      <HomeMain />
      <Footer />
    </>
  );
}

export default App;
