import { PROJECTS, UI_TEXT } from "../data/portfolio"
import { useLang, t } from "../hooks/useLang.jsx"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  const { lang } = useLang()
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-section mb-16">
          <p className="text-xs text-[#C9A84C] uppercase tracking-widest mb-4 font-semibold">{t(UI_TEXT.projects.label, lang)}</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            {t(UI_TEXT.projects.heading1, lang)}<br /><span className="gold-text">{t(UI_TEXT.projects.heading2, lang)}</span>
          </h2>
        </div>
        <div className="fade-section grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map(project => (<ProjectCard key={project.id} project={project} lang={lang} />))}
        </div>
      </div>
    </section>
  )
}
