import React from "react";

function IntroduceBanner2() {
  return (
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
  );
}

export default IntroduceBanner2;
