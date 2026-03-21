import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Reset visibility on remount so animations replay on navigation
    setIsVisible(false)

    const el = ref.current
    if (!el) return

    // Small delay so scroll-to-top finishes before observer checks position
    const init = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (options.once !== false) observer.unobserve(el)
          }
        },
        {
          threshold: options.threshold ?? 0.1,
          rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
        }
      )
      observer.observe(el)

      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(init)
  }, [])

  return [ref, isVisible]
}
