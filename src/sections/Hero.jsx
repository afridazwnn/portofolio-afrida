import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { StarDecor, SparkleDecor } from '../components/AnimUtils'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Hero() {
  const scrollToNext = () => {
    const about = document.getElementById('about')
    if (about) about.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-dark overflow-hidden flex items-center"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large lime blob top right */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-lime blob"
        />
        {/* Hot pink blob bottom left */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.12 }}
          transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-hotpink blob-2"
        />
        {/* Dot pattern area */}
        <div className="absolute top-0 right-0 w-96 h-96 dot-pattern opacity-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 dot-pattern opacity-10" />

        {/* Floating decorative stars */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 right-[15%]"
        >
          <StarDecor size={40} color="#C8F060" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/3 left-[10%]"
        >
          <StarDecor size={28} color="#F0097A" />
        </motion.div>
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-[8%]"
        >
          <SparkleDecor size={24} color="#E84DC0" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-2/3 right-[10%]"
        >
          <SparkleDecor size={18} color="#C8F060" />
        </motion.div>
        {/* Small dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-lime/40"
            style={{
              top: `${15 + i * 10}%`,
              left: `${5 + i * 11}%`,
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left text column — wider */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-lime/10 border border-lime/30 text-lime px-4 py-2 rounded-full text-sm font-poppins">
                <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Name / Headline */}
            <motion.div variants={itemVariants} className="mb-2">
              <p className="font-poppins text-cream/60 text-lg tracking-widest uppercase mb-2">
                Hello, I'm
              </p>
              <h1 className="font-poppins font-black leading-none">
                <span className="text-cream block text-7xl md:text-8xl xl:text-9xl">
                  Afrida
                </span>
                <span
                  className="block text-5xl md:text-6xl xl:text-7xl mt-1"
                  style={{ WebkitTextStroke: '2px #C8F060', color: 'transparent' }}
                >
                  Rizwana
                </span>
              </h1>
            </motion.div>

            {/* Role tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 my-6">
              {['UI/UX Designer', 'Frontend Dev', 'Social Media Manager'].map((r) => (
                <span
                  key={r}
                  className="px-4 py-1.5 rounded-full font-poppins text-sm font-medium"
                  style={{ background: 'rgba(245,240,235,0.08)', border: '1px solid rgba(245,240,235,0.15)', color: '#F5F0EB' }}
                >
                  {r}
                </span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="font-poppins text-cream/60 text-lg leading-relaxed max-w-lg mb-10"
            >
              I craft digital experiences that are bold, beautiful, and actually work.
              Obsessed with pixel-perfect design and seamless interactions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group relative overflow-hidden bg-lime text-dark font-poppins font-bold text-base px-8 py-4 rounded-full inline-flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="absolute inset-0 bg-hotpink"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">View My Work</span>
                <Sparkles size={18} className="relative z-10 group-hover:text-white transition-colors duration-300" />
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border-2 border-cream/30 text-cream font-poppins font-bold text-base px-8 py-4 rounded-full inline-flex items-center gap-3 hover:border-lime hover:text-lime transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Visual element */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 xl:col-span-5 flex justify-center items-center"
          >
            <div className="relative">
              {/* Main blob image container */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 h-72 md:w-96 md:h-96"
              >
                <div className="absolute inset-0 bg-lime blob" />
                <div className="absolute inset-3 bg-pinkmed blob-2 flex items-center justify-center overflow-hidden">
                  {/* Avatar placeholder with initials */}
                  <img src="/afrida-avatar.png" alt="Afrida" className="w-full h-full object-cover scale-[1.4] -translate-y-8" />
                </div>
              </motion.div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-6 -left-8 bg-dark border border-cream/10 rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="font-poppins font-black text-lime text-2xl">3+</p>
                <p className="font-poppins text-cream/60 text-xs mt-0.5">Years Exp.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 -right-6 bg-hotpink rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="font-poppins font-black text-white text-2xl">20+</p>
                <p className="font-poppins text-white/80 text-xs mt-0.5">Projects Done</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute top-1/2 -right-14 bg-cream rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="font-poppins font-black text-dark text-2xl">15+</p>
                <p className="font-poppins text-dark/60 text-xs mt-0.5">Happy Clients</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40 hover:text-lime transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="font-poppins text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
