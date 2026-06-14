import { useEffect, useState } from "react"
import { PERSONAL, UI_TEXT } from "../data/portfolio"
import { useLang, t } from "../hooks/useLang.jsx"
import { ArrowDown, GitBranch, Link, Mail } from "lucide-react"

const ROLES = ["AI/ML Engineer", "RAG Pipeline Builder", "Full Stack Developer", "AWS Deployment Engineer"]

export default function Hero() {
  const { lang } = useLang()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex + 1)); setCharIndex(charIndex + 1) }, 80)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex - 1)); setCharIndex(charIndex - 1) }, 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % ROLES.length)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 leading-none">
          <span className="text-white">Srikar</span><br /><span className="gold-text">Kodi</span>
        </h1>
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-xl md:text-2xl text-[#888888] font-light">
            {displayed}<span className="inline-block w-0.5 h-6 bg-[#C9A84C] ml-0.5 animate-pulse" />
          </span>
        </div>
        <p className="text-[#555555] text-lg max-w-xl mx-auto mb-12 leading-relaxed">{t(PERSONAL.tagline, lang)}</p>
        <div className="flex items-center justify-center gap-4 mb-16">
          <a href="#projects" className="bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-bold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm tracking-wide hover:scale-105">{t(UI_TEXT.hero.cta_primary, lang)}</a>
          <a href="#contact" className="border border-[#2a2a2a] hover:border-[#C9A84C]/40 text-[#888888] hover:text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-200 text-sm">{t(UI_TEXT.hero.cta_secondary, lang)}</a>
        </div>
        <div className="flex items-center justify-center gap-6">
          <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="text-[#555555] hover:text-[#C9A84C] transition-colors"><GitBranch size={20} /></a>
          <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="text-[#555555] hover:text-[#C9A84C] transition-colors"><Link size={20} /></a>
          <a href={"mailto:" + PERSONAL.email} className="text-[#555555] hover:text-[#C9A84C] transition-colors"><Mail size={20} /></a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555555]">
        <span className="text-xs tracking-widest uppercase">{t(UI_TEXT.hero.scroll, lang)}</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  )
}
