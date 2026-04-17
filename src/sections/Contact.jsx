import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FadeInLeft, FadeInRight, SectionTag, SparkleDecor } from '../components/AnimUtils'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
// eslint-disable-next-line no-unused-vars
import emailjs from '@emailjs/browser'

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com', color: 'hover:text-hotpink' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-lime' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/', color: 'hover:text-cream' },
  { icon: TwitterIcon, label: 'Twitter/X', href: 'https://twitter.com', color: 'hover:text-pinkmed' },
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'afridrizwana@gmail.com', href: 'mailto:afridarizwana@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+62 895-0412-0364', href: 'tel:+6289504120364' },
  { icon: MapPin, label: 'Location', value: 'Bogor, Indonesia 🇮🇩', href: '#' },
]

export default function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // EmailJS — replace with your actual service/template/key
    // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY')
    //   .then(() => setStatus('success'))
    //   .catch(() => setStatus('error'))

    // Demo: simulate success after 1.5s
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  const inputClass = (field) => `
    w-full bg-cream/5 border rounded-xl px-4 py-3.5 font-poppins text-cream placeholder-cream/30 text-sm
    outline-none transition-all duration-300
    ${focused === field ? 'border-lime bg-lime/5' : 'border-cream/10 hover:border-cream/20'}
  `

  return (
    <section id="contact" className="relative bg-dark overflow-hidden py-24 lg:py-32">
      {/* Background decoratives */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime to-transparent opacity-30" />
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-hotpink/10 blob" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-pinkmed/8 blob-2" />
        <div className="absolute top-0 right-0 w-80 h-80 dot-pattern opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeInLeft className="mb-16">
          <SectionTag label="Get In Touch" dark={true} />
          <h2 className="font-poppins font-black text-cream text-4xl md:text-5xl xl:text-7xl mt-4 leading-tight">
            Let's create{' '}
            <br />
            something{' '}
            <span className="text-gradient">amazing</span>
            <span className="text-lime">.</span>
          </h2>
          <p className="font-poppins text-cream/50 text-base mt-4 max-w-md">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's talk!
          </p>
        </FadeInLeft>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT — Info */}
          <FadeInLeft className="lg:col-span-4 space-y-8">
            {/* Contact info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-cream/5 border border-cream/10 hover:border-lime/30 hover:bg-lime/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-lime/10 flex items-center justify-center group-hover:bg-lime/20 transition-colors">
                    <info.icon size={18} className="text-lime" />
                  </div>
                  <div>
                    <p className="font-poppins text-cream/40 text-xs tracking-widest uppercase">{info.label}</p>
                    <p className="font-poppins text-cream font-medium text-sm mt-0.5">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl p-5 bg-lime/10 border border-lime/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 bg-lime rounded-full animate-pulse" />
                <span className="font-poppins font-bold text-lime text-sm">Available for Work</span>
              </div>
              <p className="font-poppins text-cream/50 text-sm">
                Currently open for freelance projects and full-time opportunities.
              </p>
            </motion.div>

            {/* Social links */}
            <div>
              <p className="font-poppins text-cream/40 text-xs tracking-widest uppercase mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className={`w-10 h-10 rounded-xl bg-cream/5 border border-cream/10 flex items-center justify-center text-cream/50 transition-all duration-300 ${social.color} hover:border-current hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeInLeft>

          {/* RIGHT — Form */}
          <FadeInRight className="lg:col-span-8" delay={0.2}>
            <div className="bg-cream/5 border border-cream/10 rounded-3xl p-8 md:p-10">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, repeat: 3 }}
                    className="text-7xl mb-6"
                  >
                    🎉
                  </motion.div>
                  <h3 className="font-poppins font-black text-lime text-3xl mb-3">Message Sent!</h3>
                  <p className="font-poppins text-cream/60 mb-8">
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => setStatus('idle')}
                    className="bg-lime text-dark font-poppins font-semibold px-6 py-3 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-poppins text-cream/60 text-xs tracking-widest uppercase block mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        placeholder="John Doe"
                        required
                        className={inputClass('name')}
                        id="contact-name"
                      />
                    </div>
                    <div>
                      <label className="font-poppins text-cream/60 text-xs tracking-widest uppercase block mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        placeholder="john@example.com"
                        required
                        className={inputClass('email')}
                        id="contact-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-poppins text-cream/60 text-xs tracking-widest uppercase block mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused(null)}
                      placeholder="Project Inquiry / Collaboration"
                      required
                      className={inputClass('subject')}
                      id="contact-subject"
                    />
                  </div>

                  <div>
                    <label className="font-poppins text-cream/60 text-xs tracking-widest uppercase block mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className={`${inputClass('message')} resize-none`}
                      id="contact-message"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-lime text-dark font-poppins font-bold text-base py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-hotpink hover:text-white transition-all duration-300 disabled:opacity-60"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    id="contact-submit"
                  >
                    {status === 'sending' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Message ✦
                      </>
                    )}
                  </motion.button>

                  <p className="font-poppins text-cream/30 text-xs text-center">
                    I typically respond within 24 hours. No spam, ever. ✌️
                  </p>
                </form>
              )}
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  )
}
