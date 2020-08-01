import React from "react";

function IntroduceBanner1() {
  return (
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
  );
}

export default IntroduceBanner1;
