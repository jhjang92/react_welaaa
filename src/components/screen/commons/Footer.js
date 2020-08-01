import React from "react";

function Footer() {
  return (
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
        사업자등록번호 220-87-65006|통신판매업 신고번호 제 2015-서울종로-0405호{" "}
        <br />
        주소: 서울특별시 강남구 도산대로 156, 제이콘텐트리빌딩 7층 <br />
        FAX: 02-720-1043
        <br />
        고객센터 : <span>02-6206-3240</span> (평일 10:00 AM ~ 17:00 PM, 점심시간
        12:00 ~ 14:00 PM 및 공휴일 제외)
        <br />
        서비스 이용 / 기타문의: <a href="#">welaaa@welaaa.com</a> <br />
        <span>Copyright @2020 influential</span>
      </p>
    </footer>
  );
}

export default Footer;
