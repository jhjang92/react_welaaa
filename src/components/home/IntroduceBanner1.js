import React from "react";
import styled from "styled-components";

function IntroduceBanner1() {
  const SectionBannerBgColor = styled.div`
    background: rgb(214, 218, 227);
    height: auto;
    position: relative;
  `;
  const SectionBannerBox = styled.section`
    background: url("images/web-banner/200525_PC1.jpg") center / cover no-repeat;
    width: 1200px;
    height: 640px;
    margin: 0 auto;
    h2 {
      margin: 0;
      padding: 0;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
    @media (max-width: 1023px) {
      background: url("images/web-banner/200525_MO1.jpg") center / cover
        no-repeat;
      width: 100%;
      height: initial;
      padding-top: 83.33%;
    }
  `;
  const SectionBtnBox = styled.div`
    min-width: 682px;
    position: absolute;
    right: 50%;
    bottom: 0%;
    transform: translate(50%, 50%);
    button {
      width: 326px;
      height: 90px;
      border-radius: 10px;
      text-align: left;
      font-size: 24px;
      letter-spacing: -2px;
      padding: 15px 20px;
      box-sizing: border-box;
      line-height: 1.25;
      position: relative;
      background-color: rgb(242, 242, 242);
      box-shadow: rgba(0, 0, 0, 0.3) 2px 4px 14px 0px;
      cursor: pointer;
      font-weight: 200;
      color: rgb(51, 51, 51);
      /* Button text */
      span {
        :first-of-type {
          font-weight: 600;
        }
      }

      /* 버튼 icon */
      ::after {
        content: "";
        width: 50px;
        height: 50px;
        position: absolute;

        top: 50%;
        transform: translateY(-50%);
        right: 20px;
        display: inline-block;
        background: url("images/introduce/ic_more_small.png") center / cover;
      }
      /* 첫번째 버튼 css */
      :first-of-type {
        margin-right: 30px;
        ::after {
          background: url("images/introduce/ic_play_small.png") center / cover;
        }
      }
      /* 마지막 버튼 css */
      :last-of-type {
        background-image: linear-gradient(
            115deg,
            rgba(99, 217, 0, 0.71) 13%,
            rgba(0, 149, 43, 0.67) 97%
          ),
          linear-gradient(rgb(242, 242, 242), rgb(242, 242, 242));
        span {
          color: rgb(255, 255, 255);
        }
      }
    }
    @media (max-width: 1023px) {
      z-index: 3;
    }
    @media (max-width: 768px) {
      min-width: unset;
      width: 90vw;
      button {
        width: 100%;
        height: 17.778vw;
        letter-spacing: -0.6px;
        font-size: 4.167vw;

        :first-of-type {
          display: none;
        }
        br {
          display: none;
        }
        span {
          :last-of-type {
            font-weight: 300;
            margin-left: 5px;
          }
        }
        ::after {
          width: 8.333vw;
          height: 8.333vw;
        }
      }
    }
  `;

  return (
    <SectionBannerBgColor>
      <SectionBannerBox className="section_banner1-introduce">
        <h2>책. 듣다. 쉽다. 윌라</h2>
        <SectionBtnBox className="section1_btn-box">
          <button>
            <span>책. 듣다. 쉽다.</span>
            <br />
            <span>브랜드 캠페인 보기</span>
          </button>
          <button>
            <span>첫 달 무료 이용</span>
            <br />
            <span>지금 바로 시작하세요!</span>
          </button>
        </SectionBtnBox>
      </SectionBannerBox>
    </SectionBannerBgColor>
  );
}

export default IntroduceBanner1;
