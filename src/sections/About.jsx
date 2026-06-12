import { PERSONAL, EXPERIENCE, EDUCATION } from "../data/portfolio"
import { MapPin, Calendar, Target, Briefcase, GraduationCap } from "lucide-react"

const STATS = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Built", value: "4" },
  { label: "Technologies", value: "20+" },
  { label: "Available", value: "Oct 26" },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-24">

        <div className="fade-section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-[#C9A84C] uppercase tracking-widest mb-4 font-semibold">About</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Building AI systems
              <br />
              <span className="gold-text">that actually work.</span>
            </h2>
            {PERSONAL.bio.map((para, i) => (
              <p key={i} className="text-[#888888] text-base leading-relaxed mb-4">{para}</p>
            ))}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-[#555555] text-sm">
                <MapPin size={14} className="text-[#C9A84C]" />
                {PERSONAL.location}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ label, value }) => (
              <div key={label} className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-colors">
                <p className="text-4xl font-black gold-text mb-2">{value}</p>
                <p className="text-[#555555] text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-section">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase size={18} className="text-[#C9A84C]" />
            <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-semibold">Experience</p>
          </div>
          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="bg-[#141414] border border-[#2a2a2a] hover:border-[#C9A84C]/30 rounded-2xl p-6 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                    <p className="text-[#C9A84C] text-sm font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#555555] text-sm">{exp.period}</p>
                    <p className="text-[#555555] text-xs">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#888888] text-sm leading-relaxed">
                      <span className="text-[#C9A84C] mt-1.5 flex-shrink-0">·</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-section">
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap size={18} className="text-[#C9A84C]" />
            <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-semibold">Education</p>
          </div>
          <div className="space-y-4">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="bg-[#141414] border border-[#2a2a2a] hover:border-[#C9A84C]/30 rounded-2xl p-6 transition-colors flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-bold">{edu.degree}</h3>
                  <p className="text-[#C9A84C] text-sm font-medium mt-1">{edu.school}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#555555] text-sm">{edu.period}</p>
                  <p className="text-[#555555] text-xs">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
