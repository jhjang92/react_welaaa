import React from "react";

function IntroduceMembership() {
  return (
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
  );
}

export default IntroduceMembership;
