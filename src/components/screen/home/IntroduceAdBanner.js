import React from "react";
import styled from "styled-components";

function IntroduceAdBanner() {
  const AdBannerBox = styled.div`
    cursor: pointer;
    a {
      img {
        width: 100%;
      }
    }
  `;
  return (
    <AdBannerBox className="banner-ad">
      <a
        href="https://smartstore.naver.com/welaaa/category/3b13e5e6f3e14a19b32a887bcaf0ba65?cp=1"
        target="_blank"
      >
        <img
          src="images/static/banner-web/오디오북카드지갑_1920x150.jpg"
          alt="오디오북카드지갑"
        ></img>
      </a>
    </AdBannerBox>
  );
}

export default IntroduceAdBanner;
