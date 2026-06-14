import { useState, useEffect } from "react"
import { PERSONAL, UI_TEXT } from "../data/portfolio"
import { useLang, t } from "../hooks/useLang.jsx"

export default function Navbar() {
  const { lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navClass = scrolled
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#2a2a2a]"
    : "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"

  return (
    <nav className={navClass}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-lg tracking-tight">
          <span className="gold-text">SK</span>
          <span className="text-white/40 mx-1">·</span>
          <span className="text-white/80 text-sm font-normal">Portfolio</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-[#888888] hover:text-white text-sm transition-colors duration-200 tracking-wide">{t(UI_TEXT.nav.about, lang)}</a>
          <a href="#projects" className="text-[#888888] hover:text-white text-sm transition-colors duration-200 tracking-wide">{t(UI_TEXT.nav.projects, lang)}</a>
          <a href="#skills" className="text-[#888888] hover:text-white text-sm transition-colors duration-200 tracking-wide">{t(UI_TEXT.nav.skills, lang)}</a>
          <a href="#contact" className="text-[#888888] hover:text-white text-sm transition-colors duration-200 tracking-wide">{t(UI_TEXT.nav.contact, lang)}</a>
          <button onClick={toggle} className="border border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/5 text-sm px-4 py-1.5 rounded-lg transition-all duration-200 tracking-wide font-semibold">
            {lang === "en" ? "DE" : "EN"}
          </button>
        </div>
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggle} className="text-[#C9A84C] text-sm font-semibold">{lang === "en" ? "DE" : "EN"}</button>
          <button onClick={() => setOpen(!open)} className="text-[#888888] hover:text-white transition-colors">
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#141414] border-t border-[#2a2a2a] px-6 py-4 space-y-4">
          <a href="#about" onClick={() => setOpen(false)} className="block text-[#888888] hover:text-white text-sm transition-colors">{t(UI_TEXT.nav.about, lang)}</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block text-[#888888] hover:text-white text-sm transition-colors">{t(UI_TEXT.nav.projects, lang)}</a>
          <a href="#skills" onClick={() => setOpen(false)} className="block text-[#888888] hover:text-white text-sm transition-colors">{t(UI_TEXT.nav.skills, lang)}</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-[#888888] hover:text-white text-sm transition-colors">{t(UI_TEXT.nav.contact, lang)}</a>
        </div>
      )}
    </nav>
  )
}
