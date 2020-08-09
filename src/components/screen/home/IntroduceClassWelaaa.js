import React from "react";
import styled from "styled-components";

function IntroduceClassWelaaa() {
  const SectionClassWelaaa = styled.section`
    padding-top: 50px;
    box-sizing: border-box;

    h2 {
      margin: 0;
      padding: 0;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
  `;
  const ArticleClassSlide = styled.article`
    width: 1024px;
    margin: 0 auto;
    text-align: center;

    header {
      font-size: 30px;
      color: #666;
      font-weight: 200;
      h3 {
        font-size: 50px;
        color: #030303;
        margin: 0;
        line-height: 1.5em;
        font-weight: 400;
        letter-spacing: -2px;

        :last-of-type {
          margin-bottom: 30px;
          box-sizing: border-box;
        }
        span {
          color: #030303;
          line-height: 1;
          display: inline-block;
          position: relative;
          ::after {
            content: "";
            width: 100%;
            height: 17px;
            display: block;
            background: #00c73c;
            position: absolute;
            bottom: -7px;
            z-index: -1;
          }
        }
      }
    }
  `;
  const SlideContentBox = styled.div`
    background: url("images/introduce/4_pc_bg.png") no-repeat top center / 370px;
    max-width: 786px;
    height: 662px;
    margin: 0 auto;
    padding-top: 161px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    button {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);

      cursor: pointer;
      :last-of-type {
        left: unset;
        right: 0;
      }
    }
  `;
  const SlidePositionBox = styled.div`
    position: relative;
    height: 390px;
    max-width: 650px;
    margin: 0 auto;
  `;
  const SlidePerspective = styled.div`
    position: relative;
    perspective: 1200px;
    max-width: 650px;
    height: 100%;
    overflow: hidden;
  `;
  // 슬라이드 3d position 옵션
  // 좌우간격 transform : 50px
  // 깊이간격 -355px
  // 메인 z-index 1
  //  양쪽서브 z-index 0
  //  각 뎁스당 양쪽 동일하게 z-index -1 씩
  //  총 3개의 이미지만 로드 되며 그 뒤에 있는 img 들은 로딩속도를 고려해서 빈 img 인듯
  //  data src 로 범위안에 왔을때 이미지 추가 - 처음엔 보여지는부분 3개만 존재

  const SlideListBox = styled.ul`
    position: absolute;
    padding: 20px 0;
    display: flex;
    transform: translate3d(-48px, 0, 0);
    transform-style: preserve-3d;
    li {
      width: 248px;
      height: 350px;
      margin: 0 auto;
      border-radius: 15px;
      overflow: hidden;

      transform-style: preserve-3d;
      :after {
        content: "";
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: block;
        position: absolute;
        top: 0;
        pointer-events: none;
      }
      a {
        display: block;
        font-size: 0;
        img {
          font-size: 14px;
          width: 100%;
        }
      }
      &.active {
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
        :after {
          background: rgba(0, 0, 0, 0);
        }
      }

      /* 임시 postion 코드 js로 세팅 */
      :nth-of-type(1) {
        transform: translate3d(-50px, 0px, -355px) rotateX(0deg) rotateY(0deg);
        z-index: 0;
      }
      :nth-of-type(2) {
        transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);
        z-index: 1;
      }
      :nth-of-type(3) {
        transform: translate3d(50px, 0px, -355px) rotateX(0deg) rotateY(0deg);
        z-index: 0;
      }
      :nth-of-type(4) {
        transform: translate3d(100px, 0px, -710px) rotateX(0deg) rotateY(0deg);
        z-index: -1;
      }
    }
  `;

  return (
    <SectionClassWelaaa className="section_content_welaaaclass">
      <h2>윌라 클래스</h2>
      <ArticleClassSlide className="section_slide">
        <header className="section_slide-title">
          <h3>최고가 만드는 프리미엄 강의</h3>
          <h3>
            <span>윌라 클래스</span>
          </h3>
          역량 개발부터 인문교양까지 모든 강의를 한 번에!
        </header>
        <SlideContentBox className="section_slide-content">
          <SlidePositionBox className="slide-position">
            <SlidePerspective className="slide-perspective">
              <SlideListBox>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_064_app.jpg"
                      alt="미래학자의 퓨처리포트"
                    ></img>
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_064_app.jpg"
                      alt="미래학자의 퓨처리포트"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_064_app.jpg"
                      alt="미래학자의 퓨처리포트"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_064_app.jpg"
                      alt="미래학자의 퓨처리포트"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_064_app.jpg"
                      alt="미래학자의 퓨처리포트"
                    ></img>
                  </a>
                </li>
              </SlideListBox>
            </SlidePerspective>
          </SlidePositionBox>
          <button type="button">
            <img
              src="images/introduce/ic-angle-left-primary-xl.png"
              alt="왼쪽버튼"
            ></img>
          </button>
          <button type="button">
            <img
              src="images/introduce/ic-angle-right-primary-xl.png"
              alt="오른쪽버튼"
            ></img>
          </button>
        </SlideContentBox>
      </ArticleClassSlide>
      <article className="section_list">
        <header className="section_list-title">
          <h3>온라인에서는 볼 수 없었던 강의들</h3>
          <h3>윌라에서 최초 공개합니다!</h3>
        </header>
        <ul className="section_list-content">
          <li>
            <figure>
              <img src="images/introduce/5_1.png" alt="유튜브 안내서"></img>
              <a href="#">
                <img src="images/introduce/ic_play.png" alt="보러가기"></img>
              </a>
              <figcaption>
                1인 크리에이터를 위한 유튜브 안내서
                <p>이필성</p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="images/introduce/5_.png" alt="유튜브 안내서"></img>
              <a href="#">
                <img src="images/introduce/ic_play.png" alt="보러가기"></img>
              </a>
              <figcaption>
                1인 크리에이터를 위한 유튜브 안내서
                <p>이필성</p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="images/introduce/5_.png" alt="유튜브 안내서"></img>
              <a href="#">
                <img src="images/introduce/ic_play.png" alt="보러가기"></img>
              </a>
              <figcaption>
                1인 크리에이터를 위한 유튜브 안내서
                <p>이필성</p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="images/introduce/5_.png" alt="유튜브 안내서"></img>
              <a href="#">
                <img src="images/introduce/ic_play.png" alt="보러가기"></img>
              </a>
              <figcaption>
                1인 크리에이터를 위한 유튜브 안내서
                <p>이필성</p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </article>
    </SectionClassWelaaa>
  );
}

export default IntroduceClassWelaaa;
