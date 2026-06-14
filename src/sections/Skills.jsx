import { SKILLS, UI_TEXT } from "../data/portfolio"
import { useLang, t } from "../hooks/useLang.jsx"

export default function Skills() {
  const { lang } = useLang()
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-section mb-16">
          <p className="text-xs text-[#C9A84C] uppercase tracking-widest mb-4 font-semibold">{t(UI_TEXT.skills.label, lang)}</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            {t(UI_TEXT.skills.heading1, lang)}<br /><span className="gold-text">{t(UI_TEXT.skills.heading2, lang)}</span>
          </h2>
        </div>
        <div className="fade-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map(({ category, items }) => (
            <div key={t(category, lang)} className="bg-[#141414] border border-[#2a2a2a] hover:border-[#C9A84C]/30 rounded-2xl p-6 transition-all duration-300">
              <p className="text-xs text-[#C9A84C] uppercase tracking-widest mb-4 font-semibold">{t(category, lang)}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (<span key={skill} className="bg-white/[0.04] border border-white/8 text-[#888888] hover:text-white hover:border-[#C9A84C]/30 text-xs px-3 py-1.5 rounded-lg font-mono transition-colors cursor-default">{skill}</span>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
