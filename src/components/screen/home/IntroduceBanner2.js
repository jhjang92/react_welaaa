import React from "react";
import styled from "styled-components";

function IntroduceBanner2() {
  const SectionBanner = styled.section`
    background: url("images/web-banner/200525_PC2-1.jpg") center / cover;
    margin: 0 auto;
    height: 610px;

    h2 {
      margin: 0;
      padding: 0;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
  `;
  const FlexBox = styled.div`
    width: 1048px;
    height: 610px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 84px;
    display: flex;
    align-items: center;
    img {
      max-height: 524px;
    }
  `;
  const TextBox = styled.div`
    img {
      width: 481px;
      max-height: 134px;
    }
    p {
      margin-top: 20px;
      line-height: 1.6;
      font-size: 20px;
      font-weight: 300;
    }
  `;
  return (
    <SectionBanner className="section_banner2-introduce">
      <h2>책을 음악처럼 편안하게 무제한으로 듣다.</h2>
      <FlexBox>
        <img
          src="images/web-banner/200525_PC2.png"
          alt="책 읽을 시간이 없을땐 윌라"
        ></img>
        <TextBox>
          <img
            src="images/web-banner/200525sesion2-title-pc.png"
            alt="책을 음악처럼 편안하게 무제한으로 듣다."
          ></img>
          <p>
            책 읽을 시간이 없다고요? 이제 윌라로 들으세요. <br />
            출퇴근 길에도, 휴식 중에도, 운동 중에도 <br />
            언제 어디서나 부담 없이 무제한으로 즐길 수 있습니다.
          </p>
        </TextBox>
      </FlexBox>
    </SectionBanner>
  );
}

export default IntroduceBanner2;
