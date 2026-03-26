const SYSTEMS = [
    {
        name: 'AI Chatbot Tutor',
        icon: '🤖',
        color: '#a5b4fc',
        glow: 'rgba(165,180,252,0.15)',
        steps: [
            { label: 'Frontend UI', desc: 'HTML / CSS / JS', icon: '🖥️' },
            { label: 'Node.js Backend', desc: 'Express.js REST API', icon: '⚙️' },
            { label: 'AI / NLP Layer', desc: 'NLP API Processing', icon: '🧠' }
        ]
    },
    {
        name: 'Data Guard',
        icon: '🔐',
        color: '#6ee7b7',
        glow: 'rgba(110,231,183,0.15)',
        steps: [
            { label: 'Secure Frontend', desc: 'HTML / CSS / JS', icon: '🛡️' },
            { label: 'Express Backend', desc: 'JWT Auth + Encryption', icon: '🔒' },
            { label: 'MongoDB Database', desc: 'Encrypted Storage', icon: '🗄️' }
        ]
    }
]

const Architecture = ({ id }) => {
    return (
        <section id={id} style={{ background: 'var(--bg-deep)', padding: '10rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '7rem' }}>
                    <span className="section-label">Under the Hood</span>
                    <h2 className="section-heading" style={{ marginBottom: 0 }}>
                        System <span>Architecture</span>
                    </h2>
                    <div className="divider divider-center" />
                    <p style={{ color: '#475569', fontSize: '1.6rem', maxWidth: '52rem', margin: '0 auto' }}>
                        A deep look at how my projects are structured — from UI to database
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                    gap: '4rem'
                }}>
                    {SYSTEMS.map((system, sIdx) => (
                        <div
                            key={sIdx}
                            className="reveal"
                            style={{ transitionDelay: `${sIdx * 0.15}s` }}
                        >
                            <div
                                style={{
                                    background: `linear-gradient(135deg, ${system.glow}, rgba(13,21,40,0.95))`,
                                    border: `1px solid ${system.color}33`,
                                    borderRadius: '24px',
                                    padding: '4rem',
                                    transition: 'all 0.35s ease'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-6px)'
                                    e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px ${system.color}44`
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = 'none'
                                }}
                            >
                                {/* Title */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.6rem', marginBottom: '4rem' }}>
                                    <div style={{
                                        width: '5.2rem', height: '5.2rem', borderRadius: '14px',
                                        background: `${system.color}18`, border: `1px solid ${system.color}33`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '2.4rem'
                                    }}>
                                        {system.icon}
                                    </div>
                                    <h3 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#f1f5f9' }}>
                                        {system.name}
                                    </h3>
                                </div>

                                {/* Flow steps */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                    {system.steps.map((step, idx) => (
                                        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            {/* Step box */}
                                            <div
                                                style={{
                                                    width: '100%',
                                                    padding: '2rem 2.4rem',
                                                    background: 'rgba(255,255,255,0.03)',
                                                    border: `1px solid ${system.color}22`,
                                                    borderRadius: '14px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '1.6rem',
                                                    transition: 'all 0.25s ease',
                                                    cursor: 'default'
                                                }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.background = `${system.color}12`
                                                    e.currentTarget.style.borderColor = `${system.color}44`
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                                                    e.currentTarget.style.borderColor = `${system.color}22`
                                                }}
                                            >
                                                <div style={{
                                                    width: '4rem', height: '4rem', borderRadius: '10px',
                                                    background: `${system.color}15`,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    fontSize: '1.8rem', flexShrink: 0
                                                }}>
                                                    {step.icon}
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{
                                                        color: system.color, fontSize: '1.4rem',
                                                        fontWeight: 700, marginBottom: '0.3rem',
                                                        fontFamily: "'JetBrains Mono', monospace"
                                                    }}>
                                                        {step.label}
                                                    </div>
                                                    <div style={{ color: '#64748b', fontSize: '1.3rem' }}>
                                                        {step.desc}
                                                    </div>
                                                </div>
                                                <div style={{
                                                    width: '2.8rem', height: '2.8rem', borderRadius: '50%',
                                                    background: `${system.color}15`,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    color: system.color, fontSize: '1.1rem', fontWeight: 700,
                                                    fontFamily: "'JetBrains Mono', monospace"
                                                }}>
                                                    {idx + 1}
                                                </div>
                                            </div>

                                            {/* Connector arrow */}
                                            {idx < system.steps.length - 1 && (
                                                <div style={{
                                                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                                                    padding: '0.8rem 0'
                                                }}>
                                                    <div style={{ width: '2px', height: '1.6rem', background: `linear-gradient(to bottom, ${system.color}66, ${system.color}33)` }} />
                                                    <div style={{ color: system.color, fontSize: '1.4rem', lineHeight: 1 }}>▼</div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Data flow label */}
                                <div style={{
                                    marginTop: '3.2rem', padding: '1.4rem',
                                    background: `${system.color}0a`, border: `1px dashed ${system.color}33`,
                                    borderRadius: '10px', textAlign: 'center'
                                }}>
                                    <span style={{ color: '#475569', fontSize: '1.3rem', fontFamily: "'JetBrains Mono', monospace" }}>
                                        {'<-- '}
                                        <span style={{ color: system.color }}>Data Flow</span>
                                        {' -->'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Architecture
