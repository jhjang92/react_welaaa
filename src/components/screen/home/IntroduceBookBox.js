import React from "react";
import styled from "styled-components";

function IntroduceBookBox() {
  const SectionBookBox = styled.section`
    padding-top: 40px;
    box-sizing: border-box;
    text-align: center;
    header {
      width: 1024px;
      margin: 0 auto;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      margin-bottom: 100px;
      h3 {
        height: 88px;
        margin: 0;
        img {
          height: 100%;
        }
      }
      p {
        font-size: 30px;
        margin: 0;
        margin-bottom: 12px;
        :last-of-type {
          font-size: 20px;
          margin-bottom: 10px;
        }
        strong {
          font-weight: 500;
          color: #030303;
        }
      }
    }
  `;
  const FlexUlBox = styled.ul`
    display: flex;
    justify-content: center;
    li {
      width: 234px;
      box-sizing: border-box;
      margin-right: 60px;

      position: relative;
      :last-of-type {
        margin-right: 0;
      }
      ::after {
        content: "";
        width: 234px;
        height: 234px;
        display: block;
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        background: #000;
        border-radius: 50%;
      }
      a {
        display: block;
      }
      :hover {
        ::before {
          content: "";
          width: 74px;
          height: 190px;
          background: url(images/introduce/bookbox_record.png);
          display: block;
          position: absolute;
          top: -12px;
          right: -17px;
          z-index: 1;
        }
      }
    }
  `;
  const Figure = styled.figure`
    margin: 0 auto;
    text-align: center;
    img {
      width: 162px;
      height: 244px;
      margin: 0 auto;
      background-color: #efefef;
      border-radius: 10px;
      display: block;
      box-shadow: 0 7px 7px 0 rgba(0, 0, 0, 0.2);

      filter: grayscale(40%);
    }
    figcaption {
      p {
        margin: 0;
        font-size: 18px;
        font-weight: 200;
        letter-spacing: -2px;
        word-break: keep-all;

        :first-of-type {
          color: #030303;
        }
      }
    }
    :hover {
      img {
        filter: grayscale(0%);
      }
      figcaption {
        p {
          :first-of-type {
            font-weight: 500 !important;
          }
        }
      }
    }
  `;
  const LinkFreeListen = styled.a`
    button {
      cursor: pointer;
      margin: 72px auto 134px;
      font-size: 18px;
      padding: 12px 45px;
      box-sizing: border-box;
      font-weight: 500;
      background-color: #f5f5f5;
      border: 1px solid #e7e7e7;
      color: #030303;
      letter-spacing: -2px;
      line-height: 1;
    }
  `;
  return (
    <SectionBookBox className="section_bookbox-audiobook">
      <header>
        <h3>
          <img src="images/introduce/bookbox_title.png" alt="북크박스"></img>
        </h3>
        <p>
          <strong>진짜 바쁠 땐 고전부터 신간까지 요약한</strong>
        </p>
        <p>지식인들의 10분 북인사이트</p>
      </header>
      <FlexUlBox>
        <li>
          <a href="#">
            <Figure>
              <img
                src="images/introduce/8_1.png"
                alt="걸어서 출퇴근하는 배우"
              ></img>
              <figcaption>
                <p>걷는사람,하정우</p>
                <p>하정우</p>
              </figcaption>
            </Figure>
          </a>
        </li>
        <li>
          <a href="#">
            <Figure>
              <img src="images/introduce/8_2.png" alt=""></img>
              <figcaption>
                <p>맥파이 살인사건</p>
                <p>엔터니호로비츠</p>
              </figcaption>
            </Figure>
          </a>
        </li>
        <li>
          <a href="#">
            <Figure>
              <img src="images/introduce/8_3.png" alt=""></img>
              <figcaption>
                <p>스물아홉 생일, 1년 후 죽기로 결심했다</p>
                <p>하야마 아마리</p>
              </figcaption>
            </Figure>
          </a>
        </li>
      </FlexUlBox>
      <LinkFreeListen href="#">
        <button type="button">무료듣기</button>
      </LinkFreeListen>
    </SectionBookBox>
  );
}
export default IntroduceBookBox;
