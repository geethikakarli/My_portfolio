import { useState, useEffect, useRef } from 'react'
import Navbar from './components/portfolio/Navbar'
import Hero from './components/portfolio/Hero'
import About from './components/portfolio/About'
import Skills from './components/portfolio/Skills'
import Projects from './components/portfolio/Projects'
import Architecture from './components/portfolio/Architecture'
import Resume from './components/portfolio/Resume'
import Contact from './components/portfolio/Contact'

// Scroll-reveal hook
function useScrollReveal() {
    const ref = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Reveal all .reveal elements inside visible sections
                        const reveals = entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right')
                        reveals.forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 80)
                        })
                    }
                })
            },
            { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
        )

        if (ref.current) {
            ref.current.querySelectorAll('section').forEach((section) => {
                observer.observe(section)
            })
        }

        return () => observer.disconnect()
    }, [])

    return ref
}

function App() {
    const [activeSection, setActiveSection] = useState('home')
    const mainRef = useScrollReveal()

    useEffect(() => {
        const SECTIONS = ['home', 'about', 'skills', 'projects', 'architecture', 'experience', 'contact']
        const handleScroll = () => {
            const scrollPos = window.scrollY + 200
            SECTIONS.forEach((section) => {
                const element = document.getElementById(section)
                if (element && element.offsetTop <= scrollPos && (element.offsetTop + element.offsetHeight) > scrollPos) {
                    setActiveSection(section)
                }
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
            <Navbar activeSection={activeSection} />

            <main ref={mainRef}>
                <Hero id="home" />
                <About id="about" />
                <Skills id="skills" />
                <Projects id="projects" />
                <Architecture id="architecture" />
                <Resume id="experience" />
                <Contact id="contact" />
            </main>

            <footer style={{
                padding: '5.6rem 0',
                borderTop: '1px solid rgba(255,255,255,0.04)',
                background: 'var(--bg-deep)'
            }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.4rem' }}>
                        {/* Logo */}
                        <div style={{
                            fontSize: '2.8rem', fontWeight: 900, letterSpacing: '-0.02em'
                        }}>
                            <span style={{
                                background: 'linear-gradient(135deg, #a5b4fc, #67e8f9)',
                                WebkitBackgroundClip: 'text', backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Geethika Karli
                            </span>
                            <span style={{ color: '#6366f1' }}>.</span>
                        </div>

                        {/* Links */}
                        <div style={{ display: 'flex', gap: '3.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {[
                                { label: 'GitHub', href: 'https://github.com/geethikakarli' },
                                { label: 'LinkedIn', href: 'https://linkedin.com/in/geethika-karli' },
                                { label: 'Email', href: 'mailto:karligeethika@gmail.com' },
                                { label: 'Resume', href: 'https://shocked-bronze-icduqlm0yy.edgeone.app/geethika%20resume.pdf' }
                            ].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: '#475569', textDecoration: 'none', fontSize: '1.5rem',
                                        fontWeight: 500, transition: 'color 0.25s ease'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#a5b4fc'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <p style={{ color: '#2d3748', fontSize: '1.3rem', textAlign: 'center' }}>
                            © {new Date().getFullYear()} Geethika Karli. Built with love❤️ and lots of ☕
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
