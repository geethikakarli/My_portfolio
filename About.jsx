const STATS = [
    { value: '8.87', label: 'CGPA', suffix: '' },
    { value: '450+', label: 'Problems Solved', suffix: '' },
    { value: '3+', label: 'Projects Built', suffix: '' },
    { value: '1', label: 'Internship', suffix: '' }
]

const INTERESTS = [
    { icon: '🤖', label: 'AI & NLP Systems', color: '#a5b4fc' },
    { icon: '💻', label: 'Full-Stack Development', color: '#67e8f9' },
    { icon: '🔐', label: 'Security Engineering', color: '#86efac' },
    { icon: '🧩', label: 'Problem Solving', color: '#fcd34d' }
]

const About = ({ id }) => {
    return (
        <section id={id} style={{ background: 'var(--bg-dark)', padding: '10rem 0' }}>
            <div className="container">
                {/* Heading */}
                <div style={{ textAlign: 'center', marginBottom: '7rem' }}>
                    <span className="section-label">Who I Am</span>
                    <h2 className="section-heading" style={{ marginBottom: '0' }}>
                        About <span>Me</span>
                    </h2>
                    <div className="divider divider-center" />
                </div>

                <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '8rem' }}>
                    {/* Left — Bio */}
                    <div className="reveal-left">
                        <h3 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: '2.4rem', color: '#f1f5f9' }}>
                            CSE Student specializing in{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #a5b4fc, #67e8f9)',
                                WebkitBackgroundClip: 'text', backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                AI & Machine Learning
                            </span>
                        </h3>

                        <p style={{ color: '#94a3b8', fontSize: '1.7rem', lineHeight: 1.8, marginBottom: '3.2rem' }}>
                            I'm a passionate Computer Science Engineering student with a strong academic foundation
                            and hands-on experience building intelligent, secure, and scalable web applications.
                            I love turning complex problems into elegant solutions using modern technologies.
                        </p>

                        <p style={{ color: '#64748b', fontSize: '1.6rem', lineHeight: 1.8, marginBottom: '4rem' }}>
                            Currently interning and actively seeking opportunities where I can contribute to
                            impactful projects, grow rapidly, and collaborate with driven teams.
                        </p>

                        {/* Interests */}
                        <div>
                            <h4 style={{ fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#475569', marginBottom: '2rem', fontFamily: "'JetBrains Mono', monospace" }}>
                                Core Interests
                            </h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                                {INTERESTS.map((item) => (
                                    <div
                                        key={item.label}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '1.2rem',
                                            padding: '1.4rem 1.8rem', borderRadius: '12px',
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            transition: 'all 0.3s ease',
                                            cursor: 'default'
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = 'rgba(99,102,241,0.08)'
                                            e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)'
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                                        }}
                                    >
                                        <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                                        <span style={{ fontSize: '1.4rem', color: '#94a3b8', fontWeight: 500 }}>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — Stats card */}
                    <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '2.4rem' }}>
                        {/* Avatar card */}
                        <div
                            style={{
                                background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(6,182,212,0.08) 100%)',
                                border: '1px solid rgba(99,102,241,0.2)',
                                borderRadius: '24px',
                                padding: '4rem',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Glow rings */}
                            <div style={{
                                position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
                                width: '20rem', height: '20rem', borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
                                pointerEvents: 'none'
                            }} />
                            <div style={{ fontSize: '8rem', marginBottom: '2rem', display: 'inline-block', animation: 'float 4s ease-in-out infinite' }}>
                                👩‍💻
                            </div>
                            <h4 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '0.6rem' }}>Geethika Karli</h4>
                            <p style={{ color: '#94a3b8', fontSize: '1.5rem', marginBottom: '0.8rem' }}>CSE (AI & ML) Student</p>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                                padding: '0.6rem 1.4rem', borderRadius: '999px',
                                background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)'
                            }}>
                                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                                <span style={{ color: '#4ade80', fontSize: '1.3rem', fontWeight: 600 }}>CGPA: 8.87</span>
                            </div>
                        </div>

                        {/* Stats grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.6rem' }}>
                            {STATS.map((stat) => (
                                <div key={stat.label} className="counter-card">
                                    <div className="counter-number">{stat.value}{stat.suffix}</div>
                                    <div className="counter-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
