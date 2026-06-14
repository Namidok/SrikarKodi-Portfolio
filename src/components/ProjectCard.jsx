import { ExternalLink, GitBranch, Clock } from "lucide-react"
import { t } from "../hooks/useLang.jsx"

const STATUS_STYLES = {
  live: "bg-green-500/10 text-green-400 border border-green-500/20",
  building: "bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20",
  upcoming: "bg-white/5 text-[#555555] border border-white/10",
}

const STATUS_LABELS = {
  live: { en: "● Live", de: "● Live" },
  building: { en: "⚙ Building", de: "⚙ In Entwicklung" },
  upcoming: { en: "○ Upcoming", de: "○ Geplant" },
}

export default function ProjectCard({ project, lang }) {
  const { name, tagline, description, stack, github, live, status, highlight } = project
  return (
    <div className="group bg-[#141414] border border-[#2a2a2a] hover:border-[#C9A84C]/30 rounded-2xl p-6 transition-all duration-300 hover:bg-[#1a1a1a] flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-white font-bold text-lg">{name}</h3>
            <span className={"text-xs px-2 py-0.5 rounded-full font-medium " + STATUS_STYLES[status]}>{t(STATUS_LABELS[status], lang)}</span>
          </div>
          <p className="text-[#C9A84C] text-sm font-medium">{t(tagline, lang)}</p>
        </div>
      </div>
      <p className="text-[#555555] text-sm leading-relaxed mb-5 flex-1">{t(description, lang)}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {stack.map(s => (<span key={s} className="bg-white/[0.04] border border-white/8 text-[#888888] text-xs px-2.5 py-1 rounded-lg font-mono">{s}</span>))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-[#2a2a2a]">
        <div className="flex items-center gap-2 text-[#555555] text-xs"><Clock size={12} />{t(highlight, lang)}</div>
        <div className="flex items-center gap-3">
          {github !== "#" && (<a href={github} target="_blank" rel="noreferrer" className="text-[#555555] hover:text-[#C9A84C] transition-colors"><GitBranch size={16} /></a>)}
          {live !== "#" && (<a href={live} target="_blank" rel="noreferrer" className="text-[#555555] hover:text-[#C9A84C] transition-colors"><ExternalLink size={16} /></a>)}
        </div>
      </div>
    </div>
  )
}
