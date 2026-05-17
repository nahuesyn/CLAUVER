import { useParams, useNavigate } from 'react-router-dom'
import { assets } from '../data/assets'
import './Track.css'

const tracks = [
  {
    slug: 'grwm',
    num: '01',
    title: 'GRWM (Get Ready With Me)',
    genre: 'DnB (드럼 앤 베이스)',
    description:
      '너와 함께 민낯으로 속마음을 나누는 내밀한 순간을 사랑스럽게 그려낸 DnB(드럼 앤 베이스) 장르의 곡이다. 서로가 있기에 무엇이든 될 수 있을 것 같은 즐거움이 곡 전체에 가득하다. 메이크업 튜토리얼 같은 아기자기한 가사는 아일릿의 발랄한 감성을 배가한다.',
    lyrics: `거울에 비친
우리 둘의 face
올려 달빛 base
꿈꿔온 makeup
So happy to see you

Whatchu say?

비밀스럽게 너와 주고받은 sign
날개 달린 pouch 들고 앉아
좋아 makeup mode on
별빛 조명을 켜

주머니 끝 숨겨왔던 mood
오늘만은 choose
자신감은 full
너와 함께니까
맘에 들지 이미

Whatchu say?

모카 향 lip, chu!
볼에는 하트 shape
두근 두근대
나와 너의 makeup
So happy to see you

Whatchu say?

밤하늘 색 눈엔 Milky Way
글리터 bomb 반짝거리게
맘이 간지러워
라벤더 파우더 묘한 hue

마법에 걸린 느낌
우리 사이 닿은 눈빛
가득 번진 웃음소리
Yeah we like it!

Whatchu say?

거울에 비친
우리 둘의 face
잘 어울려 bae
꿈꿔온 makeup
So happy to see you

Whatchu say?

물든 우리의 magic hour

Whatchu say?
Whatchu say?`,
    producer: 'Joonas Laaksoharju',
    writers: ['Joonas Laaksoharju', 'Elias Hjelm', 'Erika Liu', '문여름 (Jamfactory)'],
  },
  {
    slug: 'its-me',
    num: '02',
    title: "It's Me",
    isTitle: true,
    genre: '테크노 (Techno)',
    description:
      '첫 데이트 이후 좋아하는 상대와의 관계 정의에 대한 고민이 깊어지는 순간, "너의 최애는 바로 나야!"라고 당돌하게 외치는 테크노 장르의 곡이다. 자신의 감정에 솔직하고, 적극적으로 애정을 표현하는 모습에서 아일릿 특유의 주체적이고 당찬 매력이 고스란히 묻어난다. 도입부부터 귓가를 강렬하게 타격하는 훅(HOOK)은 한 번 들으면 잊을 수 없는 중독성을 일으키고, 재기 발랄한 가사가 듣는 재미를 극대화한다.',
    lyrics: `Who's your bias?
I'm your bias!
Who's your bias?
I'm your bias!
Who's your bias?
I'm your bias!

I'm the one, I'm your idol
꾸준한 네 좋아요
너는 마치 loyal fan
훔쳐봐 with fan account
나는 원해 솔직함
날 가두지 마 보석함

Prada보다 비싼 대체불가 나인데
번잡한 옆 동네 넌 왜 거길 또 헤매

Who's your bias?
I'm your bias!
Who's your bias?
I'm your bias!
Who's your bias?
I'm your bias!
Who? Who?

Who's your bias?
I'm your bias!
Who's your bias?
I'm your bias!
Who's your bias?
I'm your bias!
It's Me

It's Me

It's Me
Me, Me!
It's Me

Hey, just say I'm your fave!

I yelled "너, hilarious!"
Oh my my my my
수수방관 like tortilla
Why? Why? Why? Why?
This 풋사랑 ain't no joke
It can't can't can't can't
답답넙치! Post me on your gram

Sphere 전광판엔 커플 이니셜 레터링
올려 우리 학교 대자보에 headline

Who's your bias?
I'm your bias!
Who's your bias?
I'm your bias!
Who's your bias?
I'm your bias!
Who? Who?

Who's your bias?
I'm your bias!
Who's your bias?
I'm your bias!
Who's your bias?
I'm your bias!
It's Me

It's Me

Me
Me, Me!
It's Me

Who's your bias?
I'm your bias!
Who's your bias?
I'm your bias!
(It's Me)
Who's your bias?
I'm your bias!
It's Me

Who's your bias?
I'm your bias!
Who's your bias?
I'm your bias!
(It's Me)
Who's your bias?
I'm your bias!`,
    producer: 'The Wavys',
    writers: ['Jack Brady', 'Jordan Roman', 'Sorana', 'Rollo', 'The Deep', '유라 (youra)'],
  },
  {
    slug: 'paw-paw',
    num: '03',
    title: 'paw, paw!',
    genre: '일렉트로 팝 (Electro Pop)',
    description:
      '사랑하는 반려동물의 속마음을 알고 싶고, 평생 함께하고 싶은 애틋함을 담은 곡이다. 완전히 이해할 수는 없어도 누구보다 깊은 유대감을 형성하는 반려동물과의 관계는 따뜻한 공감을 선사한다. 반복되는 훅(HOOK)이 특징인 일렉트로 팝 장르로, 감성적인 멜로디 라인과 대비되는 묵직한 베이스 사운드가 오묘한 분위기를 자아낸다.',
    lyrics: `Tastes like jelly 너의 코
Everytime I see your face 내 맘 아야해 paw, paw!

Tastes like jelly 너의 발
내 이마에 닿을 때 눈물이 핑 paw, paw!

Tastes like jelly 너의 코
Everytime I see your face 내 맘 아야해 paw, paw!

Tastes like jelly 너의 발
내 이마에 닿을 때 눈물이 핑 paw!

Tastes like jelly 너의 코
Everytime I see your face 내 맘 아야해 paw, paw!

Tastes like jelly 너의 발
내 이마에 닿을 때 눈물이 핑 paw, paw!

Tastes like jelly 너의 코
Everytime I see your face 내 맘 아야해 paw, paw!

Tastes like jelly 너의 발
내 이마에 닿을 때 눈물이 핑 paw!

좋(은) 아(침) 해
문앞에 가만히 서 잘 갔다오래
Midnight blues
저멀리 네 머릴 쓰다듬어 달래

포근한 이불 속
넌 나의 이말 톡
얼음 같은 paw
이불 밖은 too dangerous

매일 밤 너는 꼭
나의 베개에 포옥
Umm 일어나기 싫어
꼬리 잠을 더 부르는걸..

Tastes like jelly 너의 코
Everytime I see your face 내 맘 아야해 paw, paw!

Tastes like jelly 너의 발
내 이마에 닿을 때 눈물이 핑 paw, paw!

Tastes like jelly 너의 코
Everytime I see your face 내 맘 아야해 paw, paw!

Tastes like jelly 너의 발
내 이마에 닿을 때 눈물이 핑 paw!

Tastes like jelly 너의 코
Everytime I see your face 내 맘 아야해 paw, paw!

Tastes like jelly 너의 발
내 이마에 닿을 때 눈물이 핑 paw, paw!

Tastes like jelly 너의 코
Everytime I see your face 내 맘 아야해 paw, paw!

Tastes like jelly 너의 발
내 이마에 닿을 때 눈물이 핑 paw!

약속해 내 곁에 있어 내 품 안에서
추운 밤이 와도 외롭지 않을거야
너도 몰래 흘린 내 눈물 닦아줄래
그 paw로 the little paw

가끔씩은 언제가의 꿈속처럼
너의 맘을 다 내게 말해 줄래?
우리에게 헤어짐은 없을거야 all my life

Tastes like jelly 너의 코
Everytime I see your face 내 맘 아야해 paw, paw!

Tastes like jelly 너의 발
내 이마에 닿을 때 눈물이 핑 paw!

Tastes like jelly 너의 코
Everytime I see your face 내 맘 아야해 paw, paw!

Tastes like jelly 너의 발
내 이마에 닿을 때 눈물이 핑 paw, paw!

Tastes like jelly 너의 코
Everytime I see your face 내 맘 아야해 paw, paw!

Tastes like jelly 너의 발
내 이마에 닿을 때 눈물이 핑 paw!

Tastes like jelly 너의 코
Everytime I see your face 내 맘 아야해 paw, paw!

Tastes like jelly 너의 발
내 이마에 닿을 때 눈물이 핑 paw, paw!

Tastes like jelly 너의 코
Everytime I see your face 내 맘 아야해 paw, paw!

Tastes like jelly 너의 발
내 이마에 닿을 때 눈물이 핑 paw!`,
    producer: 'Oliver Ländin',
    writers: ['Iselin Solhelm', 'Mathilde Nyegaard', 'Oliver Ländin', '"hitman" bang', 'IROHA', 'VINCENZO', '1월 8일', 'BELIFT LAB Inc.'],
  },
  {
    slug: 'mamihlapinatapai',
    num: '04',
    title: 'Mamihlapinatapai',
    genre: '아메리칸 팝 록 (American Pop Rock)',
    description:
      "서로에게 필요한 것임에도 누구도 먼저 나서지 않는 미묘한 찰나를 뜻하는 'Mamihlapinatapai'. 이를 조별 과제 앞 눈치게임으로 빗댄 동세대의 언어를 노래로 재치 있게 풀어냈다. 수많은 선택과 책임 앞에서 '게으른 완벽주의자'가 되어버린 동시대 청년들에게, 아일릿은 여유로 승리하는 자신들만의 방법을 제시한다. 아메리칸 팝 록 스타일의 시크하고 자유로운 분위기가 특징이며, \"하.. 저 혹시 조장하실 분?\"이라는 유머러스한 가사로 시작되는 인트로 토킹 랩이 인상적이다.",
    lyrics: `Ugh.. 저 혹시 조장하실 분?
일단은 나는 아냐
꽉 찬 내 to-do list
I say "What are those?"

오늘 내 영업은 closed
I mean D-day, what?
세상과 나의 눈치 game
Yeah it's ME vs. the WORLD

I! DON'T! CARE!
더워도 HOT 아메리카노
I! DON'T! CARE!
여유지 HOT 아메리카노

Uh, don't want it
No, I don't want it
Uh, don't want it
I, I don't want it

Uh, don't want it
No, I don't want it
Uh, don't want it
I, I don't want it

Wait a minute 잠시만
Don't text me when I'm gone
Like, do not disturb please or airplane mode
지금 좀 멈춰도 지구는 안 멈춰
Yeah I don't care
Call me free rider

I! DON'T! CARE!
더워도 HOT 아메리카노
I! DON'T! CARE!
여유지 HOT 아메리카노

Uh, don't want it
No, I don't want it
Uh, don't want it
I, I don't want it

Uh, don't want it
No, I don't want it
Uh, don't want it
I, I don't want it

Turn on my airplane mode
내 멋대로 all day
아무런 선택도 하지 않길 선택해 ma way
귀 아픈 알람도 전부 다 뮤트 해
무계획 같아 보여도 이것도 다 내 계획

I! DON'T! CARE!
더워도 HOT 아메리카노
I! DON'T! CARE!

I! DON'T! CARE!
여유지 HOT 아메리카노
I! DON'T! CARE!

I! DON'T! CARE!
I! DON'T! CARE!
더워도 HOT 아메리카노
I! DON'T! CARE!`,
    producer: 'Ido Zmishlany, Dan Farber',
    writers: [
      'Ido Zmishlany', 'Dan Farber', 'Annika Bennett', 'Blaise Railey', 'BELIFT LAB Inc.',
      '문여름 (Jamfactory)', '하윤아 (153/Joomnbas)', '윤 (153/Joombas)', '김바다 (MUMW)',
      '김수지 (lalala studio)', 'bay (153/Joombas)', '미아 (153/Joombas)',
      '이경 (wavecloud)', 'DBLV (CHILLER)', 'DBLV (Owl)',
    ],
  },
  {
    slug: 'love-older-you',
    num: '05',
    title: 'Love, older you',
    genre: '얼터너티브 팝 (Alternative Pop)',
    description:
      '힘들고 포기하고 싶은 순간들이 있던 어린 시절의 나에게, 조금 더 단단해진 지금의 아일릿이 건네는 다정한 편지. 따뜻하고 잔잔한 감성의 얼터너티브 팝 장르로, 듣는 이들에게 진한 위로를 선사한다. 몽환적인 분위기와 어우러지는 담백하고 꾸밈없는 아일릿의 보컬은 마치 조용한 방 안에서 이야기하는 듯한 느낌을 전한다.',
    lyrics: `Dear younger me,
조그마한 먼지가 돼 사라질까
혼자 남은 퍼즐처럼
네 자린 없는 것 같니

거울 속 그 애가
누구보다도 미워
삼켜온 눈물은
맘에 바다를 이뤄

작고 여린
Dear younger me,

어두운 긴 밤
혼자인 방 안
웅크려 잠들던
너의 머리맡 젖은 베개 위
놓아두는 letter

빛이 나는 미래는 한 걸음 앞에
그곳에서 널 기다릴 거야
참지는 마 울어도 돼 잘하고 있어

Love,
older you

구겨버린 일기장엔
엄마 화내서 미안해
늘 '열심히', 또 '열심히'
그 말이 가끔 아팠지
Dear younger me,

어두운 긴 밤
혼자인 방 안
웅크려 잠들던
너의 머리맡 젖은 베개 위
놓아두는 letter

숱한 눈물은 미래의 너에게
더 단단한 날개를 줄 거야
괜찮다고 보듬어줘 너를 믿어줘

Love,
older you

오늘은 그냥 푹 잠들어 보는 거야
Dear younger me,
눈뜨면 어둡던 맘도 환해질 거야

Dear younger me,
Love, older you
Dear younger me,
Love, older you
내일 속의 너를 믿고 꿈을 꾸길

Love,
older you`,
    producer: '신쿵, dyvahh, VINCENZO',
    writers: [
      '신쿵', 'dyvahh', 'VINCENZO', 'Sasha Alex Sloan', 'Henry Allen',
      '문여름 (Jamfactory)', '장정원 (Jamfactory)',
      'YUNAH', 'MINJU', 'MOKA', 'WONHEE', 'IROHA',
    ],
  },
]

