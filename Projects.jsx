const PROJECTS = [
    {
        title: 'AI Chatbot Tutor',
        type: 'Full Stack + AI',
        emoji: '🤖',
        description: 'An AI-powered chatbot that processes user queries and generates intelligent responses using NLP concepts and API-based models. Features real-time query processing and a robust backend API.',
        tags: ['Node.js', 'Express', 'NLP API', 'HTML/CSS'],
        github: 'https://github.com/geethikakarli/ai-chatbot',
        demo: 'https://github.com/geethikakarli',
        gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(6,182,212,0.08) 100%)',
        border: 'rgba(99,102,241,0.3)',
        tagColor: '#a5b4fc',
        badge: '✨ Featured',
        badgeColor: '#a5b4fc',
        badgeBg: 'rgba(99,102,241,0.15)'
    },
    {
        title: 'Data Guard',
        type: 'Security Application',
        emoji: '🔐',
        description: 'A web-based system to enhance data protection through encryption and secure access controls. Implements JWT authentication, data encryption, and secure RESTful API design.',
        tags: ['Node.js', 'MongoDB', 'JWT', 'Crypto'],
        github: 'https://github.com/geethikakarli/data-guard',
        demo: 'https://github.com/geethikakarli',
        gradient: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(6,182,212,0.06) 100%)',
        border: 'rgba(16,185,129,0.3)',
        tagColor: '#6ee7b7',
        badge: '🔒 Security',
        badgeColor: '#6ee7b7',
        badgeBg: 'rgba(16,185,129,0.15)'
    },
    {
        title: 'AI Resume Analyzer',
        type: 'AI Integration',
        emoji: '📄',
        description: 'A smart planner and AI-powered resume analyzer that provides actionable feedback on resumes, optimizes profiles for specific job roles, and suggests career improvements.',
        tags: ['Python', 'FastAPI', 'AI Model', 'React'],
        github: 'https://github.com/geethikakarli/resume-analyzer',
        demo: 'https://github.com/geethikakarli',
        gradient: 'linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(239,68,68,0.06) 100%)',
        border: 'rgba(245,158,11,0.3)',
        tagColor: '#fcd34d',
        badge: '🚧 Planned',
        badgeColor: '#fcd34d',
        badgeBg: 'rgba(245,158,11,0.15)'
    }
]

const ProjectCard = ({ project }) => {
    return (
        <div
            style={{
                background: project.gradient,
                border: `1px solid ${project.border}`,
                borderRadius: '20px',
                padding: '3.6rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                position: 'relative',
                overflow: 'hidden',
                height: '100%'
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.5), 0 0 0 1px ${project.border}`
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
            }}
        >
            {/* Top row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{
                    width: '5.6rem', height: '5.6rem', borderRadius: '14px',
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2.6rem'
                }}>
                    {project.emoji}
                </div>
                <span style={{
                    padding: '0.5rem 1.2rem', borderRadius: '999px', fontSize: '1.1rem',
                    fontWeight: 700, background: project.badgeBg, color: project.badgeColor,
                    border: `1px solid ${project.badgeColor}33`,
                    fontFamily: "'JetBrains Mono', monospace"
                }}>
                    {project.badge}
                </span>
            </div>

            {/* Content */}
            <div>
                <div style={{
                    fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.2em', color: project.tagColor, marginBottom: '0.8rem',
                    fontFamily: "'JetBrains Mono', monospace"
                }}>
                    {project.type}
                </div>
                <h3 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '1.4rem' }}>
                    {project.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '1.5rem', lineHeight: 1.7 }}>
                    {project.description}
                </p>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {project.tags.map((tag) => (
                    <span key={tag} style={{
                        padding: '0.4rem 1rem', borderRadius: '6px',
                        fontSize: '1.2rem', fontWeight: 600,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        color: '#64748b',
                        fontFamily: "'JetBrains Mono', monospace"
                    }}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '2rem', marginTop: 'auto', paddingTop: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <a
                    href={project.github}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                        display: 'flex', alignItems: 'center', gap: '0.6rem',
                        color: '#94a3b8', textDecoration: 'none', fontSize: '1.4rem', fontWeight: 600,
                        transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f1f5f9'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                >
                    ⚡ GitHub
                </a>
                <a
                    href={project.demo}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                        display: 'flex', alignItems: 'center', gap: '0.6rem',
                        color: project.tagColor, textDecoration: 'none', fontSize: '1.4rem', fontWeight: 600,
                        transition: 'opacity 0.2s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                    🔗 Live Demo →
                </a>
            </div>
        </div>
    )
}

const Projects = ({ id }) => {
    return (
        <section id={id} style={{ background: 'var(--bg-dark)', padding: '10rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '7rem' }}>
                    <span className="section-label">What I've Built</span>
                    <h2 className="section-heading" style={{ marginBottom: 0 }}>
                        Featured <span>Projects</span>
                    </h2>
                    <div className="divider divider-center" />
                    <p style={{ color: '#64748b', fontSize: '1.7rem', maxWidth: '56rem', margin: '0 auto' }}>
                        Real-world applications spanning AI, security, and full-stack development
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.8rem'
                }}>
                    {PROJECTS.map((project, idx) => (
                        <div
                            key={idx}
                            className="reveal"
                            style={{ transitionDelay: `${idx * 0.15}s` }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {/* View all button */}
                <div style={{ textAlign: 'center', marginTop: '5.6rem' }}>
                    <a
                        href="https://github.com/geethikakarli"
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ fontSize: '1.5rem' }}
                    >
                        View All on GitHub →
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
