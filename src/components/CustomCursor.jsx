import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const followerPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = `${e.clientX - 6}px`
      cursor.style.top = `${e.clientY - 6}px`
    }

    let raf
    const animateFollower = () => {
      followerPosRef.current.x += (posRef.current.x - followerPosRef.current.x) * 0.12
      followerPosRef.current.y += (posRef.current.y - followerPosRef.current.y) * 0.12
      follower.style.left = `${followerPosRef.current.x - 16}px`
      follower.style.top = `${followerPosRef.current.y - 16}px`
      raf = requestAnimationFrame(animateFollower)
    }
    raf = requestAnimationFrame(animateFollower)

    const onEnter = () => {
      cursor.style.transform = 'scale(2.5)'
      follower.style.transform = 'scale(1.5)'
      follower.style.borderColor = 'rgba(139,92,246,0.8)'
    }
    const onLeave = () => {
      cursor.style.transform = 'scale(1)'
      follower.style.transform = 'scale(1)'
      follower.style.borderColor = 'rgba(99,102,241,0.5)'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={followerRef} className="custom-cursor-follower hidden md:block" />
    </>
  )
}
