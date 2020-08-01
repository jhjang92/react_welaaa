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
      justify-content: space-around;
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
      margin-right: 20px;
      color: #555555;
    }
  `;
  const HeaderTopLogo = styled.h1`
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

    input {
      width: calc(100% - 46px);
      height: 100%;
      box-sizing: border-box;
      padding-left: 19px;
      color: #545454;
      background-color: transparent;
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
  `;
  const HeaderGnbMediaBox = styled.div`
    width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1599px) and (min-width: 1024px) {
      width: 1000px;
      justify-content: space-around;
    }
  `;
  const HeaderGnbNav = styled.nav`
    ul {
      display: flex;
      justify-content: space-around;
      li {
        height: 50px;
        line-height: 50px;
        margin-right: 30px;
        font-size: 19px;
        font-weight: bold;
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
            /* 클릭시 화살표 반전 */
            active {
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
  return (
    <Header>
      <HeaderTopBox className="header_top-box">
        <HeaderTopUserBox className="top_user">
          <img src="images/icons/web-ic-person.png" alt="user 아이콘"></img>
          <a>로그인</a>
          <span>|</span>
          <a>윌라계정만들기</a>
        </HeaderTopUserBox>
        <HeaderTopLogo className="top_logo">
          <a href="#">
            <img src="images/web-welaaa-logo-kr.png" alt="로고"></img>
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
      </HeaderGnbBox>
    </Header>
  );
}
export default Header;
