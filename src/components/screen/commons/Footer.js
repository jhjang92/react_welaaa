import React from "react";
import styled from "styled-components";
function Footer() {
  const Footer = styled.footer`
    background: #666666;
    position: relative;
  `;
  const FooterTop = styled.div`
    width: 1400px;
    height: 66px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .footer_menu {
      display: flex;
      li {
        a {
          color: #ccc;
          font-size: 15px;
          display: flex;
          ::after {
            content: "ㅣ";
            display: block;
            padding: 0 12px;
            font-size: 13px;
            box-sizing: border-box;
            font-weight: 200;
          }
        }
        :last-of-type {
          a {
            ::after {
              display: none;
            }
          }
        }
        &.strong {
          a {
            font-weight: 500;
          }
        }
      }
    }
    .footer_sns {
      width: 150px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      right: 20px;

      li {
        a {
          width: 27px;
          height: 27px;
          display: block;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  `;
  const FooterSaperator = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  `;
  const FooterLogo = styled.div`
    width: 1400px;
    margin: 0 auto;
    padding: 30px 0;
    font-weight: 200;
    font-size: 15px;
    letter-spacing: -0.59px;
    line-height: 16px;
    color: #cccccc;
    a {
      img {
        width: 100px;
        height: 50px;
        margin-right: 12px;
        vertical-align: middle;
      }
    }
    span {
      color: #cccccc;
      font-weight: 500;
    }
  `;
  const P_Address = styled.p`
    width: 1400px;
    margin: 0 auto;

    font-size: 16px;
    font-weight: 200;
    color: #cccccc;
    letter-spacing: 0;
    line-height: 26px;
    box-sizing: border-box;

    padding-bottom: 40px;
    .footer_bar {
      color: #cccccc;
      padding: 0 12px;
    }
    .callNumber {
      color: white;
    }
    .mailTo {
      color: white;
    }
    .copy {
      font-weight: 300;
      font-size: 12px;
      color: #cccccc;
      line-height: 23px;
    }
  `;
  return (
    <Footer>
      <FooterTop className="footer_top">
        <ul className="footer_menu">
          <li>
            <a
              href="https://static.welaaa.co.kr/app-docs/terms.html"
              target="_blank"
            >
              이용약관
            </a>
          </li>
          <li className="strong">
            <a
              href="https://static.welaaa.co.kr/app-docs/privacy_statement.html"
              target="_blank"
            >
              개인정보 처리방침
            </a>
          </li>
          <li>
            <a href="https://www.welaaa.com/support/contents">강사 지원</a>
          </li>
          <li>
            <a
              href="https://sites.google.com/view/opencontents"
              target="_blank"
            >
              제휴 안내
            </a>
          </li>
          <li>
            <a href="https://www.welaaa.com/support/enterprise-promotion">
              B2B서비스
            </a>
          </li>
        </ul>
        <ul className="footer_sns">
          <li>
            <a href="https://blog.naver.com/influentials" target="_blank">
              <img
                src="images/icons/footer-ic-naver.png"
                alt="네이버 블로그"
              ></img>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/welaaaofficial" target="_blank">
              <img
                src="images/icons/footer-ic-fb.png"
                alt="페이스북 윌라"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://post.naver.com/my.nhn?memberNo=38709098"
              target="_blank"
            >
              <img
                src="images/icons/footer-ic-pencil.png"
                alt="네이버 포스트"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCmZiHU5N0BT3K8oiDGT9tLg"
              target="_blank"
            >
              <img
                src="images/icons/footer-ic-youtube.png"
                alt="유튜브 윌라"
              ></img>
            </a>
          </li>
        </ul>
      </FooterTop>
      <FooterSaperator />
      <FooterLogo className="footer_logo">
        <a href="/">
          <img src="images/logo-kr-white.png" alt="하단 로고"></img>
        </a>
        오디오북의 시작,<span>윌라</span>
      </FooterLogo>
      <P_Address className="address">
        ㈜ 인플루엔셜<span className="footer_bar">|</span>대표이사: 문태진{" "}
        <br />
        사업자등록번호 220-87-65006<span className="footer_bar">|</span>
        통신판매업 신고번호 제 2015-서울종로-0405호 <br />
        주소: 서울특별시 강남구 도산대로 156, 제이콘텐트리빌딩 7층 <br />
        FAX: 02-720-1043
        <br />
        고객센터 : <span className="callNumber">02-6206-3240</span> (평일 10:00
        AM ~ 17:00 PM, 점심시간 12:00 ~ 14:00 PM 및 공휴일 제외)
        <br />
        서비스 이용 / 기타문의:{" "}
        <a href="mailto:welaaa@welaaa.com" className="mailTo">
          welaaa@welaaa.com
        </a>{" "}
        <br />
        <br />
        <span className="copy">Copyright @2020 influential</span>
      </P_Address>
    </Footer>
  );
}

export default Footer;
