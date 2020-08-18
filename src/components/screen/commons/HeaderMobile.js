import React from "react";
import styled from "styled-components";

function HeaderMobile() {
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
      margin-left: 30px;
      font-size: 0;
      cursor: pointer;
      img {
        font-size: 14px;
        width: 120px;
        height: 56px;
      }
    }
    .buger-menu {
      order: 1;
      width: 40px;
      height: 40px;
      cursor: pointer;
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
        a {
          font-size: 13px;
          font-weight: 200;
          color: #999;
          line-height: 43px;
        }
      }
    }
  `;
  const HeaderMenuAll = styled.div``;
  const HeaderSearchBar = styled.div``;
  return (
    <Header>
      <HeaderTop className="header-top">
        <h1>
          윌라
          <img src="images/web-welaaa-logo-kr-mobile.png"></img>
        </h1>
        <button type="button" className="buger-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="icon-menu">
          <a href="#">
            <img src="images/icons/cart.svg"></img>
          </a>
          <button type="button">
            <img src="images/icons/ic-search.png"></img>
          </button>
        </div>
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
      <HeaderMenuAll>
        <div>
          <div className="login-box">
            지금바로
            <button type="button">로그인 하러가기</button>
          </div>

          <ul className="menu-list-box">
            <li>
              <button type="button">윌라 소개</button>
              <a href="#">윌라 소개</a>
            </li>
            <li className="grid-list">
              <button type="button">클래스</button>
              <a href="#">클래스 홈</a>
            </li>
            <li className="grid-list">
              <button type="button">오디오북</button>
              <a href="#">오디오북 홈</a>
            </li>
            <li>
              <button type="button">마이윌라</button>
              <a href="#">로그인 해주세요</a>
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
          <img src=""></img>
        </div>
      </HeaderMenuAll>
    </Header>
  );
}

export default HeaderMobile;
