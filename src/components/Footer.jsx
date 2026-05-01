import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { StarDecor } from '../components/AnimUtils'

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/afridazwn?igsh=MW4zY2J1YmJhMXR0ZA==', color: 'hover:text-hotpink' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/afrida-rizwana-b604413a3/', color: 'hover:text-lime' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/afridazwnn', color: 'hover:text-cream' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark border-t border-cream/5 overflow-hidden">
      {/* Top marquee strip */}
      <div className="bg-lime overflow-hidden py-3">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-6">
              <span className="font-poppins font-black text-dark text-sm tracking-widest uppercase">
                Available for Work
              </span>
              <StarDecor size={14} color="#1A1A1A" />
              <span className="font-poppins font-black text-dark text-sm tracking-widest uppercase">
                Open to Collaborate
              </span>
              <StarDecor size={14} color="#1A1A1A" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="font-poppins font-black text-4xl mb-4">
              <span className="text-cream">AF</span>
              <span className="text-lime">.</span>
            </div>
            <p className="font-poppins text-cream/50 text-sm leading-relaxed max-w-xs">
              Designing beautiful digital experiences with ❤️ from Bogor, Indonesia.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-cream/5 border border-cream/10 flex items-center justify-center text-cream/40 hover:text-lime hover:border-lime/30 hover:bg-lime/10 transition-all duration-200"
                  whileHover={{ scale: 1.15, y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-poppins font-bold text-cream text-lg mb-6">Navigation</h4>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-poppins text-cream/50 text-sm hover:text-lime transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-poppins font-bold text-cream text-lg mb-6">Let's Work Together</h4>
            <p className="font-poppins text-cream/50 text-sm mb-6">
              Have a project in mind? Let's build something amazing.
            </p>
            <motion.a
              href="mailto:afridarizwana@gmail.com"
              className="inline-flex items-center gap-2 bg-lime text-dark font-poppins font-semibold text-sm px-5 py-3 rounded-full hover:bg-hotpink hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              afridarizwana@gmail.com ↗
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-cream/30 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Afrida Rizwana. Made with
            <Heart size={14} className="text-hotpink fill-hotpink" />
            in Bogor
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center text-cream/40 hover:border-lime hover:text-lime hover:bg-lime/10 transition-all duration-300 font-bold text-lg"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="Scroll to top"
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
