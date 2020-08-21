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
  return (
    <Main>
      {/* 섹션마다 백그라운드이미지 추가하기. 1200 / 640 cover */}
      {/* Banner Section */}
      <div className="IntroduceBanner">
        <IntroduceBanner1 />
        <IntroduceBanner2 />
        <IntroduceBanner3 />
        <IntroduceBanner4 />
      </div>
      {/* classBook Section */}
      <div className="IntroduceClassWelaaa">
        <IntroduceClassWelaaa />
      </div>
      {/* audioBook Section */}
      <div className="IntroduceAudioBook">
        <IntroduceAudioBook />
        <IntroduceBookBox />

        {/* info section */}
        <IntroduceInfoAudioBook1 />
        <IntroduceInfoAudioBook2 />
      </div>
      {/* Ad */}
      <IntroduceMembership />
      <IntroduceAdBanner />
    </Main>
  );
}

export default HomeMain;

const Main = styled.main`
  overflow: hidden;
  @media (max-width: 1023px) {
    padding-top: 99px;
  }
`;
