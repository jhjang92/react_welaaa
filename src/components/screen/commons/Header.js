import React from "react";
import styled from "styled-components";
function Header() {
  const Header = styled.header`
    height: 170px;
    font-size: 14px;
  `;
  // 반응형 1024~1550 일때는 width1000px 및 space-between
  const HeaderTopBox = styled.div`
    width: 1400px;
    height: 120px;
    margin: 0 auto;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: #dddddd;
    }
    @media (max-width: 1599px) and (min-width: 1024px) {
      width: 1000px;
      justify-content: space-between;
    }
  `;
  const HeaderTopUserBox = styled.div`
    display: flex;
    align-items: center;
    img {
      margin-right: 29px;
    }
    a {
      margin-right: 20px;
      cursor: pointer;
      color: #555555;
    }
    a:last-of-type {
      margin-right: 0;
    }
    span {
      width: 1px;
      height: 13px;
      margin-right: 19px;
      background-color: #dddddd;
      box-sizing: border-box;
    }
  `;
  const HeaderTopLogo = styled.h1`
    font-size: 0;
    a {
      font-size: 34px;
      img {
        width: 88px;
        height: 45px;
        vertical-align: top;
      }
    }
  `;
  const HeaderTopSearch = styled.div`
    display: flex;
    align-items: center;
    a {
      cursor: pointer;
      margin-right: 10px;
      img {
        width: 40px;
      }
    }
  `;
  const HeaderTopSearchBox = styled.div`
    width: 260px;
    height: 42px;
    margin: 0;
    padding: 0;
    border: solid 1px #dbdbdb;
    position: relative;
    background-color: #fafafa;
    border-radius: 5px;
    box-sizing: border-box;

    input {
      width: calc(100% - 46px);
      height: 100%;
      box-sizing: border-box;
      padding-left: 19px;
      color: #545454;
      background-color: transparent;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0;
    }
    button {
      padding: 12px 15px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      cursor: pointer;
    }
  `;
  const HeaderGnbBox = styled.div`
    height: 50px;
    background: #00c73c;
    box-sizing: border-box;
    position: relative;
    &.fixed {
      position: fixed;
      z-index: 999;
      width: 100%;
      top: 0;
    }
  `;
  const HeaderGnbMediaBox = styled.div`
    width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1599px) and (min-width: 1024px) {
      width: 1000px;
      justify-content: space-between;
    }
  `;
  const HeaderGnbNav = styled.nav`
    ul {
      display: flex;
      justify-content: space-between;
      li {
        height: 50px;
        line-height: 50px;
        margin-right: 30px;
        font-size: 19px;
        :nth-of-type(4) {
          margin-right: 0;
          ::after {
            content: "";
            width: 1px;
            height: 17px;
            background: #11a46b;
            display: inline-block;
            margin: 0 20px;
          }
        }
        a {
          font-weight: 700;
          color: #fff;
        }
        button {
          font-size: 19px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          ::after {
            content: "";
            width: 13px;
            height: 7px;
            margin: 0 0 8px 13px;
            display: inline-block;
            background-image: url("images/icons/web-ic-gnb-angle-down.png");
            background-repeat: no-repeat;
            background-position: 0 0;
          }
          /* 클릭시 화살표 반전 클래스 추가 */
          &.active {
            ::after {
              background-position: 0 -7px;
            }
          }
        }
      }
    }
  `;
  const HeaderSnbBox = styled.div`
    display: flex;
    align-items: center;
    a {
      color: #fff;
      img {
        vertical-align: middle;
        width: 42px;
        margin-right: 5px;
      }
      span {
        margin-right: 20px;
        color: #fff;
      }
    }
  `;

  // gnb 카테고리 hover 시 보일 전체 메뉴 Box - start
  const HeaderGnbAllMenu = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    background: white;
    padding: 30px 0 25px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    display: none;
    z-index: 999;
    /* 전체메뉴 클릭 시 class 추가 */
    &.active {
      display: block;
    }
  `;
  const AllMenuBox = styled.div`
    display: flex;
    width: 1400px;
    margin: 0 auto;
    box-sizing: border-box;
    div {
      padding-left: 40px;
      border-left: 1px solid #ddd;
      box-sizing: border-box;
      span {
        color: #00c73c;
        font-size: 17px;
        font-weight: 700;
      }
      .grid-box {
        display: grid;
        grid-template-columns: 224px 200px;
        grid-template-rows: auto;
        margin-top: 6px;
        li {
          a {
            line-height: 28px;
            color: #555;
          }
          :first-of-type {
            grid-column-start: 1;
            grid-column-end: 3;
            a {
              color: #ff761b;
              white-space: nowrap;
            }
          }
        }
      }
      .grid-unset {
        li {
          a {
            line-height: 28px;
            color: #555;
          }
        }
      }
    }
  `;
  // gnb 카테고리 hover 시 보일 전체 메뉴 Box - end
  return (
    <Header>
      <HeaderTopBox className="header_top-box">
        <HeaderTopUserBox className="top_user">
          <img src="images/icons/web-ic-person.png" alt="user 아이콘"></img>
          <a>로그인</a>
          <span></span>
          <a>윌라계정만들기</a>
        </HeaderTopUserBox>
        <HeaderTopLogo className="top_logo">
          윌라
          <a href="#">
            <img
              src="images/web-welaaa-logo-kr.png"
              // src="react_welaaa/images/web-welaaa-logo-kr.png"
              alt="로고"
            ></img>
          </a>
        </HeaderTopLogo>
        <HeaderTopSearch className="top_search">
          <a>
            <img src="images/icons/cart.svg" alt="장바구니"></img>
          </a>
          <HeaderTopSearchBox className="top_search_box">
            <input
              type="text"
              placeholder="키워드 혹은 강사/저자를 입력"
            ></input>
            <button className="top_search_btn">
              <img src="images/icons/web-ic-search.png" alt="검색"></img>
            </button>
          </HeaderTopSearchBox>
        </HeaderTopSearch>
      </HeaderTopBox>
      <HeaderGnbBox className="header_gnb-box">
        <HeaderGnbMediaBox>
          <HeaderGnbNav>
            <ul>
              <li>
                <a href="#">윌라 소개</a>
              </li>
              <li>
                <a href="#">클래스</a>
              </li>
              <li>
                <a href="#">오디오북</a>
              </li>
              <li>
                <a href="#">마이윌라</a>
              </li>
              <li>
                <button type="button">전체메뉴</button>
              </li>
            </ul>
          </HeaderGnbNav>
          <HeaderSnbBox className="header_snb-box">
            <a href="#">
              <img
                src="images/icons/b-2-b-gnb-new@2x.png"
                alt="새로운소식"
              ></img>
              <span>B2B서비스</span>
            </a>
            <a href="#">윌라 멤버십 소개</a>
          </HeaderSnbBox>
        </HeaderGnbMediaBox>
        <HeaderGnbAllMenu>
          <AllMenuBox>
            <div>
              <span>클래스</span>
              <ul className="grid-box">
                <li>
                  <a href="#">★뭘 좋아할지 몰라서, 테마별로 준비했어요!</a>
                </li>

                <li>
                  <a href="#">전체</a>
                </li>
                <li>
                  <a href="#">대한민국 명강</a>
                </li>

                <li>
                  <a href="#">위클리</a>
                </li>
                <li>
                  <a href="#">인생문답</a>
                </li>
                <li>
                  <a href="#">자기계발</a>
                </li>
                <li>
                  <a href="#">창의/기획/생각법</a>
                </li>
                <li>
                  <a href="#">리더십</a>
                </li>
                <li>
                  <a href="#">일잘러스킬</a>
                </li>
                <li>
                  <a href="#">경제/트렌드</a>
                </li>
                <li>
                  <a href="#">비즈니스</a>
                </li>
                <li>
                  <a href="#">재테크</a>
                </li>
                <li>
                  <a href="#">인문/지적대화</a>
                </li>
                <li>
                  <a href="#">문화/예술</a>
                </li>
                <li>
                  <a href="#">행복/가정</a>
                </li>
                <li>
                  <a href="#">마케팅실무</a>
                </li>
                <li>
                  <a href="#">테크&비즈니스</a>
                </li>
                <li>
                  <a href="#">전문직무</a>
                </li>
                <li>
                  <a href="#">취미생활</a>
                </li>
                <li>
                  <a href="#">영어</a>
                </li>
                <li>
                  <a href="#">일본어/중국어</a>
                </li>
                <li>
                  <a href="#">기타외국어</a>
                </li>
              </ul>
            </div>
            <div>
              <span>오디오북</span>
              <ul className="grid-box">
                <li>
                  <a href="#">★이달의 오디오북</a>
                </li>
                <li>
                  <a href="#">전체</a>
                </li>
                <li>
                  <a href="#">이달의 오디오북</a>
                </li>

                <li>
                  <a href="#">인문</a>
                </li>
                <li>
                  <a href="#">경제·경영</a>
                </li>
                <li>
                  <a href="#">자기계발</a>
                </li>
                <li>
                  <a href="#">시/에세이</a>
                </li>
                <li>
                  <a href="#">가정·실용</a>
                </li>
                <li>
                  <a href="#">예술</a>
                </li>
                <li>
                  <a href="#">과학</a>
                </li>
                <li>
                  <a href="#">클래식</a>
                </li>
                <li>
                  <a href="#">주니어</a>
                </li>
                <li>
                  <a href="#">소설</a>
                </li>
                <li>
                  <a href="#">매거진</a>
                </li>
                <li>
                  <a href="#">영어 오디오북</a>
                </li>
                <li>
                  <a href="#">북리뷰</a>
                </li>
                <li>
                  <a href="#">무료 오디오북</a>
                </li>
              </ul>
            </div>
            <div>
              <span>마이윌라</span>
              <ul className="grid-unset">
                <li>
                  <a href="#">고객센터</a>
                </li>
                <li>
                  <a href="#">로그인 해주세요</a>
                </li>
              </ul>
            </div>
          </AllMenuBox>
        </HeaderGnbAllMenu>
      </HeaderGnbBox>
    </Header>
  );
}
export default Header;
