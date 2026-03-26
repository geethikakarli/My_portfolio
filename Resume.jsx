const EXPERIENCE = [
    {
        company: 'Unify Labs',
        role: 'Web Development Intern',
        duration: '2026',
        type: 'Internship',
        color: '#a5b4fc',
        bullets: [
            'Developed and improved web pages using HTML, CSS, and JavaScript',
            'Collaborated with the team on real-world development projects',
            'Gained hands-on experience in professional software workflows'
        ]
    }
]

const ACHIEVEMENTS = [
    { platform: 'GeeksforGeeks', score: '140+', unit: 'Problems', icon: '🟢', color: '#4ade80', glow: 'rgba(74,222,128,0.15)' },
    { platform: 'CodeChef', score: '290+', unit: 'Problems', icon: '⭐', color: '#fbbf24', glow: 'rgba(251,191,36,0.15)' },
    { platform: 'LeetCode', score: '25+', unit: 'Problems', icon: '🔶', color: '#fb923c', glow: 'rgba(251,146,60,0.15)' }
]

const CERTIFICATIONS = [
    { name: 'AWS Cloud Practitioner', issuer: 'Udemy', icon: '☁️', color: '#fb923c' },
    { name: 'Web Development Internship', issuer: 'Unify Labs', icon: '💻', color: '#a5b4fc' },
    { name: 'Hackathon Participation', issuer: 'CBIT', icon: '🏆', color: '#fbbf24' }
]

const Resume = ({ id }) => {
    return (
        <section id={id} style={{ background: 'var(--bg-dark)', padding: '10rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '7rem' }}>
                    <span className="section-label">My Journey</span>
                    <h2 className="section-heading" style={{ marginBottom: 0 }}>
                        Experience & <span>Achievements</span>
                    </h2>
                    <div className="divider divider-center" />
                </div>

                <div className="grid grid-cols-2" style={{ gap: '6rem', alignItems: 'start' }}>
                    {/* Left — Experience */}
                    <div className="reveal-left">
                        <h3 style={{
                            fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '0.25em',
                            color: '#475569', marginBottom: '3.2rem',
                            fontFamily: "'JetBrains Mono', monospace", fontWeight: 700
                        }}>
                            Work Experience
                        </h3>

                        {EXPERIENCE.map((exp, idx) => (
                            <div key={idx} className="timeline-item">
                                <div style={{
                                    background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(6,182,212,0.05))',
                                    border: '1px solid rgba(99,102,241,0.2)',
                                    borderRadius: '16px',
                                    padding: '2.8rem',
                                    marginLeft: '1.6rem'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.8rem' }}>
                                        <div>
                                            <h4 style={{ fontSize: '2rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.4rem' }}>{exp.role}</h4>
                                            <div style={{ color: '#a5b4fc', fontWeight: 600, fontSize: '1.5rem' }}>{exp.company}</div>
                                        </div>
                                        <span style={{
                                            padding: '0.4rem 1.2rem', borderRadius: '999px',
                                            background: 'rgba(99,102,241,0.12)',
                                            border: '1px solid rgba(99,102,241,0.25)',
                                            color: '#a5b4fc', fontSize: '1.2rem', fontWeight: 600,
                                            fontFamily: "'JetBrains Mono', monospace",
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {exp.bullets.map((b, bIdx) => (
                                            <li key={bIdx} style={{
                                                color: '#94a3b8', fontSize: '1.5rem', lineHeight: 1.6,
                                                display: 'flex', alignItems: 'flex-start', gap: '1rem'
                                            }}>
                                                <span style={{ color: '#6366f1', marginTop: '0.2rem', flexShrink: 0 }}>→</span>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        {/* Certifications */}
                        <h3 style={{
                            fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '0.25em',
                            color: '#475569', marginBottom: '2.4rem', marginTop: '4rem',
                            fontFamily: "'JetBrains Mono', monospace", fontWeight: 700
                        }}>
                            Certifications
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                            {CERTIFICATIONS.map((cert, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '1.6rem',
                                        padding: '1.8rem 2.4rem', borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.02)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        transition: 'all 0.25s ease'
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(99,102,241,0.06)'
                                        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)'
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                                    }}
                                >
                                    <span style={{ fontSize: '2.2rem' }}>{cert.icon}</span>
                                    <div>
                                        <div style={{ color: '#e2e8f0', fontSize: '1.5rem', fontWeight: 600 }}>{cert.name}</div>
                                        <div style={{ color: '#475569', fontSize: '1.3rem' }}>{cert.issuer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Achievements */}
                    <div className="reveal-right">
                        <h3 style={{
                            fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '0.25em',
                            color: '#475569', marginBottom: '3.2rem',
                            fontFamily: "'JetBrains Mono', monospace", fontWeight: 700
                        }}>
                            Coding Stats
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.8rem', marginBottom: '4rem' }}>
                            {ACHIEVEMENTS.map((ach, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        background: `linear-gradient(135deg, ${ach.glow}, transparent)`,
                                        border: `1px solid ${ach.color}33`,
                                        borderRadius: '16px', padding: '2.4rem',
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-4px)'
                                        e.currentTarget.style.boxShadow = `0 12px 32px ${ach.glow}`
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)'
                                        e.currentTarget.style.boxShadow = 'none'
                                    }}
                                >
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{ach.icon}</div>
                                    <div style={{
                                        fontSize: '3.2rem', fontWeight: 900, color: ach.color,
                                        marginBottom: '0.4rem', fontFamily: "'JetBrains Mono', monospace",
                                        lineHeight: 1
                                    }}>
                                        {ach.score}
                                    </div>
                                    <div style={{ color: '#e2e8f0', fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                                        {ach.unit}
                                    </div>
                                    <div style={{ color: '#475569', fontSize: '1.2rem' }}>{ach.platform}</div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume
