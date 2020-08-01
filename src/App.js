import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="header_top-box">
          <div className="top_user">
            <img src="images/icons/web-ic-person.png" alt="user 아이콘"></img>
            <a>로그인</a>
            <span>|</span>
            <a>윌라계정만들기</a>
          </div>
          <h1 className="top_logo">
            <a>
              <img src="images/web-welaaa-logo-kr.png" alt="로고"></img>
            </a>
          </h1>
          <div className="top_search">
            <a>
              <img src="images/icons/cart.svg" alt="장바구니"></img>
            </a>
            <div className="top_search_box">
              <input
                type="text"
                placeholder="키워드 혹은 강사/저자를 입력"
              ></input>
              <button className="top_search_btn">
                <img src="images/icons/web-ic-search.png" alt="검색"></img>
              </button>
            </div>
          </div>
        </div>
        <div className="header_gnb-box">
          <nav>
            <ul></ul>
          </nav>
          <div className="header_snb-box">
            <a href="#">
              <img
                src="images/icons/b-2-b-gnb-new@2x.png"
                alt="새로운소식"
              ></img>
              <span>B2B서비스</span>
            </a>
            <a href="#">윌라 멤버십 소개</a>
          </div>
        </div>
      </header>
      <main>
        {/* 섹션마다 백그라운드이미지 추가하기. 1200 / 640 cover */}
        {/* Banner Section */}
        <section className="section_banner1-introduce">
          <h2>책. 듣다. 쉽다. 윌라</h2>
          <div className="section1_btn-box">
            <button>
              <span>책. 듣다. 쉽다.</span>
              <br />
              <span>브랜드 캠페인 보기</span>
              <img
                src="images/introduce/ic_play_small.png"
                alt="영상 재생하기"
              ></img>
            </button>
            <button>
              <span>첫 달 무료 이용</span>
              <br />
              <span>지금 바로 시작하세요!</span>
              <img
                src="images/introduce/ic_more_small.png"
                alt="멤버쉽 사용하기"
              ></img>
            </button>
          </div>
        </section>
        <section className="section_banner2-introduce">
          <h2>책을 음악처럼 편안하게 무제한으로 듣다.</h2>
          <figure>
            <img
              src="images/web-banner/200525_PC2.png"
              alt="책 읽을 시간이 없을땐 윌라"
            ></img>
            <figcaption>
              <strong>
                책을 음악처럼 편안하게 <span>무제한</span>으로 듣다.
              </strong>
              <p>
                책 읽을 시간이 없다고요? 이제 윌라로 들으세요.
                <br />
                출퇴근 길에도, 휴식 중에도, 운동 중에도 <br />
                언제 어디서나 부담 없이 무제한으로 즐길 수 있습니다.
              </p>
            </figcaption>
          </figure>
        </section>
        <section className="section_banner3-introduce">
          <h2>책이 연기를 시작했다. 그것도 리얼하게.</h2>
          <figure>
            <figcaption>
              <strong>
                책이 연기를 시작했다. 그것도 <span>리얼하게.</span>
              </strong>
              <p>
                윌라에서는 전문 성우 목소리와 음향 효과로 <br />
                한층 더 깊어진 독서 생활을 경험하실 수 있습니다.
                <br />
                최신 베스트셀러는 물론 분야별 전문 지식과 윌라 독점 콘텐츠를
                <br />책 한 권도 안 되는 가격에 무제한으로 즐기세요.
              </p>
            </figcaption>
            <img
              src="images/web-banner/200525_PC3.png"
              alt="책 한권도 안되는 가격에 무제한"
            ></img>
          </figure>
        </section>
        <section className="section_banner4-introduce">
          <figure>
            <img src="images/web-banner/200723_PC4-2.png"></img>
            <figcaption>
              <p>
                멀게만 느껴지는 어려운 지식을 어떻게 하면 <br />더
                많은사람들에게 더 가까이 다가갈 수 있을까요?
              </p>
              <p>
                윌라는 지식과 사람의 거리를 좁힙니다. <br />
                책을 음악처럼 쉽고 편안하게 듣고, <br />
                강의를 먼 곳이 아닌 당신의 손안에서 듣게 하면서요.
              </p>
              <p>
                당신의 윌라. <br />
                당신의 편안하고 쉬운 지식 생활을 위한 모든 것. <br />
                가치로운 생활을 추구하는 당신과 늘 함께 합니다.
              </p>
            </figcaption>
          </figure>
        </section>
        {/* classBook Section */}
        <section className="section_content_welaaaclass">
          <h2>최고가 만드는 프리미엄 강의 윌라 클래스</h2>
          <article className="section_slide">
            <header className="section_slide-title">
              <h3>최고가 만드는 프리미엄 강의</h3>
              <h3>
                <span>윌라 클래스</span>
              </h3>
              <h4>역량 개발부터 인문교양까지 모든 강의를 한 번에!</h4>
            </header>
            <div className="section_slide-content">
              <ul>
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
                      src="images/slide/classSlide/eries_064_app.jpg"
                      alt="미래학자의 퓨처리포트"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/eries_064_app.jpg"
                      alt="미래학자의 퓨처리포트"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/eries_064_app.jpg"
                      alt="미래학자의 퓨처리포트"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="images/slide/classSlide/eries_064_app.jpg"
                      alt="미래학자의 퓨처리포트"
                    ></img>
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
                  <img src="images/introduce/5_1.png" alt="유튜브 안내서"></img>
                  <a href="#">
                    <img
                      src="images/introduce/ic_play.png"
                      alt="보러가기"
                    ></img>
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
                    <img
                      src="images/introduce/ic_play.png"
                      alt="보러가기"
                    ></img>
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
                    <img
                      src="images/introduce/ic_play.png"
                      alt="보러가기"
                    ></img>
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
                    <img
                      src="images/introduce/ic_play.png"
                      alt="보러가기"
                    ></img>
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
        {/* audioBook Section */}
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
                    <img
                      src="images/introduce/ic_play.png"
                      alt="보러가기"
                    ></img>
                  </a>
                  <figcaption>
                    명견만리_불평등, 병리, 금융, 지역 편
                    <p>KBS 명견만리 제작팀</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="images/introduce/5_.png" alt="유튜브 안내서"></img>
                  <a href="#">
                    <img
                      src="images/introduce/ic_play.png"
                      alt="보러가기"
                    ></img>
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
                    <img
                      src="images/introduce/ic_play.png"
                      alt="보러가기"
                    ></img>
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
                    <img
                      src="images/introduce/ic_play.png"
                      alt="보러가기"
                    ></img>
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
        <section className="section_bookbox-audiobook">
          <header>
            <h3>
              <img
                src="images/introduce/bookbox_title.png"
                alt="북크박스"
              ></img>
            </h3>
            <p>
              <strong>진짜 바쁠 땐 고전부터 신간까지 요약한</strong>
            </p>
            <p>지식인들의 10분 북인사이트</p>
          </header>
          <ul>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="images/introduce/8_1.png"
                    alt="걸어서 출퇴근하는 배우"
                  ></img>
                  <figcaption>
                    <p>걷는사람,하정우</p>
                    <p>하정우</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="images/introduce/8_1.png"
                    alt="걸어서 출퇴근하는 배우"
                  ></img>
                  <figcaption>
                    <p>걷는사람,하정우</p>
                    <p>하정우</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="images/introduce/8_1.png"
                    alt="걸어서 출퇴근하는 배우"
                  ></img>
                  <figcaption>
                    <p>걷는사람,하정우</p>
                    <p>하정우</p>
                  </figcaption>
                </figure>
              </a>
            </li>
          </ul>
          <a href="#">
            <button type="button">무료듣기</button>
          </a>
        </section>
        <section className="section_info1-audiobook">
          <h3>
            윌라와 함께하는 <br />
            당신의 <span>지적인 24시간</span>
          </h3>
          <ul>
            <li>
              <p>08:00</p>
              <p>출근길에 듣는</p>
              <p>10분 북크박스 </p>
            </li>
          </ul>
        </section>
        {/* info section */}
        <section className="section_info2-audiobook">
          <h3>
            이제 윌라로 더 스마트한 지식생활하세요! <br />
            <strong>지식이 생활이 되는 윌라만의 특별한 기능</strong>
          </h3>
          <ul>
            <li>
              <figure>
                <img src="images/introduce/10_1.png"></img>
                <figcaption>
                  <strong>더 편하게 보세요!</strong>
                  <p>교육계 최초로 세로 영상을 도입했습니다.</p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
        <section className="section_membership">
          <h3>
            가격 부담 없이 윌라의 모든 오디오북과 클래스를 즐기세요!
            <strong>윌라 무제한 멤버십</strong>
          </h3>
          <p>
            <strong>신규 회원이면 첫 달은 0원!</strong>
            <span>무료 체험 기간동안 해지 시 요금은 청구되지 않아요!</span>
          </p>
          <ul>
            <li>
              <p>분야별 베스트셀러부터 독점 콘텐츠까지</p>
              <span>오디오북 무제한</span>
              <div>월 9,900원</div>
              <span>첫 달 0원!</span>
              <p>
                전문 성우가 녹음한 <br />
                완독 오디오북이 무제한!
              </p>
              <button>
                <a href="#">무료체험 시작하기</a>
              </button>
            </li>
          </ul>
        </section>
        <section className="section_banner-ad">
          <img
            src="images/static/banner-web/오디오북카드지갑_1920x150.jpg"
            alt="오디오북카드지갑"
          ></img>
        </section>
      </main>
      <footer>
        <div className="footer_top">
          <ul>
            <li>
              <a href="#">이용약관</a>
            </li>
            <li>
              <a href="#">개인정보 처리방침</a>
            </li>
            <li>
              <a href="#">강사 지원</a>
            </li>
            <li>
              <a href="#">제휴 안내</a>
            </li>
            <li>
              <a href="#">B2B서비스</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <img
                  src="images/icons/footer-ic-naver.png"
                  alt="네이버 블로그"
                ></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="images/icons/footer-ic-fb.png"
                  alt="페이스북 윌라"
                ></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="images/icons/footer-ic-pencil.png"
                  alt="네이버 포스트"
                ></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="images/icons/footer-ic-youtube.png"
                  alt="유튜브 윌라"
                ></img>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_logo">
          <a href="/">
            <img src="images/logo-kr-white.png" alt="하단 로고"></img>
          </a>
          <span>오디오북의 시작,윌라</span>
        </div>
        <p>
          ㈜ 인플루엔셜|대표이사: 문태진 <br />
          사업자등록번호 220-87-65006|통신판매업 신고번호 제
          2015-서울종로-0405호 <br />
          주소: 서울특별시 강남구 도산대로 156, 제이콘텐트리빌딩 7층 <br />
          FAX: 02-720-1043
          <br />
          고객센터 : <span>02-6206-3240</span> (평일 10:00 AM ~ 17:00 PM,
          점심시간 12:00 ~ 14:00 PM 및 공휴일 제외)
          <br />
          서비스 이용 / 기타문의: <a href="#">welaaa@welaaa.com</a> <br />
          <span>Copyright @2020 influential</span>
        </p>
      </footer>
    </>
  );
}

export default App;