export default function Track() {
  const { id } = useParams()
  const navigate = useNavigate()
  const track = tracks.find((t) => t.slug === id)

  if (!track) {
    return (
      <div className="track-page">
        <div className="track-bg" style={{ backgroundImage: `url(${assets.heroBg})` }} />
        <div className="track-overlay" />
        <div className="track-content">
          <p className="track-not-found">트랙을 찾을 수 없습니다.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="track-page">
      <div className="track-bg" style={{ backgroundImage: `url(${assets.heroBg})` }} />
      <div className="track-overlay" />
      <div className="track-content">
        <p className="track-eyebrow">4th Mini Album · Track {track.num}</p>
        <h1 className="track-title">{track.title}</h1>
        {track.isTitle && <span className="track-title-badge">Title Track</span>}
        {track.genre && <p className="track-genre">{track.genre}</p>}

        <div className="track-body">
          <div className="track-main">
            {track.description && (
              <div className="track-section">
                <p className="track-section-label">About</p>
                <p className="track-description">{track.description}</p>
              </div>
            )}
            {track.lyrics && (
              <div className="track-section">
                <p className="track-section-label">Lyrics</p>
                <pre className="track-lyrics">{track.lyrics}</pre>
              </div>
            )}
            {(track.producer || track.writers) && (
              <div className="track-section track-credits">
                {track.producer && (
                  <p className="track-credit-line">
                    <span className="track-credit-key">Produced by</span>
                    <span className="track-credit-val">{track.producer}</span>
                  </p>
                )}
                {track.writers && (
                  <p className="track-credit-line">
                    <span className="track-credit-key">Written by</span>
                    <span className="track-credit-val">{track.writers.join(', ')}</span>
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="track-sidebar">
            <div className="track-nav">
              {tracks.map((t) => (
                <button
                  key={t.slug}
                  className={`track-nav-item${t.slug === id ? ' track-nav-item--active' : ''}`}
                  onClick={() => navigate('/track/' + t.slug)}
                >
                  <span className="track-nav-num">{t.num}</span>
                  <span className="track-nav-name">{t.title}</span>
                </button>
              ))}
            </div>
            <button className="btn-back" onClick={() => navigate(-1)}>← 돌아가기</button>
          </div>
        </div>
      </div>
    </div>
  )
}
