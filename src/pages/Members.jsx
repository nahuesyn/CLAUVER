import { members } from '../data/members'
import { useInView } from '../hooks/useInView'
import Footer from '../components/Footer'
import './Members.css'

function MemberRow({ member, reverse }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`member-row${reverse ? ' member-row--reverse' : ''}${inView ? ' in-view' : ''}`}
    >
      <div className="member-photo">
        <img
          src={member.photo}
          alt={member.nameKr}
          loading="lazy"
        />
        <div className="member-photo-num">{member.num}</div>
      </div>

      <div className="member-info">
        <p className="member-role" style={{ color: member.color }}>
          {member.role}
        </p>
        <h2 className="member-name-kr">{member.nameKr}</h2>
        <p className="member-name-en">{member.nameEn}</p>
        <div className="member-divider" style={{ background: member.color }} />
        <p className="member-bio">{member.bio}</p>
        <div className="member-tags">
          {member.tags.map((tag) => (
            <span key={tag} className="member-tag">{tag}</span>
          ))}
        </div>
        <div className="member-details">
          {member.details.map((d) => (
            <div key={d.label} className="detail-item">
              <p className="detail-label">{d.label}</p>
              <p className="detail-value">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Members() {
  return (
    <div className="members">
      <div className="members-header">
        <p className="members-eyebrow">The Group</p>
        <h2 className="members-title">
          Meet <em>ILLIT</em>
        </h2>
        <p className="members-meta">
          빌리프랩 소속 다국적 5인조 걸그룹 · 2024.03.25 데뷔 · HYBE / BELIFT LAB
        </p>
      </div>

      <div className="members-list">
        {members.map((m, i) => (
          <MemberRow key={m.id} member={m} reverse={i % 2 !== 0} />
        ))}
      </div>

      <Footer />
    </div>
  )
}
