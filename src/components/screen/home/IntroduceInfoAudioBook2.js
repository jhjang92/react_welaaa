import React from "react";
import styled from "styled-components";

function IntroduceInfoAudioBook2() {
  const SectionAudioBook = styled.section`
    padding: 28px 0 86px;
    box-sizing: border-box;
    h3 {
      width: 1160px;
      margin: 0 auto;
      box-sizing: border-box;
      text-align: center;
      font-size: 50px;
      line-height: 1.5em;
      letter-spacing: -2px;
      color: #030303;
      font-weight: 200;
      strong {
        color: #030303;
        font-weight: 500;
      }
    }
  `;
  const Ul = styled.ul`
    width: 1160px;
    margin: 76px auto 0;
    box-sizing: border-box;

    li {
      background: url(images/introudce/10_1.png) no-repeat center top;
      width: 208px;
      margin: 0 214px 84px 0;
      box-sizing: border-box;
      display: inline-block;
      text-align: center;
      :nth-of-type(3n) {
        margin: 0;
      }
    }
  `;
  const Figure = styled.figure`
    margin: 0;
    padding: 0;
    width: 100%;
    figcaption {
      width: 340px;
      transform: translateX(-18%);
      strong {
        font-weight: 500;
        font-size: 28px;
        letter-spacing: -1.4px;
        line-height: 1.5;
        color: #030303;
      }
      p {
        margin: 0;
        font-size: 22px;
        font-weight: 200;
        letter-spacing: -1.1px;
        line-height: 1.5;
        color: #666666;
        word-break: keep-all;
      }
    }
  `;
  return (
    <SectionAudioBook className="section_info2-audiobook">
      <h3>
        이제 윌라로 더 스마트한 지식생활하세요! <br />
        <strong>지식이 생활이 되는 윌라만의 특별한 기능</strong>
      </h3>
      <Ul>
        <li>
          <Figure>
            <img src="images/introduce/10_1.png"></img>
            <figcaption>
              <strong>더 편하게 보세요!</strong>
              <p>교육계 최초로 세로 영상을 도입했습니다.</p>
            </figcaption>
          </Figure>
        </li>
        <li>
          <Figure>
            <img src="images/introduce/10_1.png"></img>
            <figcaption>
              <strong>그때 그때 선택하세요!</strong>
              <p>비디오/오디오/텍스트 모드 중 취향대로 선택 가능합니다.</p>
            </figcaption>
          </Figure>
        </li>
        <li>
          <Figure>
            <img src="images/introduce/10_1.png"></img>
            <figcaption>
              <strong>잠시 꺼두셔도 됩니다!</strong>
              <p>이어듣기 기능과 백그라운드 재생을 지원합니다.</p>
            </figcaption>
          </Figure>
        </li>
        <li>
          <Figure>
            <img src="images/introduce/10_1.png"></img>
            <figcaption>
              <strong>엄선된 콘텐츠 추천 받으세요!</strong>
              <p>리뷰와 순위 기반으로 큐레이션 해드립니다.</p>
            </figcaption>
          </Figure>
        </li>
        <li>
          <Figure>
            <img src="images/introduce/10_1.png"></img>
            <figcaption>
              <strong>믿을만한 콘텐츠만 보세요!</strong>
              <p>프리미엄 강의와 완독형 오디오북모두 즐길 수 있습니다.</p>
            </figcaption>
          </Figure>
        </li>
        <li>
          <Figure>
            <img src="images/introduce/10_1.png"></img>
            <figcaption>
              <strong>이제 직접 찾아가지 마세요!</strong>
              <p>전국의 명강과 컨퍼런스를 윌라에서 볼 수 있습니다.</p>
            </figcaption>
          </Figure>
        </li>
      </Ul>
    </SectionAudioBook>
  );
}
export default IntroduceInfoAudioBook2;
