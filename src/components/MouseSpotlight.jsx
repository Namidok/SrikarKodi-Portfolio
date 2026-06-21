import { useEffect, useRef } from "react"

export default function MouseSpotlight() {
  const spotlightRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!spotlightRef.current) return
      spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(201,168,76,0.08), transparent 40%)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 z-0 pointer-events-none transition-none"
    />
  )
}
