import { useInView } from '../hooks/useInView'
import Footer from '../components/Footer'
import './Company.css'

const stats = [
  { label: 'Spotify 총 스트리밍', value: '20억+', sub: '5세대 K-POP 최단기록' },
  { label: '데뷔 앨범 스트리밍', value: '10억+', sub: 'SUPER REAL ME' },
  { label: 'Spotify 팔로워', value: '500만+', sub: '2026.03 달성' },
  { label: '데뷔', value: '2024', sub: '03월 25일' },
]

const labels = [
  {
    name: 'BELIFT LAB',
    logo: null,
    desc: 'HYBE와 CJ ENM이 2019년 설립한 합작 레이블. "Believe in the future"를 슬로건으로 차세대 아티스트를 발굴·육성합니다. ENHYPEN과 ILLIT을 보유하고 있으며, 서바이벌 오디션을 통한 독창적인 멤버 선발 방식으로 주목받고 있습니다.',
    tags: ['HYBE', 'CJ ENM', '설립 2019', 'ENHYPEN', 'ILLIT'],
  },
  {
    name: 'HYBE',
    logo: null,
    desc: '방시혁 의장이 이끄는 글로벌 엔터테인먼트 기업. 전 세계 음악 시장을 선도하며 BTS, 세븐틴, 르세라핌 등 수많은 글로벌 아티스트를 보유하고 있습니다. 빅히트 엔터테인먼트에서 출발해 현재 세계 최고의 K-POP 기업으로 성장했습니다.',
    tags: ['BTS', '세븐틴', '르세라핌', '투모로우바이투게더', 'Global'],
  },
]

function StatItem({ stat }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`stat-item${inView ? ' in-view' : ''}`}>
      <p className="stat-label">{stat.label}</p>
      <p className="stat-value">{stat.value}</p>
      <p className="stat-sub">{stat.sub}</p>
    </div>
  )
}

export default function Company() {
  return (
    <div className="company">
      <div className="co-hero">
        <div className="co-left">
          <p className="co-eyebrow">About</p>
          <h2 className="co-title">
            빌리프랩 &<br />
            <em>HYBE</em>
          </h2>
          <p className="co-desc">
            BELIFT LAB(빌리프랩)은 HYBE와 CJ ENM이 설립한 합작 레이블로, 아일릿의
            소속사입니다. 2023년 JTBC 《R U Next?》 서바이벌 프로그램을 통해 아일릿을
            선발하고 육성했습니다.
          </p>
          <p className="co-desc co-desc--mt">
            HYBE는 방시혁 의장이 이끄는 글로벌 엔터테인먼트 기업. 아일릿은 데뷔 7개월 만에
            유럽 MTV 어워드에 노미네이트되는 등 5세대 K-POP을 이끄는 그룹으로 성장했습니다.
          </p>
        </div>

        <div className="co-right">
          <div className="co-logo-wrap">
            <p className="co-logo-text">BE:LIFT LAB</p>
            <p className="co-tagline">"Believe in the future" — 미래를 믿는 레이블.</p>
          </div>
          <div className="co-stats">
            {stats.map((s) => (
              <StatItem key={s.label} stat={s} />
            ))}
          </div>
        </div>
      </div>

      <div className="co-labels">
        {labels.map((l) => (
          <div key={l.name} className="label-card">
            <div className="label-name">
              {l.logo
                ? <img src={l.logo} alt={l.name} className="label-logo" />
                : <span>{l.name}</span>}
            </div>
            <p className="label-desc">{l.desc}</p>
            <div className="label-tags">
              {l.tags.map((t) => (
                <span key={t} className="label-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}
