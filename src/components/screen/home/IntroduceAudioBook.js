import React from "react";
import styled from "styled-components";

function IntroduceAudioBook() {
  const SectionAudioBook = styled.section`
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
  const ArticleAudioBookSlide = styled.article`
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
    background: url("images/introduce/6_pc_bg.png") no-repeat top center / 370px;
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
      height: 338px;
      margin: 0 auto;
      border-radius: 15px;
      overflow: hidden;

      transform-style: preserve-3d;
      background: blue;

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
        > p {
          font-size: 18px;
          height: 27px;
          margin: 21px 0;
          line-height: 30px;
          text-align: center;
          color: white;
        }
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
  // 콘텐츠영역에 두개의 정보가 제공되므로 레이아웃잡기위한 Box
  const MonthBookFlexBox = styled.div`
    display: flex;
    justify-content: center;
    figure {
      width: 117px;
      margin: 0;
      padding: 0 10px;
      box-sizing: border-box;

      position: relative;
      a {
        position: absolute;
        top: 137px;
        left: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        font-size: 0;
        img {
          font-size: 14px;
          width: 100px;
          height: 140px;
        }
      }
      figcaption {
        margin-top: 10px;
        letter-spacing: -2px;
        font-size: 18px;
        text-align: left;
        word-break: keep-all;
        font-weight: 200;
        P {
          color: #666;
          line-height: 1;
          margin: 0;
          width: 100px;
          height: 38px;
          font-size: 14px;
          font-weight: 500;
          color: white;
        }
        /* 글쓴이 info Box */
        > div {
          height: 45px;
          margin-top: 10px;
          box-sizing: border-box;
          display: flex;
          img {
            width: 28px;
            height: 28px;
            border-radius: 15px;
          }
          /* 저자명 Box */
          div {
            flex: 1;
            padding-left: 5px;
            box-sizing: border-box;
            p {
              letter-spacing: -2px;
              color: white;
              :first-of-type {
                width: 19px;
                height: 15px;
                font-size: 10px;
                font-weight: 300;
              }
              :last-of-type {
                width: 69px;
                height: 28px;
                font-size: 11px;
                font-weight: 300;
              }
            }
          }
        }
      }
    }
  `;
  // 리스트형태로 제공되는 콘텐츠
  // AudioList Article
  const ArticleAudioBookList = styled.article`
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
  `;
  const FlexUlBox = styled.ul`
    width: 1024px;
    margin: 40px auto 168px;
    display: flex;
    justify-content: center;
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
          P {
            font-size: 15px;
            color: #666;
            line-height: 1;
            margin: 0;
          }
        }
      }
    }
  `;
  return (
    <SectionAudioBook className="section_content-audiobook">
      <h2>읽어주는 책 윌라 오디오북</h2>
      <ArticleAudioBookSlide className="section_slide">
        <header className="section_slide-title">
          <h3>음악을 듣는 것처럼 쉽고 즐거운 독서</h3>
          <h3>
            <span>윌라 오디오북</span>
          </h3>
          <h4>
            최신작부터 베스트셀러까지,성우가 녹음해서 더 깊어지는 독서 생활
          </h4>
        </header>
        <SlideContentBox className="section_slide-content">
          <SlidePositionBox className="slide-position">
            <SlidePerspective className="slide-perspective">
              <SlideListBox>
                <li>
                  <a href="#">
                    <p>7월 이달의책</p>
                    <MonthBookFlexBox className="MonthBook">
                      <figure>
                        <img
                          src="images/8997-2-1594305861593.jpg"
                          alt="존리의 부자되기 습관"
                        ></img>
                        <figcaption>
                          <p>존리의 부자되기 습관</p>
                          <div>
                            <img
                              src="images/7712-2-1591605517376.jpg"
                              alt="존리"
                            ></img>
                            <div>
                              <p>저자</p>
                              <p>존리</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                      <figure>
                        <img
                          src="images/8996-2-1594288152426.jpg"
                          alt="루스벨트 게임"
                        ></img>
                        <figcaption>
                          <p>존리의 부자되기 습관</p>
                          <div>
                            <img
                              src="images/7887-2-1591605696219.jpg"
                              alt="이케이도 준"
                            ></img>
                            <div>
                              <p>저자</p>
                              <p>이케이도 준</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </MonthBookFlexBox>
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    <p>7월 이달의책</p>
                    <MonthBookFlexBox className="MonthBook">
                      <figure>
                        <img
                          src="images/8997-2-1594305861593.jpg"
                          alt="존리의 부자되기 습관"
                        ></img>
                        <figcaption>
                          <p>존리의 부자되기 습관</p>
                          <div>
                            <img
                              src="images/7712-2-1591605517376.jpg"
                              alt="존리"
                            ></img>
                            <div>
                              <p>저자</p>
                              <p>존리</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                      <figure>
                        <img
                          src="images/8996-2-1594288152426.jpg"
                          alt="루스벨트 게임"
                        ></img>
                        <figcaption>
                          <p>존리의 부자되기 습관</p>
                          <div>
                            <img
                              src="images/7887-2-1591605696219.jpg"
                              alt="이케이도 준"
                            ></img>
                            <div>
                              <p>저자</p>
                              <p>이케이도 준</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </MonthBookFlexBox>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>7월 이달의책</p>
                    <MonthBookFlexBox className="MonthBook">
                      <figure>
                        <img
                          src="images/8997-2-1594305861593.jpg"
                          alt="존리의 부자되기 습관"
                        ></img>
                        <figcaption>
                          <p>존리의 부자되기 습관</p>
                          <div>
                            <img
                              src="images/7712-2-1591605517376.jpg"
                              alt="존리"
                            ></img>
                            <div>
                              <p>저자</p>
                              <p>존리</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                      <figure>
                        <img
                          src="images/8996-2-1594288152426.jpg"
                          alt="루스벨트 게임"
                        ></img>
                        <figcaption>
                          <p>존리의 부자되기 습관</p>
                          <div>
                            <img
                              src="images/7887-2-1591605696219.jpg"
                              alt="이케이도 준"
                            ></img>
                            <div>
                              <p>저자</p>
                              <p>이케이도 준</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </MonthBookFlexBox>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>7월 이달의책</p>
                    <MonthBookFlexBox className="MonthBook">
                      <figure>
                        <img
                          src="images/8997-2-1594305861593.jpg"
                          alt="존리의 부자되기 습관"
                        ></img>
                        <figcaption>
                          <p>존리의 부자되기 습관</p>
                          <div>
                            <img
                              src="images/7712-2-1591605517376.jpg"
                              alt="존리"
                            ></img>
                            <div>
                              <p>저자</p>
                              <p>존리</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                      <figure>
                        <img
                          src="images/8996-2-1594288152426.jpg"
                          alt="루스벨트 게임"
                        ></img>
                        <figcaption>
                          <p>존리의 부자되기 습관</p>
                          <div>
                            <img
                              src="images/7887-2-1591605696219.jpg"
                              alt="이케이도 준"
                            ></img>
                            <div>
                              <p>저자</p>
                              <p>이케이도 준</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </MonthBookFlexBox>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>7월 이달의책</p>
                    <MonthBookFlexBox className="MonthBook">
                      <figure>
                        <img
                          src="images/8997-2-1594305861593.jpg"
                          alt="존리의 부자되기 습관"
                        ></img>
                        <figcaption>
                          <p>존리의 부자되기 습관</p>
                          <div>
                            <img
                              src="images/7712-2-1591605517376.jpg"
                              alt="존리"
                            ></img>
                            <div>
                              <p>저자</p>
                              <p>존리</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                      <figure>
                        <img
                          src="images/8996-2-1594288152426.jpg"
                          alt="루스벨트 게임"
                        ></img>
                        <figcaption>
                          <p>존리의 부자되기 습관</p>
                          <div>
                            <img
                              src="images/7887-2-1591605696219.jpg"
                              alt="이케이도 준"
                            ></img>
                            <div>
                              <p>저자</p>
                              <p>이케이도 준</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </MonthBookFlexBox>
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
      </ArticleAudioBookSlide>
      <ArticleAudioBookList className="section_list">
        <header className="section_list-title">
          <h3>
            더 많은 책을 만나는 <span>새로운 방법</span>
          </h3>
          <h3>윌라 오디오북으로 책을 더 생생하게 들으세요!</h3>
        </header>
        <FlexUlBox className="section_list-content">
          <li>
            <figure>
              <img
                src="images/introduce/7_1.png"
                alt="명견만리_불평등, 병리, 금융, 지역 편"
              ></img>
              <a href="#">
                <img src="images/introduce/ic_play.png" alt="보러가기"></img>
              </a>
              <figcaption>
                명견만리_불평등, 병리, 금융, 지역 편<p>KBS 명견만리 제작팀</p>
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
        </FlexUlBox>
      </ArticleAudioBookList>
    </SectionAudioBook>
  );
}

export default IntroduceAudioBook;
