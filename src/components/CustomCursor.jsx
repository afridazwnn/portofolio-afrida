import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300 }
  const ringSpringConfig = { damping: 30, stiffness: 150 }

  const dotX = useSpring(mouseX, springConfig)
  const dotY = useSpring(mouseY, springConfig)
  const ringX = useSpring(mouseX, ringSpringConfig)
  const ringY = useSpring(mouseY, ringSpringConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'hover'
      ) {
        setIsHovering(true)
        if (dotRef.current) dotRef.current.classList.add('cursor-hover')
        if (ringRef.current) ringRef.current.classList.add('cursor-hover')
      } else {
        setIsHovering(false)
        if (dotRef.current) dotRef.current.classList.remove('cursor-hover')
        if (ringRef.current) ringRef.current.classList.remove('cursor-hover')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        ref={dotRef}
        id="cursor-dot"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        ref={ringRef}
        id="cursor-ring"
        style={{ x: ringX, y: ringY }}
      />
    </>
  )
}
