import React from "react";

function IntroduceBookBox() {
  return (
    <section className="section_bookbox-audiobook">
      <header>
        <h3>
          <img src="images/introduce/bookbox_title.png" alt="북크박스"></img>
        </h3>
        <p>
          <strong>진짜 바쁠 땐 고전부터 신간까지 요약한</strong>
        </p>
        <p>지식인들의 10분 북인사이트</p>
      </header>
      <ul>
        <li>
          <a href="#">
            <figure>
              <img
                src="images/introduce/8_1.png"
                alt="걸어서 출퇴근하는 배우"
              ></img>
              <figcaption>
                <p>걷는사람,하정우</p>
                <p>하정우</p>
              </figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img
                src="images/introduce/8_1.png"
                alt="걸어서 출퇴근하는 배우"
              ></img>
              <figcaption>
                <p>걷는사람,하정우</p>
                <p>하정우</p>
              </figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img
                src="images/introduce/8_1.png"
                alt="걸어서 출퇴근하는 배우"
              ></img>
              <figcaption>
                <p>걷는사람,하정우</p>
                <p>하정우</p>
              </figcaption>
            </figure>
          </a>
        </li>
      </ul>
      <a href="#">
        <button type="button">무료듣기</button>
      </a>
    </section>
  );
}
export default IntroduceBookBox;
