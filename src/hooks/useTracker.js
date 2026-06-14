import { useEffect } from "react"

export default function useTracker() {
  useEffect(() => {
    const track = async () => {
      try {
        await fetch("/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            page: window.location.pathname,
            language: navigator.language,
            screen: window.innerWidth + "x" + window.innerHeight,
          }),
        })
      } catch {}
    }
    track()
  }, [])
}
