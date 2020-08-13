import React from "react";
import styled from "styled-components";

function IntroduceMembership() {
  const SectionMembership = styled.section`
    padding: 48px 0 130px;
    box-sizing: border-box;
    background-color: rgb(249, 249, 249);
    text-align: center;

    h3 {
      margin: 0;
      letter-spacing: -2px;
      font-size: 30px;
      font-weight: 500;
      color: rgb(3, 3, 3);
      line-height: 48px !important;
      strong {
        display: block;
        font-size: 50px;
        font-weight: 700;
        color: rgb(3, 3, 3);
        line-height: 1.4 !important;
        margin-bottom: 60px;
      }
    }
    > p {
      margin: 0;
      letter-spacing: -2px;
      line-height: 45px !important;
      strong {
        display: block;
        font-size: 30px;
        color: rgb(3, 3, 3);
        span {
          color: rgb(3, 3, 3);
          display: inline-block !important;
          position: relative;
          z-index: 1;
          ::after {
            content: "";
            display: block;
            width: 100%;
            height: 12px;
            background-color: rgb(16, 181, 66);
            position: absolute;
            bottom: 0;
            z-index: -1;
          }
        }
      }
      span {
        display: block;
        margin-top: 5px;
        font-size: 30px;
        color: rgb(102, 102, 102);
      }
    }
  `;
  const UlFlex = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    box-sizing: border-box;
    li {
      width: 280px;
      height: 421px;
      line-height: 1;
      letter-spacing: -2px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px 0px;
      background-color: rgb(255, 255, 255);
      margin-right: 15px !important;
      padding: 31px 25px !important;
      box-sizing: border-box;
      text-align: left;

      position: relative;
      :last-of-type {
        margin-right: 0 !important;
      }
    }
  `;
  const DivTopText = styled.div`
    height: 214px;
    line-height: 1;
    letter-spacing: -2px;
    position: relative;
    p {
      font-size: 20px;
      line-height: 1.4;
      letter-spacing: -0.83px;
      color: rgb(0, 0, 0);
      margin: 0 0 10px;
      font-weight: 300;
    }
    .title {
      font-size: 30px;
      font-weight: 500;
      line-height: 1.3;
      letter-spacing: -0.88px;
      color: rgb(16, 181, 66);
    }
    .price {
      position: absolute;
      bottom: 0;
      font-size: 28px;
      font-weight: 200;
      line-height: 1.07;
      letter-spacing: -1.16px;
      color: rgb(0, 0, 0);
      span {
        position: absolute;
        top: 5px;
        width: 54px;
        height: 20px;
        margin-left: 10px;
        font-size: 11px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: -0.3px;
        background-color: rgb(102, 102, 102);
        color: rgb(255, 255, 255);
        padding: 0px 5px;
        border-radius: 3px;
        text-align: center;
      }
      ::after {
        content: "";
        margin: 18px 0 15px;
        display: block;
        width: 255px;
        height: 1px;
        border-top: 1px solid rgb(210, 210, 210);
      }
    }
  `;
  const P_Reward = styled.p`
    margin: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: -0.58px;
    color: rgb(0, 0, 0);
  `;
  const Button = styled.button`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 280px;
    height: 60px;
    background-color: rgb(16, 181, 66);
    box-sizing: border-box;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    line-height: 1.5 !important;
    padding: 15px 15px 15px 25px !important;
    a {
      color: rgb(255, 255, 255);
    }
    ::after {
      content: "";
      display: block;
      width: 36px;
      height: 36px;
      background: url(images/icons/common-ico-more-4-white.png) no-repeat center
        center / cover;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  `;
  return (
    <SectionMembership className="section_membership">
      <h3>
        가격 부담 없이 윌라의 모든 오디오북과 클래스를 즐기세요!
        <strong>윌라 무제한 멤버십</strong>
      </h3>
      <p>
        <strong>
          신규 회원이면 <span>첫 달은 0원!</span>
        </strong>
        <span>무료 체험 기간동안 해지 시 요금은 청구되지 않아요!</span>
      </p>
      <UlFlex>
        <li>
          <DivTopText className="top">
            <p>
              분야별 베스트셀러부터 <br />
              독점 콘텐츠까지
            </p>
            <strong className="title">오디오북 무제한</strong>
            <div className="price">
              월 9,900원
              <span>첫 달 0원!</span>
            </div>
          </DivTopText>
          <P_Reward className="reward">
            전문 성우가 녹음한 <br />
            완독 오디오북이 무제한!
          </P_Reward>
          <Button>
            <a href="#">무료체험 시작하기</a>
          </Button>
        </li>
        <li>
          <DivTopText className="top">
            <p>
              보고 듣는 <br />
              프리미엄 강의 콘텐츠
            </p>
            <strong className="title">클래스 무제한</strong>
            <div className="price">
              월 9,900원
              <span>첫 달 0원!</span>
            </div>
          </DivTopText>
          <P_Reward className="reward">
            명강, 직무, 어학, 그리고 <br />
            지식 교양이 무제한!
          </P_Reward>
          <Button>
            <a href="#">무료체험 시작하기</a>
          </Button>
        </li>
        <li>
          <DivTopText className="top">
            <p>
              윌라의 모든 콘텐츠를 <br />
              동시에 누리는
            </p>
            <strong className="title">오디오북+클래스 무제한</strong>
            <div className="price">
              월 13,500원
              <span>첫 달 0원!</span>
            </div>
          </DivTopText>
          <P_Reward className="reward">
            가성비 최고! <br />
            원하는 오디오북과 강의가 무제한!
          </P_Reward>
          <Button>
            <a href="#">무료체험 시작하기</a>
          </Button>
        </li>
      </UlFlex>
    </SectionMembership>
  );
}

export default IntroduceMembership;
