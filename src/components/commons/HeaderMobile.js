import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useInitState, useInitDispatch } from "../welaaaContext";

function HeaderMobile() {
  console.log("HeaderMobile");
  const state = useInitState();
  const dispatch = useInitDispatch();
  const menuList = useRef();
  const [open, setOpen] = useState(false);

  const onToggleBurgurMenu = () => {
    dispatch({
      type: "BURGER_MENU",
    });
  };
  const onToggleHeaderSearchBar = () => {
    setOpen(!open);
  };
  const onToggleBurgerAccordion = (e) => {
    console.log(e.currentTarget.parentNode);
    e.currentTarget.parentNode.classList.toggle("open");
  };
  return (
    <Header>
      <HeaderTop className="header-top">
        <h1>
          윌라
          <img src="images/web-welaaa-logo-kr-mobile.png" alt="logo"></img>
        </h1>
        <button
          type="button"
          className="burger-menu"
          onClick={onToggleBurgurMenu}
        >
          <span></span>
          <span></span>
          <span></span>
          메뉴
        </button>
        <div className="icon-menu">
          <a href="#">
            <img src="images/icons/cart.svg" alt="장바구니"></img>
          </a>
          <button type="button" onClick={onToggleHeaderSearchBar}>
            <img src="images/icons/ic-search.png" alt="검색창 열기"></img>
          </button>
        </div>
        <HeaderSearchBar className="search-bar" open={open}>
          <button
            type="button"
            className="search-close"
            onClick={onToggleHeaderSearchBar}
          >
            <span></span>
            <span></span>
            닫기
          </button>
          <input type="text" placeholder="키워드 혹은 강사/저자를 입력"></input>
          <button type="button" className="search-btn">
            <img
              src="images/icons/ic-search-naver_green.png"
              alt="검색하기"
            ></img>
          </button>
        </HeaderSearchBar>
      </HeaderTop>
      <HeadeNavMenu className="header-menu-list">
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
        </ul>
      </HeadeNavMenu>
      <HeaderMenuAll className="burger-popup" open={state.burgerMenu}>
        <div className="burger-container">
          <div className="login-box">
            <span>지금 바로</span>
            <button type="button">로그인 하러가기</button>
          </div>

          <ul className="menu-list-box" ref={menuList}>
            <li className="block-list">
              <button type="button" onClick={onToggleBurgerAccordion}>
                윌라 소개
              </button>
              <div className="block-box">
                <a href="#">윌라 소개</a>
              </div>
            </li>
            <li className="grid-list">
              <button type="button" onClick={onToggleBurgerAccordion}>
                클래스
              </button>
              <div className="grid-box">
                <a href="#">클래스 홈</a>
                <a href="#">전체</a>
                <a href="#">대한민국 명강</a>
                <a href="#">위클리</a>
                <a href="#">인생문답</a>
                <a href="#">자기계발</a>
                <a href="#">창의/기획/생각법</a>
                <a href="#">리더십</a>
                <a href="#">일잘러스킬</a>
                <a href="#">경제/트렌드</a>
                <a href="#">비즈니스</a>
                <a href="#">재테크</a>
                <a href="#">인문/지적대화</a>
                <a href="#">문화/예술</a>
                <a href="#">행복/가정</a>
                <a href="#">마케팅실무</a>
                <a href="#">테크&비즈니스</a>
                <a href="#">전문직무</a>
                <a href="#">취미생활</a>
                <a href="#">영어</a>
                <a href="#">일본어/중국어</a>
                <a href="#">기타외국어</a>
              </div>
            </li>
            <li className="grid-list">
              <button type="button" onClick={onToggleBurgerAccordion}>
                오디오북
              </button>
              <div className="grid-box">
                <a href="#">오디오북 홈</a>
                <a href="#">전체</a>
                <a href="#">이달의 오디오북</a>
                <a href="#">인문</a>
                <a href="#">경제·경영</a>
                <a href="#">자기계발</a>
                <a href="#">시/에세이</a>
                <a href="#">가정·실용</a>
                <a href="#">예술</a>
                <a href="#">과학</a>
                <a href="#">클래식</a>
                <a href="#">주니어</a>
                <a href="#">소설</a>
                <a href="#">매거진</a>
                <a href="#">영어 오디오북</a>
                <a href="#">북리뷰</a>
                <a href="#">무료 오디오북</a>
              </div>
            </li>
            <li className="block-list">
              <button type="button" onClick={onToggleBurgerAccordion}>
                마이윌라
              </button>
              <div className="block-box">
                <a href="#">로그인 해주세요</a>
              </div>
            </li>
          </ul>
          <ul className="direct-link">
            <li>
              <a href="#">공지사항</a>
            </li>
            <li>
              <a href="#">이벤트</a>
            </li>
            <li>
              <a href="#">자주 묻는 질문</a>
            </li>
            <li>
              <a href="#">강사 지원</a>
            </li>
            <li>
              <a href="#">B2B서비스</a>
            </li>
            <li>
              <a href="#">제휴 문의</a>
            </li>
          </ul>
          <img
            src="images/static/banner-web/오디오북카드지갑_375x125.jpg"
            alt="카드지갑"
          ></img>
          <button
            type="button"
            className="popup-close"
            onClick={onToggleBurgurMenu}
          >
            <span></span>
            <span></span>
            닫기
          </button>
        </div>
      </HeaderMenuAll>
    </Header>
  );
}

