const CATEGORIES = [
    {
        title: 'Programming',
        icon: '⚙️',
        color: '#a5b4fc',
        glow: 'rgba(165,180,252,0.15)',
        border: 'rgba(165,180,252,0.2)',
        skills: ['Java', 'Python', 'C++']
    },
    {
        title: 'Frontend',
        icon: '🎨',
        color: '#67e8f9',
        glow: 'rgba(103,232,249,0.15)',
        border: 'rgba(103,232,249,0.2)',
        skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Backend',
        icon: '🔧',
        color: '#86efac',
        glow: 'rgba(134,239,172,0.15)',
        border: 'rgba(134,239,172,0.2)',
        skills: ['Node.js', 'Express.js']
    },
    {
        title: 'Database',
        icon: '🗄️',
        color: '#fcd34d',
        glow: 'rgba(252,211,77,0.15)',
        border: 'rgba(252,211,77,0.2)',
        skills: ['MongoDB']
    },
    {
        title: 'Tools',
        icon: '🛠️',
        color: '#f9a8d4',
        glow: 'rgba(249,168,212,0.15)',
        border: 'rgba(249,168,212,0.2)',
        skills: ['Git', 'GitHub']
    }
]

const Skills = ({ id }) => {
    return (
        <section id={id} style={{ background: 'var(--bg-deep)', padding: '10rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '7rem' }}>
                    <span className="section-label">What I Work With</span>
                    <h2 className="section-heading" style={{ marginBottom: 0 }}>
                        Technical <span>Expertise</span>
                    </h2>
                    <div className="divider divider-center" />
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2.4rem'
                }}>
                    {CATEGORIES.map((cat, idx) => (
                        <div
                            key={cat.title}
                            className="reveal"
                            style={{ transitionDelay: `${idx * 0.1}s`, height: '100%' }}
                        >
                            <div
                                style={{
                                    background: `linear-gradient(135deg, ${cat.glow}, transparent)`,
                                    border: `1px solid ${cat.border}`,
                                    borderRadius: '20px',
                                    padding: '3.2rem',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-6px)'
                                    e.currentTarget.style.boxShadow = `0 20px 40px ${cat.glow}`
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = 'none'
                                }}
                            >
                                {/* Category header */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '3.2rem' }}>
                                    <div style={{
                                        width: '4.8rem', height: '4.8rem', borderRadius: '12px',
                                        background: `${cat.color}18`,
                                        border: `1px solid ${cat.color}33`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '2.2rem'
                                    }}>
                                        {cat.icon}
                                    </div>
                                    <h3 style={{
                                        fontSize: '2.2rem', fontWeight: 700,
                                        color: '#f1f5f9'
                                    }}>
                                        {cat.title}
                                    </h3>
                                </div>

                                {/* Skill tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', marginTop: 'auto' }}>
                                    {cat.skills.map((skill) => (
                                        <div
                                            key={skill}
                                            style={{
                                                padding: '1rem 1.6rem',
                                                borderRadius: '12px',
                                                fontSize: '1.4rem',
                                                fontWeight: 600,
                                                background: 'rgba(255,255,255,0.03)',
                                                color: cat.color,
                                                border: `1px solid ${cat.color}2a`,
                                                fontFamily: "'JetBrains Mono', monospace",
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.8rem',
                                                transition: 'all 0.2s ease',
                                                cursor: 'default'
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.background = `${cat.color}15`
                                                e.currentTarget.style.borderColor = `${cat.color}40`
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                                                e.currentTarget.style.borderColor = `${cat.color}2a`
                                            }}
                                        >
                                            <span style={{
                                                width: '6px', height: '6px', borderRadius: '50%',
                                                background: cat.color,
                                                boxShadow: `0 0 8px ${cat.color}`
                                            }} />
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
