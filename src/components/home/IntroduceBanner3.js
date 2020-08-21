import React from "react";
import styled from "styled-components";

function IntroduceBanner3() {
  return (
    <SectionBanner className="section_banner3-introduce">
      <h2>책이 연기를 시작했다. 그것도 리얼하게.</h2>
      <FlexBox>
        <ContentBox>
          <img
            src="images/web-banner/200525sesion3-title-pc.png"
            alt="책이 연기를 시작했다. 그것도 리얼하게"
          ></img>
          <p>
            윌라에서는 전문 성우 목소리와 음향 효과로 <br />
            한층 더 깊어진 독서 생활을 경험하실 수 있습니다.
            <br />
            최신 베스트셀러는 물론 분야별 전문 지식과 윌라 독점 콘텐츠를
            <br />책 한 권도 안 되는 가격에 무제한으로 즐기세요.
          </p>
        </ContentBox>
        <img
          className="people"
          src="images/web-banner/200525_PC3.png"
          alt="책 한권도 안되는 가격에 무제한"
        ></img>
      </FlexBox>
    </SectionBanner>
  );
}

export default IntroduceBanner3;

const SectionBanner = styled.section`
  background: url("images/web-banner/200723_PC3-1.jpg") no-repeat center / cover;
  background-color: #d6dae3;
  max-width: 1920px;
  height: 100%;
  padding-top: 45px;
  box-sizing: border-box;
  line-height: 1;
  h2 {
    margin: 0;
    padding: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  @media (max-width: 1023px) {
    background: none;
    padding-top: 0;
    h2 {
      position: absolute;
    }
  }
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1023px) {
    flex-direction: column;
    position: relative;
    width: 100%;
    .people {
      content: url("images/web-banner/200723_MO3.jpg");
      width: 100%;
    }
  }
`;
const ContentBox = styled.div`
  width: 524px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 14px;
  padding-right: 30px;
  box-sizing: border-box;
  img {
    width: 447px;
  }
  p {
    text-align: right;
    line-height: 1.6;
    color: rgb(51, 51, 51);
    font-size: 20px;
    font-weight: 300;
    margin-top: 20px;
    letter-spacing: -2px;
  }
  @media (max-width: 1023px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 11.111vw auto 0;
    align-items: flex-start;
    padding: 0 0 0 10vw;
    img {
      content: url("images/web-banner/200525sesion3-title-mo.png");

      width: 59.444vw;
      height: 15.833vw;
    }
    p {
      text-align: left;
      margin-top: 2.5vw;
      font-size: 3vw;
      line-height: 1.67 !important;
    }
  }
`;
