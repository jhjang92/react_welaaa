import React, { useRef, useEffect } from "react";
import styled from "styled-components";

function IntroduceClassWelaaa() {
  const ul = useRef(null);
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);

  useEffect(() => {
    const ulTarget = ul.current;
    let list = Array.prototype.slice.call(ul.current.childNodes);
    let initZindex = -1;
    let sumType = true;
    let transX = -100,
      transZ = -710;
    let xDown = null,
      xUp = null,
      xDiff = null;

    // 초기 zIndex 세팅
    list.map((li) => {
      li.style.zIndex = initZindex;
      li.style.transform = `translate3d(${transX}px, 0px, ${transZ}px) rotate(0deg)`;
      if (initZindex === 1) {
        sumType = false;
      }
      if (sumType) {
        initZindex++;
        transX += 50;
        transZ += 355;
      } else {
        initZindex--;
        transX = 0;
        transX += 50;
        transZ -= 355;
      }
    });

    function handleTouchStart(e) {
      console.log("ASDasd");
      xDown = e.touches[0].clientX;
    }
    function handleTouchMove(e) {
      if (!xDown) {
        return;
      }
      xUp = e.touches[0].clientX;
      xDiff = xDown - xUp;
    }
    function handleTouchEnd(e) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        console.log("LEFT");
        slide("next");
      } else {
        /* right swipe */
        console.log("RIGHT");
        slide("prev");
      }

      /* reset values */
      xDown = null;
      xUp = null;
      xDiff = null;
    }
    ulTarget.addEventListener("touchstart", handleTouchStart);
    ulTarget.addEventListener("touchmove", handleTouchMove);
    ulTarget.addEventListener("touchend", handleTouchEnd);

    function slide(btn) {
      let slideZindex = -1;
      let slideType = true;
      let slideTransX = -100,
        slideTransZ = -710;
      // prepend , append로 맨앞,맨뒤에 요소 추가함으로써 slide동작
      btn === "prev"
        ? ulTarget.prepend(list[list.length - 1])
        : ulTarget.append(list[0]);
      list = Array.prototype.slice.call(ul.current.childNodes);

      // transform 재정의
      list.map((li) => {
        li.className = "";
        li.style.zIndex = slideZindex;
        li.style.transform = `translate3d(${slideTransX}px, 0px, ${slideTransZ}px) rotate(0deg)`;
        if (slideZindex === 1) {
          li.className = "active";
          slideType = false;
        }
        if (slideType) {
          slideZindex++;
          slideTransX += 50;
          slideTransZ += 355;
        } else {
          slideZindex--;
          slideTransX = 0;
          slideTransX += 50;
          slideTransZ -= 355;
        }
      });
    }
    prevBtn.current.addEventListener("click", () => {
      slide("prev");
    });
    nextBtn.current.addEventListener("click", () => {
      slide("next");
    });
  }, []);
  return (
    <SectionClassWelaaa className="section_content_welaaaclass">
      <h2>윌라 클래스</h2>
      <ArticleClassSlide className="section_slide">
        <header className="section_slide-title">
          <h3>최고가 만드는 프리미엄 강의</h3>
          <h3>
            <span>윌라 클래스</span>
          </h3>
          <p>역량 개발부터 인문교양까지 모든 강의를 한 번에!</p>
        </header>
        <SlideContentBox className="section_slide-content">
          <SlidePositionBox className="slide-position">
            <SlidePerspective className="slide-perspective">
              <SlideListBox ref={ul}>
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
                      src="images/slide/classSlide/series_027.jpg"
                      alt="출근하기 싫다면 지금 당장 마음챙김"
                    ></img>
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_033_app.jpg"
                      alt="베스트셀러 저자 직강"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_039_app.jpg"
                      alt="윌라 인생문답"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_063_app.jpg"
                      alt="한큐에 끝내는 2020 트렌드"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_065_app.jpg"
                      alt="슬기로운 직장생활 - 생존 스킬"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_069.jpg"
                      alt="나는 인정받는 팀장이고 싶다"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_070.jpg"
                      alt="고전을 면치 못할 땐 고전을 펼치자!"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_105.jpg"
                      alt="고객 마음을 움직이는 CS 전략"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_106.jpg"
                      alt="윌라 X YBM"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/series_202_app.jpg"
                      alt="윌라 취미 클래스"
                    ></img>
                  </a>
                </li>
              </SlideListBox>
            </SlidePerspective>
          </SlidePositionBox>
          <button type="button" ref={prevBtn}>
            <img
              src="images/introduce/ic-angle-left-primary-xl.png"
              alt="왼쪽버튼"
            ></img>
          </button>
          <button type="button" ref={nextBtn}>
            <img
              src="images/introduce/ic-angle-right-primary-xl.png"
              alt="오른쪽버튼"
            ></img>
          </button>
        </SlideContentBox>
      </ArticleClassSlide>
      <ArticleClassList className="section_list">
        <header className="section_list-title">
          <h3>
            온라인에서는 <span>볼 수 없었던 강의들</span>
          </h3>
          <h3>윌라에서 최초 공개합니다!</h3>
        </header>
        <UlBox>
          <FlexUl className="section_list-content">
            <li>
              <figure>
                <img src="images/introduce/5_1.png" alt="유튜브 안내서"></img>
                <a href="#">
                  <img src="images/introduce/ic_play.png" alt="보러가기"></img>
                </a>
                <figcaption>
                  <span>1인 크리에이터를 위한 유튜브 안내서</span>
                  <p>이필성</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="images/introduce/5_2.png" alt=""></img>
                <a href="#">
                  <img src="images/introduce/ic_play.png" alt="보러가기"></img>
                </a>
                <figcaption>
                  <span>시가 필요한 순간</span>
                  <p>정재찬</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="images/introduce/5_3.png" alt=""></img>
                <a href="#">
                  <img src="images/introduce/ic_play.png" alt="보러가기"></img>
                </a>
                <figcaption>
                  <span>위클리 스타트업 스터디 20</span>
                  <p>임정욱</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="images/introduce/5_4.png" alt=""></img>
                <a href="#">
                  <img src="images/introduce/ic_play.png" alt="보러가기"></img>
                </a>
                <figcaption>
                  <span>잡생각을 아이디어로 바꾸는 아이디어 메이커</span>
                  <p>인기 PD와 작가 4인</p>
                </figcaption>
              </figure>
            </li>
          </FlexUl>
        </UlBox>
      </ArticleClassList>
    </SectionClassWelaaa>
  );
}

