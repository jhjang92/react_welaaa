import React from "react";
import styled from "styled-components";

function IntroduceInfoAudioBook1() {
  const SectionInfo01 = styled.section`
    text-align: center;
    padding-top: 28px;
    box-sizing: border-box;
    background-color: #f5f5f5;
    background-image: url(images/introduce/9_pc_bg.png);
    background-repeat: no-repeat;
    background-position: center 384px;
    h3 {
      width: 1024px;
      margin: 0 auto;
      font-size: 50px;
      font-weight: 500;
      color: #030303;
      line-height: 1.5em;
      margin-bottom: 30px;
      letter-spacing: -2px;
      span {
        display: inline-block;
        color: #030303;
        font-weight: 500;
        position: relative;
        box-sizing: border-box;
        line-height: 1;
        z-index: 1;

        ::after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 17px;
          background: #00c73c;
          bottom: -7px;
          z-index: -1;
        }
      }
    }
  `;
  const Ul = styled.ul`
    padding: 0;
    min-height: 1000px;
    &.web {
      width: 1024px;
      margin: 77px auto 0;
      position: relative;
      li {
        background: url(images/introduce/9_1.png) no-repeat center top;
        width: 320px;
        padding-top: 106px;

        position: absolute;
        top: 0;
        left: -37px;
        ::before {
          content: "";
          display: block;
          width: 26px;
          height: 26px;
          margin: 10px auto 0;
          background: #fff;
          border: 2px solid #00c73c;
          border-radius: 50%;
        }
        p {
          margin: 0;
          color: #666;
          font-size: 40px;
          font-weight: 300;
          letter-spacing: 0;
          line-height: 1;
          word-break: keep-all;

          :nth-of-type(2) {
            color: #353a3c;
            display: inline-block;
            margin: 10px auto 0;
            padding: 16px 19px;
            font-weight: 500;
            font-size: 30px;
            background: #eaeaea;
            border-radius: 13px;
            letter-spacing: -0.8px;
          }
          :last-of-type {
            font-size: 20px;
            margin-top: 20px;
            color: #666666;
            letter-spacing: -0.8px;
          }
        }

        /* li 각각의 위치 및 img 정보 */
        :nth-of-type(2) {
          left: 324px;
        }
        :nth-of-type(3) {
          left: 686px;
        }
        :nth-of-type(4) {
          top: 425px;
          left: 757px;
        }
        :nth-of-type(5) {
          top: 425px;
          left: 396px;
        }
        :nth-of-type(6) {
          top: 425px;
          left: 37px;
        }
      }
    }
  `;

  return (
    <SectionInfo01 className="section_info1-audiobook">
      <h3>
        윌라와 함께하는 <br />
        당신의 <span>지적인 24시간</span>
      </h3>
      <Ul className="web">
        <li>
          <p>08:00</p>
          <p>출근길에 듣는</p>
          <p>10분 &lt;북크박스&gt;</p>
        </li>
        <li>
          <p>12:00</p>
          <p>점심 먹고 보는</p>
          <p>
            &lt;잡생각을 아이디어로
            <br />
            바꾸는 아이디어 메이커&gt;
          </p>
        </li>
        <li>
          <p>16:00</p>
          <p>당 충전을 위해 듣는</p>
          <p>&lt;담백하게 산다는 것&gt;</p>
        </li>
        <li>
          <p>19:00</p>
          <p>운동하며 보는</p>
          <p>
            국가대표 이상화의
            <br />
            &lt;성공에 필요한 조건&gt;
          </p>
        </li>
        <li>
          <p>21:00</p>
          <p>귀갓길에 듣는</p>
          <p>
            베스트셀러
            <br />
            &lt;미움받을 용기&gt;
          </p>
        </li>
        <li>
          <p>23:00</p>
          <p>꿀잠 전에 듣는</p>
          <p>&lt;시가 필요한 순간&gt;</p>
        </li>
      </Ul>
    </SectionInfo01>
  );
}
export default IntroduceInfoAudioBook1;
