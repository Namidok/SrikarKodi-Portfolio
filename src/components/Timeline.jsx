import { useEffect, useRef, useState } from "react"
import { useLang, t } from "../hooks/useLang.jsx"

const EVENTS = [
  {
    year: "2016",
    title: { en: "Bachelor's Degree", de: "Bachelor-Abschluss" },
    subtitle: "MVGR College of Engineering",
    desc: { en: "Electronics & Communication Engineering. Built the foundation in software and systems.", de: "Elektronik & Kommunikationstechnik. Aufbau der Grundlage in Software und Systemen." },
    tag: { en: "Education", de: "Ausbildung" },
    color: "#6366f1",
  },
  {
    year: "2022",
    title: { en: "Trainee Software Engineer", de: "Trainee Software Engineer" },
    subtitle: "ValueLabs · Hyderabad",
    desc: { en: "First professional role. Resolved 60+ bugs, improved test coverage by 30%, worked across 3 software modules.", de: "Erste professionelle Rolle. 60+ Bugs behoben, Testabdeckung um 30% erhöht." },
    tag: { en: "Experience", de: "Erfahrung" },
    color: "#10b981",
  },
  {
    year: "2023",
    title: { en: "Application Developer", de: "Application Developer" },
    subtitle: "Vavili Technologies · Hyderabad",
    desc: { en: "Built NLP chatbot, ETL pipelines, 12 microservices. Reduced page load by 40%, increased engagement by 35%.", de: "NLP-Chatbot, ETL-Pipelines, 12 Microservices. Ladezeit um 40% reduziert." },
    tag: { en: "Experience", de: "Erfahrung" },
    color: "#10b981",
  },
  {
    year: "2025",
    title: { en: "MSc Computer Science", de: "MSc Informatik" },
    subtitle: "SRH University · Berlin 🇩��",
    desc: { en: "Specialisation in Big Data & Artificial Intelligence. Relocated to Germany. Started building AI systems.", de: "Schwerpunkt Big Data & KI. Umzug nach Deutschland. Beginn mit KI-Systemen." },
    tag: { en: "Education", de: "Ausbildung" },
    color: "#6366f1",
  },
  {
    year: "2026",
    title: { en: "AI/ML Engineer", de: "KI/ML-Ingenieur" },
    subtitle: { en: "Actively seeking · Berlin & Munich", de: "Aktiv suchend · Berlin & München" },
    desc: { en: "Built 3 production AI apps in 8 weeks. Deployed on AWS. Applying to 50 companies across Germany.", de: "3 KI-Apps in 8 Wochen gebaut. Auf AWS deployed. 50 Bewerbungen in Deutschland." },
    tag: { en: "Now", de: "Jetzt" },
    color: "#C9A84C",
    current: true,
  },
]

function TimelineCard({ event, index, lang }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-4 md:gap-8 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Card */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className="bg-[#141414] border border-[#2a2a2a] hover:border-[#C9A84C]/30 rounded-2xl p-5 transition-all duration-300 hover:bg-[#1a1a1a] text-left">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span
              className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
              style={{ backgroundColor: event.color + "20", color: event.color }}
            >
              {t(event.tag, lang)}
            </span>
            {event.current && (
              <span className="flex items-center gap-1 text-xs text-[#C9A84C]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                {lang === "en" ? "Active" : "Aktiv"}
              </span>
            )}
          </div>
          <h3 className="text-white font-bold text-base mb-0.5">{t(event.title, lang)}</h3>
          <p className="text-[#C9A84C] text-xs font-medium mb-2">
            {typeof event.subtitle === "object" ? t(event.subtitle, lang) : event.subtitle}
          </p>
          <p className="text-[#555555] text-sm leading-relaxed">{t(event.desc, lang)}</p>
        </div>
      </div>

      {/* Center dot */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div
          className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-xs transition-all duration-300"
          style={{
            borderColor: event.color,
            backgroundColor: visible ? event.color + "20" : "transparent",
            color: event.color,
          }}
        >
          {event.year.slice(2)}
        </div>
      </div>

      {/* Empty space for alternating layout on desktop */}
      <div className="flex-1 hidden md:block" />
    </div>
  )
}

export default function Timeline({ lang }) {
  const lineRef = useRef(null)
  const containerRef = useRef(null)
  const [lineHeight, setLineHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !lineRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const scrolled = Math.max(0, -rect.top + window.innerHeight * 0.5)
      const total = rect.height
      setLineHeight(Math.min(100, (scrolled / total) * 100))
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 md:left-1/2 top-0 bottom-0 w-px bg-[#2a2a2a] -translate-x-1/2 hidden md:block" />
      <div
        ref={lineRef}
        className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/20 -translate-x-1/2 transition-all duration-100 hidden md:block"
        style={{ height: `${lineHeight}%` }}
      />

      <div className="space-y-8 md:space-y-12">
        {EVENTS.map((event, i) => (
          <TimelineCard key={i} event={event} index={i} lang={lang} />
        ))}
      </div>
    </div>
  )
}
