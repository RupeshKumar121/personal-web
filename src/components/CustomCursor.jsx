import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const mousePos = useRef({ x: -100, y: -100 })
  const followerPos = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    // Use transform instead of left/top — GPU-accelerated, zero layout cost
    cursor.style.willChange = 'transform'
    follower.style.willChange = 'transform'

    const onMove = (e) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
      // Dot follows instantly — no lag at all
      cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
    }

    const animate = () => {
      // Higher lerp = snappier follower ring (0.18 is fast but still smooth)
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.18
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.18
      follower.style.transform = `translate(${followerPos.current.x - 16}px, ${followerPos.current.y - 16}px)`
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const onEnter = () => {
      cursor.style.transform += ' scale(2.5)'
      follower.style.borderColor = 'rgba(139,92,246,0.8)'
      follower.style.scale = '1.5'
    }
    const onLeave = () => {
      follower.style.borderColor = 'rgba(99,102,241,0.5)'
      follower.style.scale = '1'
    }

    // Use event delegation instead of attaching to every element
    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, [role="button"]')) onEnter()
    })
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, [role="button"]')) onLeave()
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={cursorRef} className="custom-cursor hidden md:block" style={{ left: 0, top: 0 }} />
  )
}
