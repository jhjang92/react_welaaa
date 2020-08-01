import React from "react";

function Header() {
  return (
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
            <img src="images/icons/b-2-b-gnb-new@2x.png" alt="새로운소식"></img>
            <span>B2B서비스</span>
          </a>
          <a href="#">윌라 멤버십 소개</a>
        </div>
      </div>
    </header>
  );
}
export default Header;
