import { useState, useEffect } from 'react'

const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
]

const Navbar = ({ activeSection }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
            setMobileMenuOpen(false)
        }
    }

    return (
        <>
            <nav style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
                background: scrolled ? 'rgba(2,4,15,0.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
                padding: scrolled ? '1.2rem 0' : '2rem 0',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.3)' : 'none'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo */}
                    <div
                        onClick={() => scrollToSection('home')}
                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                    >
                        <span style={{
                            fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.02em',
                            background: 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)',
                            WebkitBackgroundClip: 'text', backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            GK
                        </span>
                        <span style={{
                            fontSize: '2.2rem', fontWeight: 900,
                            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                            WebkitBackgroundClip: 'text', backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>.</span>
                    </div>

                    {/* Desktop nav */}
                    <ul style={{
                        display: 'flex', gap: '0.4rem', listStyle: 'none',
                        alignItems: 'center'
                    }} className="desktop-menu">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    style={{
                                        background: activeSection === item.id ? 'rgba(99,102,241,0.12)' : 'none',
                                        border: activeSection === item.id ? '1px solid rgba(99,102,241,0.25)' : '1px solid transparent',
                                        color: activeSection === item.id ? '#a5b4fc' : '#64748b',
                                        fontWeight: activeSection === item.id ? 700 : 500,
                                        fontSize: '1.4rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s ease',
                                        padding: '0.7rem 1.4rem',
                                        borderRadius: '8px',
                                        fontFamily: 'inherit'
                                    }}
                                    onMouseEnter={e => {
                                        if (activeSection !== item.id) {
                                            e.currentTarget.style.color = '#94a3b8'
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (activeSection !== item.id) {
                                            e.currentTarget.style.color = '#64748b'
                                            e.currentTarget.style.background = 'none'
                                        }
                                    }}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Resume CTA button */}
                    <a
                        href="https://shocked-bronze-icduqlm0yy.edgeone.app/geethika%20resume.pdf"
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-primary desktop-menu"
                        style={{ padding: '0.9rem 2rem', fontSize: '1.3rem' }}
                    >
                        Resume ↗
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            display: 'none', background: 'none', border: 'none',
                            color: '#94a3b8', fontSize: '2.4rem', cursor: 'pointer',
                            padding: '0.4rem'
                        }}
                        className="mobile-toggle"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div style={{
                        position: 'absolute', top: '100%', left: '2rem', right: '2rem',
                        background: 'rgba(6,12,26,0.97)', backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px',
                        padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem',
                        zIndex: 999, marginTop: '0.8rem',
                        boxShadow: '0 20px 48px rgba(0,0,0,0.5)'
                    }}>
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                style={{
                                    background: activeSection === item.id ? 'rgba(99,102,241,0.1)' : 'none',
                                    border: 'none',
                                    color: activeSection === item.id ? '#a5b4fc' : '#94a3b8',
                                    fontWeight: 600, fontSize: '1.6rem',
                                    textAlign: 'left', padding: '1.2rem 1.6rem',
                                    borderRadius: '10px', cursor: 'pointer', fontFamily: 'inherit',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}

                <style>{`
          @media (max-width: 900px) {
            .desktop-menu { display: none !important; }
            .mobile-toggle { display: flex !important; }
          }
        `}</style>
            </nav>
        </>
    )
}

export default Navbar