export default HeaderMobile;

const Header = styled.header`
  position: fixed;
  width: 100%;
  background: white;
  z-index: 998;
`;
const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  height: 56px;
  align-items: center;
  h1 {
    order: 2;
    margin-left: 40px;
    font-size: 0;
    cursor: pointer;
    img {
      font-size: 14px;
      width: 120px;
      height: 56px;
    }
  }
  .burger-menu {
    order: 1;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 0;
    span {
      display: block;
      border-bottom: 1px solid #555;
      width: 55%;
      margin: 7px auto;
      box-sizing: border-box;
    }
  }
  .icon-menu {
    order: 3;
    display: flex;
    a {
      width: 35px;
      display: block;
      font-size: 0;
      margin-right: 10px;
      img {
        width: 100%;
      }
    }
    button {
      width: 40px;
      height: 40px;
      transform: translateY(-2px);
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
const HeadeNavMenu = styled.nav`
  height: 43px;
  ul {
    display: flex;
    justify-content: space-around;
    height: 100%;
    li {
      width: 100%;
      text-align: center;
      a {
        width: 100%;
        display: block;
        font-size: 13px;
        font-weight: 200;
        color: #999;
        line-height: 43px;
      }
    }
  }
`;
// burger menu popup window
const HeaderMenuAll = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: none;
  ${(props) =>
    props.open &&
    css`
      display: block;
    `}
  background: rgb(0, 0, 0, 0.3);
  .burger-container {
    width: 400px;
    height: 100vh;
    min-height: 100vh;
    background: white;
    position: relative;
    overflow-x: auto;
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
    .login-box {
      height: 130px;
      padding: 45px 0 0 30px;
      text-align: center;
      box-sizing: border-box;
      span {
        display: block;
        margin-bottom: 7px;
        width: calc(100% - 20px);
        font-size: 14px;
        color: #888;
      }
      > button {
        width: calc(100% - 20px);
        padding: 10px;
        border: 1px solid #00c73c;
        color: #00c73c;
        font-size: 17px;
        border-radius: 5px;
        font-weight: bold;
        display: block;
      }
    }
    /* 카테고리 목록 Ul - 아코디언메뉴 */
    .menu-list-box {
      li {
        line-height: 68px;
        button {
          width: 100%;
          display: block;
          cursor: pointer;
          text-align: left;
          display: block;
          line-height: 68px;
          color: #333;
          padding: 0 18px;
          border-bottom: 1px solid #ddd;
          font-size: 15px;

          position: relative;
          ::after {
            content: "";
            display: inline-block;
            width: 14px;
            height: 8px;
            position: absolute;
            top: 31px;
            right: 18px;

            background-image: url(images/icons/ic-mypage-side-menu-fold.png);
            background-repeat: no-repeat;
            background-position: 0 0;
            background-size: 14px 16px;
          }
        }
        div {
          display: none;
          padding: 18px;
          border-bottom: 1px solid #ddd;
          a {
            display: block;
            text-align: left;
            color: #888;
            font-size: 13px;
            line-height: 30px;
          }
          &.grid-box {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(6, 30px);
            a {
              :first-of-type {
                color: #00c73c;
              }
            }
          }
        }
        /* burgerMenu - 아코디언 메뉴 onOff*/
        &.open {
          button {
            ::after {
              background-position: 0 -8px;
            }
          }
          .block-box {
            display: block;
          }
          .grid-box {
            display: grid;
          }
        }
      }
    }
    /* 바로가기 links */
    .direct-link {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 1fr);
      border-top: 1px solid rgba(221, 221, 221, 0.5);
      li {
        a {
          color: #333;
          display: block;
          line-height: 48px;
          padding: 0 24px;
          border-left: 1px solid rgba(221, 221, 221, 0.5);
          border-bottom: 1px solid rgba(221, 221, 221, 0.5);
          font-size: 14px;
          font-weight: 300;
        }
        :nth-of-type(2n + 1) {
          a {
            border-left: none;
          }
        }
      }
    }
    /* 닫기 버튼 */
    .popup-close {
      width: 27px;
      height: 27px;
      position: absolute;
      top: 10px;
      right: 15px;
      cursor: pointer;
      font-size: 0;
      span {
        width: 100%;
        display: block;
        border: 1px solid #888;
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        transform-origin: center;
        :last-of-type {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
    }

    /* bannerAD */
    img {
      background-color: black;
      margin-top: 20px;
      cursor: pointer;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .burger-container {
      width: 100%;
    }
  }
`;
const HeaderSearchBar = styled.div`
  width: 100%;
  height: 50px;
  padding: 5px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #cecece;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  display: none;
  ${(props) =>
    props.open &&
    css`
      display: flex;
      align-items: center;
    `}

  /* 닫기 버튼 */
  .search-close {
    width: 40px;
    height: 40px;
    font-size: 0;
    position: relative;
    cursor: pointer;
    span {
      width: 50%;
      display: block;
      border: 1px solid #00c73c;
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      transform-origin: center;
      :last-of-type {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
  input {
    width: calc(100% - 80px);
    height: 100%;
    padding: 5px;
    border: none;
    font-size: 14px;
    color: #555555;
  }
  .search-btn {
    width: 40px;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