export default IntroduceClassWelaaa;

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
  @media (max-width: 1023px) {
    width: 768px;
    header {
      font-size: 22px;
      h3 {
        font-size: 36px;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    header {
      padding-left: 18px;
      text-align: left;
      h3 {
        font-size: 29px;
        line-height: 1.3em;
        letter-spacing: -1px;
        :last-of-type {
          margin-bottom: 8px;
        }
        span {
          ::after {
            height: 6px;
            bottom: 1px;
          }
        }
      }
      p {
        font-size: 19px;
        letter-spacing: -1.25px;
        line-height: 1.5em;
        margin: 0 0 10px 0;
      }
    }
  }
  @media screen and (max-width: 480px) {
    header {
      h3 {
        font-size: 24px;
        letter-spacing: -0.6px;
      }
      p {
        font-size: 14px;
        letter-spacing: -0.6px;
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
  @media (max-width: 1023px) {
    background: url("images/introduce/4_pc_bg.png") no-repeat top center / 370px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: unset;
    max-width: 450px;
    background: url("images/introduce/4_pc_bg.png") no-repeat top center / 190px;

    padding: 80px 0 40px 0;
    button {
      display: none;
    }
  }
`;
const SlidePositionBox = styled.div`
  position: relative;
  height: 390px;
  max-width: 650px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 241px;
  }
`;
const SlidePerspective = styled.div`
  position: relative;
  perspective: 1200px;
  max-width: 650px;
  height: 100%;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 378px;

    margin: 0 auto;
  }
  @media screen and (max-width: 480px) {
    width: 360px;
  }
`;
const SlideListBox = styled.ul`
  position: absolute;
  padding: 20px 0;
  display: flex;
  transform: translate3d(-295px, 0, 0);
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
  }
  @media (max-width: 768px) {
    padding: 10px 0;
    transform: translate3d(-137px, 0, 0);
    li {
      width: 130px;
      height: unset;
      > p {
        height: 18px;
        font-size: 12px;
        line-height: 18px;
        margin: 12px 0 10px 0;
      }
      img {
        width: 80px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    transform: translate3d(-147px, 0, 0);
  }
`;
// ClassList Article
const ArticleClassList = styled.article`
  header {
    width: 1024px;
    margin: 0 auto;
    text-align: center;
    h3 {
      margin: 0;
      font-size: 30px;
      font-weight: 300;
      letter-spacing: -2px;
      :first-of-type {
        color: #030303;
      }
      :last-of-type {
        margin-top: 5px;
        font-weight: 200;
        letter-spacing: -1.25px;
        color: #666;
      }

      span {
        display: inline-block;
        color: #030303;
        font-weight: 300;
        position: relative;
        ::after {
          content: "";
          width: 100%;
          height: 17px;
          background: #00c73c;
          display: block;
          position: absolute;
          z-index: -1;
          bottom: 0;
        }
      }
    }
  }
  @media (max-width: 1023px) {
    header {
      width: 768px;
      h3 {
        font-size: 30px;
        :last-of-type {
          font-size: 22px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    header {
      width: 580px;
      h3 {
        font-size: 20px;
        font-weight: 300;
        :last-of-type {
          font-size: 20px;
        }
        span {
          font-weight: 300;
          ::after {
            height: 6px;
            bottom: 3px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    header {
      width: 100%;
      h3 {
        font-size: 18px;
        :last-of-type {
          font-size: 18px;
        }
      }
    }
  }
`;
const UlBox = styled.div`
  margin: 40px auto 168px;
  @media (max-width: 768px) {
    margin: 40px 0 0;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;
const FlexUl = styled.ul`
  width: 1024px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  li {
    width: 162px;
    margin-right: 25px;
    vertical-align: top;
    box-sizing: border-box;

    figure {
      width: 100%;
      margin: 0;
      padding: 0;

      position: relative;
      > img {
        width: 100%;
        border-radius: 9px;
        box-shadow: 2px 4px 10px 0 rgba(0, 0, 0, 0.3);
      }
      a {
        position: absolute;
        top: 137px;
        left: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        font-size: 0;
        img {
          font-size: 14px;
        }
      }
      figcaption {
        letter-spacing: -2px;
        font-size: 18px;
        text-align: left;
        word-break: keep-all;
        font-weight: 200;
        span {
          height: 3em;
          display: block;
        }
        P {
          font-size: 15px;
          color: #666;
          line-height: 1;
          margin: 0;
        }
      }
    }
  }
  @media (max-width: 1023px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 580px;
    li {
      width: 115px;
      margin-right: 20px;
      figure {
        a {
          width: 42px;
          height: 42px;
          top: 88px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        figcaption {
          font-size: 15px;
          span {
            display: inline-block;
            width: 100%;
            height: auto;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            letter-spacing: -0.6px;
          }
        }
        p {
          font-size: 13px;
          letter-spacing: -0.6px;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    width: 407px;
    margin-left: 18px;
    li {
      width: 86px;
      margin-right: 15px;
      figure {
        figcaption {
          margin-top: 6px;
          font-size: 10px;
          p {
            font-size: 10px;
          }
        }
      }
    }
  }
`;
