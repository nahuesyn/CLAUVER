import { useNavigate } from 'react-router-dom'
import { assets } from '../data/assets'
import './Mami.css'

export default function Mami() {
  const navigate = useNavigate()

  return (
    <div className="mami">
      <div className="mami-bg" style={{ backgroundImage: `url(${assets.heroBg})` }} />
      <div className="mami-overlay" />

      <div className="mami-content">
        <button className="mami-back" onClick={() => navigate(-1)}>← 돌아가기</button>

        <div className="mami-header">
          <p className="mami-eyebrow">ILLIT · 4th Mini Album</p>
          <h1 className="mami-title">MAMIHLAPINATAPAI</h1>
          <p className="mami-date">2026. 04. 30. (목) 18:00 발매</p>
        </div>

        <div className="mami-intro">
          <p>아일릿의 예측 불가 무한 매력! 미니 4집 'MAMIHLAPINATAPAI'</p>
          <p>도파민 터지는 타이틀곡 'It's Me'…보면 볼수록 빠져드는 퍼포먼스</p>
          <p>또 한 번의 음악 스펙트럼 확장…모두의 '최애' 꿈꾸는 아일릿 코어</p>
        </div>

        <div className="mami-body">
          <p>
            그룹 아일릿(ILLIT)의 미니 4집 'MAMIHLAPINATAPAI'(마밀라피나타파이)가 4월 30일 발매됐다.
            이제껏 본 적 없는, 보면 볼수록 빠져들 수밖에 없는 아일릿의 무대를 기대하게 하는 앨범이다.
            한계를 두지 않는 이들의 가능성이 어디까지인지 예측 불가다.
          </p>
          <p>
            서로 원하지만 누구도 먼저 나서지 않는 눈치싸움을 뜻하는 'MAMIHLAPINATAPAI'.
            이 오묘한 단어에서 시작된 이번 앨범은 타인과의 관계가 깊어지면서 마주하는 다양한 감정을 다뤘다.
            '너'와의 사이에는 '좋음'과 '싫음' 같은 단순한 공식만 존재하지 않는다.
            말로 다 정의할 수 없는 미묘한 교감의 순간들이 있다.
          </p>
          <p>
            호감이 가는 상대와 첫 데이트 이후는 더욱 그렇다. 서로 가까워질수록 설렘과 긴장감이 뒤섞인
            모호한 감정도 생기기 마련이다. 이 과도기를 보내는 방법은 솔직한 내 마음에 집중하는 것.
            아일릿은 복잡한 감정조차 즐기며 당차게 나아가자고 노래한다. 언제나 주체적으로 움직이는 아일릿답다.
          </p>

          <h2 className="mami-section-title">망설임은 그만, 너의 '최애'는 바로 나야!</h2>
          <p>
            타이틀곡 'It's Me'에 아일릿의 거침없고 당돌한 매력이 고스란히 묻어난다. 좋아하는 상대와의
            관계 정의에 고민이 깊어지는 찰나, 이들은 망설임 없이 외친다. "너의 '최애'(가장 좋아하는 사람)는
            바로 나야!"라고. 이런 발칙한 직진이 아일릿만의 사랑스러움을 완성한다.
          </p>
          <p>
            음악적 변화를 준 과감한 시도가 돋보인다. 'It's Me'는 아일릿이 처음 선보이는 테크노 장르의
            곡으로, 도입부부터 한 번 들으면 잊을 수 없는 훅(HOOK)이 중독적이다. 심장을 울리는 강렬한
            비트와 신나는 멜로디, 속도감 있게 휘몰아치는 구성이 듣는 이의 도파민을 자극한다.
          </p>
          <p>
            퍼포먼스 또한 생동감이 넘친다. 아일릿의 고농축 에너지를 꾹꾹 눌러 담은 독특한 동작들이
            밀도 있게 전개된다. 아일릿 시그니처 안무인 '마법 소녀' 손동작과 어우러진 리드미컬한 스텝이
            누구나 따라 하고 싶게 만드는 킬링 파트다. 멤버들은 뻔뻔한 표정 연기와 자신감 넘치는 태도를
            더해 독보적인 아우라를 발산한다.
          </p>
          <p>
            뮤직비디오는 '최애'라는 답을 듣기 위해 고군분투하는 엉뚱한 아일릿의 모습이 담겼다.
            이들은 예기치 못한 순간에 나타나 카메라를 향해 애정을 갈망하는 눈빛을 보내며 기묘한
            긴장감을 자아내고, 시청자의 시선을 독차지하기 위한 귀여운 '최애' 경쟁을 벌인다.
            팽팽한 신경전이 흐르는 댄스 배틀 장면은 쫄깃한 몰입감을 안긴다.
            안무 동선에 따라 변화하는 극단적 카메라 앵글과 빠른 장면 전환 그 자체가 마치 퍼포먼스의
            일부처럼 느껴진다.
          </p>

          <h2 className="mami-section-title">모두의 '최애'가 될 수밖에 없는, 공감을 부르는 아일릿의 화법</h2>
          <p>
            아일릿은 전작에서 고정관념을 깨부수는 짜릿한 반전을 선사하며 변화의 시작을 알렸다.
            이들은 미니 4집 'MAMIHLAPINATAPAI'에서도 아무도 예상치 못한 방식으로 음악 스펙트럼을 확장한다.
            낯설지만 매력적이고, 새롭지만 단숨에 익숙하게 만드는 아일릿의 음악은 대중의 취향을 정교하게 파고든다.
          </p>
          <p>
            시대의 흐름을 감각적으로 녹여내며 공감대를 형성하는 음악 스타일이 한층 선명해졌다. 아일릿은
            총 5개의 트랙에서 1020 세대의 면면을 다채롭게 비춘다. 일상을 공유하며 타인과 유대감을 쌓고
            (GRWM (Get Ready With Me)), 스스로의 솔직한 감정을 가감 없이 드러낸다(It's Me). 반려동물과
            서로를 이해하며 성장하는 관계를 보여주거나(paw, paw!), 또래들의 언어를 노래로 풀어내
            (Mamihlapinatapai) 흥미를 유발한다. 또한 청춘에게 따뜻한 위로와 용기를 건네며 깊은 감동을
            전한다(Love, older you).
          </p>
        </div>

        <div className="mami-images">
          <img src="/profile.webp" alt="MAMIHLAPINATAPAI 프로필" className="mami-img mami-img--profile" />
          <img src="/schedule.webp" alt="MAMIHLAPINATAPAI 스케줄" className="mami-img mami-img--schedule" />
        </div>
      </div>
    </div>
  )
}
