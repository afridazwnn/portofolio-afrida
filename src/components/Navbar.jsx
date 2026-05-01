import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark/90 backdrop-blur-md border-b border-cream/10 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="font-poppins font-bold text-xl"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-cream">AF</span>
            <span className="text-lime">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link font-poppins text-sm font-medium transition-colors duration-200 ${
                  active === link.href.replace('#', '')
                    ? 'text-lime active'
                    : 'text-cream/70 hover:text-cream'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:flex items-center gap-2 bg-lime text-dark font-poppins font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-hotpink hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Hire Me ✦
          </motion.a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl flex flex-col p-8"
          >
            {/* Header in menu */}
            <div className="flex justify-between items-center mb-16">
              <div className="font-poppins font-bold text-xl">
                <span className="text-cream">AF</span>
                <span className="text-lime">.</span>
              </div>
              <button 
                onClick={() => setMobileOpen(false)}
                className="w-12 h-12 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center text-cream"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-6">
              <p className="font-poppins text-cream/30 text-xs tracking-[0.2em] uppercase mb-2">Navigation</p>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="group flex items-end gap-4"
                >
                  <span className="font-poppins text-lime/40 text-sm mb-2">0{i + 1}</span>
                  <span className="font-poppins font-black text-5xl text-cream group-hover:text-lime transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-auto pt-12 border-t border-cream/5">
              <div className="flex flex-col gap-8">
                <div>
                  <p className="font-poppins text-cream/30 text-xs tracking-[0.2em] uppercase mb-4">Get in Touch</p>
                  <a href="mailto:afridarizwana@gmail.com" className="font-poppins text-cream text-lg hover:text-lime transition-colors">
                    afridarizwana@gmail.com
                  </a>
                </div>
                
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-lime text-dark font-poppins font-bold py-4 rounded-2xl flex items-center justify-center text-lg shadow-lg shadow-lime/10"
                >
                  Start a Project ✦
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
