import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function IntroPopup() {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({ name: "", role: "", company: "", email: "" })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem("intro_popup_dismissed")
    if (dismissed) return

    const timer = setTimeout(() => setShow(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setShow(false)
    localStorage.setItem("intro_popup_dismissed", "true")
  }

  const handleSubmit = async () => {
    if (!form.name.trim()) return
    setSubmitting(true)
    try {
      await fetch("/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
      localStorage.setItem("intro_popup_dismissed", "true")
      setTimeout(() => setShow(false), 2000)
    } catch {
      setSubmitted(true)
      localStorage.setItem("intro_popup_dismissed", "true")
      setTimeout(() => setShow(false), 2000)
    } finally {
      setSubmitting(false)
    }
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center px-4">
      <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl w-full max-w-sm p-6 relative shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#555555] hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <p className="text-2xl mb-2">👋</p>
            <p className="text-white font-semibold">Thanks for saying hi!</p>
          </div>
        ) : (
          <>
            <p className="text-2xl mb-2">👋</p>
            <h3 className="text-white font-bold text-lg mb-1">Hey there!</h3>
            <p className="text-[#888888] text-sm mb-5">Quick intro before you explore?</p>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
              />
              <input
                type="text"
                placeholder="Role (e.g. Recruiter, Developer)"
                value={form.role}
                onChange={e => setForm(p => ({ ...p, role: e.target.value }))}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
              />
              <input
                type="text"
                placeholder="Company (optional)"
                value={form.company}
                onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
              />
            </div>

            <div className="flex gap-2 mt-5">
              <button
                onClick={handleClose}
                className="flex-1 border border-[#2a2a2a] text-[#888888] hover:text-white py-2.5 rounded-lg text-sm transition-colors"
              >
                Skip
              </button>
              <button
                onClick={handleSubmit}
                disabled={!form.name.trim() || submitting}
                className="flex-1 bg-[#C9A84C] hover:bg-[#E8C96A] disabled:opacity-40 disabled:cursor-not-allowed text-black font-semibold py-2.5 rounded-lg text-sm transition-colors"
              >
                {submitting ? "..." : "Let's go →"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
