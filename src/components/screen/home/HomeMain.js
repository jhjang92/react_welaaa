import React from "react";
import IntroduceBanner1 from "./IntroduceBanner1";
import IntroduceBanner2 from "./IntroduceBanner2";
import IntroduceBanner3 from "./IntroduceBanner3";
import IntroduceBanner4 from "./IntroduceBanner4";
import IntroduceClassWelaaa from "./IntroduceClassWelaaa";
import IntroduceAudioBook from "./IntroduceAudioBook";
import IntroduceBookBox from "./IntroduceBookBox";
import IntroduceInfoAudioBook1 from "./IntroduceInfoAudioBook1";
import IntroduceInfoAudioBook2 from "./IntroduceInfoAudioBook2";
import IntroduceMembership from "./IntroduceMembership";
import IntroduceAdBanner from "./IntroduceAdBanner";

import styled from "styled-components";

function HomeMain() {
  const HomeMain = styled.main`
    overflow: hidden;
  `;
  const IntroduceBannerBox = styled.div``;
  const IntroduceClassWelaaaBox = styled.div``;
  const IntroduceAudioBookBox = styled.div``;
  return (
    <HomeMain>
      {/* 섹션마다 백그라운드이미지 추가하기. 1200 / 640 cover */}
      {/* Banner Section */}
      <IntroduceBannerBox className="IntroduceBanner">
        <IntroduceBanner1 />
        <IntroduceBanner2 />
        <IntroduceBanner3 />
        <IntroduceBanner4 />
      </IntroduceBannerBox>
      {/* classBook Section */}
      <IntroduceClassWelaaaBox className="IntroduceClassWelaaa">
        <IntroduceClassWelaaa />
      </IntroduceClassWelaaaBox>
      {/* audioBook Section */}
      <IntroduceAudioBookBox className="IntroduceAudioBook">
        <IntroduceAudioBook />
        <IntroduceBookBox />

        {/* info section */}
        <IntroduceInfoAudioBook1 />
        <IntroduceInfoAudioBook2 />
      </IntroduceAudioBookBox>
      {/* Ad */}
      <IntroduceMembership />
      <IntroduceAdBanner />
    </HomeMain>
  );
}

export default HomeMain;
