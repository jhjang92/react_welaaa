import React from "react";

function IntroduceAudioBook() {
  return (
    <section className="section_content-audiobook">
      <h2>음악을 듣는 것처럼 쉽고 즐거운 독서</h2>
      <article className="section_slide">
        <header className="section_slide-title">
          <h3>최고가 만드는 프리미엄 강의</h3>
          <h3>
            <span>윌라 오디오북</span>
          </h3>
          <h4>
            최신작부터 베스트셀러까지,성우가 녹음해서 더 깊어지는 독서 생활
          </h4>
        </header>
        <div className="section_slide-content">
          <ul>
            <li>
              <a href="#">
                <p>7월 이달의책</p>
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
                      <p>저자</p>
                      <p>존리</p>
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
                      <p>저자</p>
                      <p>이케이도 준</p>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </li>
          </ul>
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
        </div>
      </article>
      <article className="section_list">
        <header className="section_list-title">
          <h3>온라인에서는 볼 수 없었던 강의들</h3>
          <h3>윌라에서 최초 공개합니다!</h3>
        </header>
        <ul className="section_list-content">
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
        </ul>
      </article>
    </section>
  );
}

export default IntroduceAudioBook;
