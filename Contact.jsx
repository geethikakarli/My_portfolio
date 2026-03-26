import { useState } from 'react'

const Contact = ({ id }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedField, setFocusedField] = useState(null)

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus({ type: '', message: '' })
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (response.ok) {
                setStatus({ type: 'success', message: '🎉 Message sent! I\'ll get back to you soon.' })
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
            }
        } catch {
            setStatus({ type: 'error', message: 'Failed to connect. Please email me directly.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const inputStyle = (field) => ({
        background: focusedField === field ? 'rgba(99,102,241,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${focusedField === field ? 'rgba(99,102,241,0.5)' : 'rgba(255,255,255,0.06)'}`,
        color: '#f1f5f9',
        padding: '1.6rem 2rem',
        borderRadius: '12px',
        width: '100%',
        fontSize: '1.5rem',
        transition: 'all 0.3s ease',
        boxShadow: focusedField === field ? '0 0 0 3px rgba(99,102,241,0.12)' : 'none',
        outline: 'none'
    })

    const contactLinks = [
        {
            icon: '📩', label: 'Email', value: 'karligeethika@gmail.com',
            href: 'mailto:karligeethika@gmail.com', color: '#a5b4fc'
        },
        {
            icon: '⚡', label: 'GitHub', value: 'github.com/geethikakarli',
            href: 'https://github.com/geethikakarli', color: '#6ee7b7'
        },
        {
            icon: '💼', label: 'LinkedIn', value: 'Geethika Karli',
            href: 'https://linkedin.com/in/geethika-karli', color: '#67e8f9'
        }
    ]

    return (
        <section id={id} style={{ background: 'var(--bg-deep)', padding: '10rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '7rem' }}>
                    <span className="section-label">Let's Connect</span>
                    <h2 className="section-heading" style={{ marginBottom: 0 }}>
                        Get In <span>Touch</span>
                    </h2>
                    <div className="divider divider-center" />
                    <p style={{ color: '#475569', fontSize: '1.7rem', maxWidth: '52rem', margin: '0 auto' }}>
                        Open to internships, collaborations, and full-time opportunities. Let's build something great together!
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', maxWidth: '1100px', margin: '0 auto' }}>
                    {/* Contact Info */}
                    <div className="reveal-left">
                        <h3 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '3.2rem' }}>
                            Contact Details
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem', marginBottom: '4rem' }}>
                            {contactLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '1.8rem',
                                        padding: '2rem 2.4rem', borderRadius: '14px',
                                        background: 'rgba(255,255,255,0.02)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        textDecoration: 'none', transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(99,102,241,0.08)'
                                        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)'
                                        e.currentTarget.style.transform = 'translateX(6px)'
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                                        e.currentTarget.style.transform = 'translateX(0)'
                                    }}
                                >
                                    <div style={{
                                        width: '4.8rem', height: '4.8rem', borderRadius: '12px',
                                        background: `${link.color}15`,
                                        border: `1px solid ${link.color}25`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '2rem', flexShrink: 0
                                    }}>
                                        {link.icon}
                                    </div>
                                    <div>
                                        <div style={{ color: '#475569', fontSize: '1.2rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem', fontFamily: "'JetBrains Mono', monospace" }}>
                                            {link.label}
                                        </div>
                                        <div style={{ color: link.color, fontSize: '1.5rem', fontWeight: 600 }}>{link.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Availability badge */}
                        <div style={{
                            padding: '2rem 2.4rem', borderRadius: '14px',
                            background: 'rgba(34,197,94,0.08)',
                            border: '1px solid rgba(34,197,94,0.2)',
                            display: 'flex', alignItems: 'center', gap: '1.4rem'
                        }}>
                            <span style={{ fontSize: '2rem' }}>🟢</span>
                            <div>
                                <div style={{ color: '#4ade80', fontWeight: 700, fontSize: '1.5rem' }}>Available Now</div>
                                <div style={{ color: '#475569', fontSize: '1.3rem' }}>Open to internship & entry-level roles</div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="reveal-right">
                        <div style={{
                            background: 'rgba(13,21,40,0.8)', border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: '20px', padding: '4rem', backdropFilter: 'blur(16px)'
                        }}>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.4rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    {['name', 'email'].map((field) => (
                                        <div key={field}>
                                            <label style={{ display: 'block', color: '#64748b', fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.8rem', textTransform: 'capitalize', fontFamily: "'JetBrains Mono', monospace" }}>
                                                {field}
                                            </label>
                                            <input
                                                type={field === 'email' ? 'email' : 'text'}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField(field)}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder={field === 'name' ? 'Your Name' : 'your@email.com'}
                                                required
                                                style={inputStyle(field)}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <label style={{ display: 'block', color: '#64748b', fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.8rem', fontFamily: "'JetBrains Mono', monospace" }}>
                                        message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="What would you like to discuss?"
                                        required
                                        rows="5"
                                        style={{ ...inputStyle('message'), resize: 'vertical' }}
                                    />
                                </div>

                                {status.message && (
                                    <div style={{
                                        padding: '1.4rem 1.8rem', borderRadius: '10px',
                                        background: status.type === 'success' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
                                        border: `1px solid ${status.type === 'success' ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)'}`,
                                        color: status.type === 'success' ? '#4ade80' : '#f87171',
                                        fontSize: '1.4rem', textAlign: 'center'
                                    }}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ width: '100%', padding: '1.8rem', fontWeight: 700, fontSize: '1.6rem', opacity: isSubmitting ? 0.7 : 1 }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? '⏳ Sending...' : '🚀 Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
