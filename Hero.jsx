import { useState, useEffect } from 'react'

const TITLES = [
    'Full Stack Developer',
    'AI/ML Enthusiast',
    'Backend Engineer',
    'Problem Solver'
]

const Hero = ({ id }) => {
    const [titleIndex, setTitleIndex] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const target = TITLES[titleIndex]
        let timeout

        if (!isDeleting && displayed.length < target.length) {
            timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
        } else if (!isDeleting && displayed.length === target.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2200)
        } else if (isDeleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        } else if (isDeleting && displayed.length === 0) {
            setIsDeleting(false)
            setTitleIndex((prev) => (prev + 1) % TITLES.length)
        }

        return () => clearTimeout(timeout)
    }, [displayed, isDeleting, titleIndex])

    return (
        <section
            id={id}
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '8rem'
            }}
        >
            {/* Animated background orbs */}
            <div style={{
                position: 'absolute', top: '-10%', left: '-5%',
                width: '70rem', height: '70rem', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
                pointerEvents: 'none', animation: 'float 8s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute', bottom: '-15%', right: '-5%',
                width: '60rem', height: '60rem', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
                pointerEvents: 'none', animation: 'float 10s ease-in-out infinite reverse'
            }} />

            {/* Subtle grid overlay */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                {/* Top badge */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
                    padding: '0.8rem 2rem', borderRadius: '999px', marginBottom: '3.2rem',
                    background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                    animation: 'fadeInUp 0.6s ease-out both'
                }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
                    <span style={{ fontSize: '1.3rem', color: '#a5b4fc', fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>
                        Available for opportunities
                    </span>
                </div>

                {/* Main name */}
                <h1 style={{
                    fontSize: 'clamp(5rem, 6vw, 5rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.05,
                    marginBottom: '2rem',
                    animation: 'fadeInUp 0.7s ease-out 0.1s both'
                }}>
                    Geethika{' '}
                    <span style={{
                        background: 'linear-gradient(135deg, #a5b4fc 0%, #06b6d4 100%)',
                        WebkitBackgroundClip: 'text', backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Karli
                    </span>
                    <span style={{ color: '#6366f1' }}>.</span>
                </h1>

                {/* Typing animation */}
                <div style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                    fontWeight: 600,
                    color: '#94a3b8',
                    marginBottom: '2.4rem',
                    height: '4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0',
                    fontFamily: "'JetBrains Mono', monospace",
                    animation: 'fadeInUp 0.7s ease-out 0.2s both'
                }}>
                    <span style={{ color: '#64748b' }}>{'// '}</span>
                    <span style={{ color: '#a5b4fc' }}>{displayed}</span>
                    <span className="cursor" />
                </div>

                {/* Tagline */}
                <p style={{
                    fontSize: 'clamp(1.6rem, 2.2vw, 2rem)',
                    color: '#64748b',
                    maxWidth: '62rem',
                    margin: '0 auto 4.8rem',
                    lineHeight: 1.7,
                    animation: 'fadeInUp 0.7s ease-out 0.3s both'
                }}>
                    I build intelligent web applications using AI, backend systems, and modern technologies.
                </p>

                {/* CTA Buttons */}
                <div style={{
                    display: 'flex', gap: '1.6rem', justifyContent: 'center',
                    flexWrap: 'wrap', marginBottom: '5.6rem',
                    animation: 'fadeInUp 0.7s ease-out 0.4s both'
                }}>
                    <button
                        className="btn btn-primary"
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        style={{ fontSize: '1.6rem', padding: '1.6rem 3.6rem' }}
                    >
                        🚀 View Projects
                    </button>
                    <a
                        href="https://shocked-bronze-icduqlm0yy.edgeone.app/geethika%20resume.pdf"
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ fontSize: '1.6rem', padding: '1.6rem 3.6rem' }}
                    >
                        📄 Download Resume
                    </a>
                </div>

                {/* Social links */}
                <div style={{
                    display: 'flex', gap: '2.4rem', justifyContent: 'center', flexWrap: 'wrap',
                    animation: 'fadeInUp 0.7s ease-out 0.5s both'
                }}>
                    {[
                        { label: '⚡ GitHub', href: 'https://github.com/geethikakarli' },
                        { label: '💼 LinkedIn', href: 'https://linkedin.com/in/geethika-karli' },
                        { label: '📧 Email', href: 'mailto:karligeethika@gmail.com' }
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.8rem',
                                padding: '1rem 2rem', borderRadius: '999px',
                                border: '1px solid rgba(255,255,255,0.08)',
                                color: '#94a3b8', textDecoration: 'none',
                                fontSize: '1.4rem', fontWeight: 500,
                                background: 'rgba(255,255,255,0.03)',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(8px)'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)'
                                e.currentTarget.style.color = '#a5b4fc'
                                e.currentTarget.style.background = 'rgba(99,102,241,0.1)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                                e.currentTarget.style.color = '#94a3b8'
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div style={{ marginTop: '6rem', animation: 'fadeInUp 0.7s ease-out 0.8s both' }}>
                    <div style={{
                        width: '2.4rem', height: '4rem', border: '2px solid rgba(255,255,255,0.15)',
                        borderRadius: '999px', margin: '0 auto', position: 'relative', overflow: 'hidden'
                    }}>
                        <div style={{
                            width: '4px', height: '8px', background: '#6366f1', borderRadius: '2px',
                            position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)',
                            animation: 'float 1.8s ease-in-out infinite'
                        }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
