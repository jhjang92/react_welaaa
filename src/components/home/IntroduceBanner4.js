import React from "react";
import styled from "styled-components";

function IntroduceBanner4() {
  return (
    <SectionBanner className="section_banner4-introduce">
      <h2>BRAND STORY</h2>
      <FlexBox>
        <img src="images/web-banner/200723_PC4-2.png" alt="Brand Story"></img>
        <TextBox>
          <p>
            멀게만 느껴지는 어려운 지식을 어떻게 하면 <br />더 많은사람들에게 더
            가까이 다가갈 수 있을까요?
          </p>
          <p>
            윌라는 지식과 사람의 거리를 좁힙니다. <br />
            책을 음악처럼 쉽고 편안하게 듣고, <br />
            강의를 먼 곳이 아닌 당신의 손안에서 듣게 하면서요.
          </p>
          <p>
            당신의 윌라. <br />
            당신의 편안하고 쉬운 지식 생활을 위한 모든 것. <br />
            가치로운 생활을 추구하는 당신과 늘 함께 합니다.
          </p>
        </TextBox>
      </FlexBox>
    </SectionBanner>
  );
}

export default IntroduceBanner4;

const SectionBanner = styled.section`
  background: url("images/web-banner/200723_PC4-1.jpg") center / cover;

  height: 570px;

  h2 {
    margin: 0;
    padding: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  @media (max-width: 1023px) {
    background: url("images/web-banner/200723_MO4.jpg") center / cover;
    height: 1290px;
  }
`;
const FlexBox = styled.div`
  width: 1044px;
  margin: 80px auto 0;

  display: flex;
  flex-direction: column;
  padding-left: 22px;
  img {
    width: 638px;
    margin-bottom: 30px;
  }
  @media (max-width: 1023px) {
    padding: 0px 6.944vw;
    img {
      width: 77.222vw;
      height: 38.611vw;
      margin-bottom: 6.944vw;
      content: url("images/web-banner/200723_MO4-2.png");
    }
  }
`;
const TextBox = styled.div`
  p {
    color: #fff;
    margin: 0 0 15px;
    font-size: 16px;
    font-weight: 200;
  }
  @media (max-width: 1023px) {
    p {
      font-size: 2.6vw;
      margin-bottom: 2.778vw;
      line-height: 1.67 !important;
    }
  }
`;
