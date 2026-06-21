import { useState, useEffect } from "react"
import { useLang } from "../hooks/useLang.jsx"

const COMMANDS = {
  en: [
    { cmd: "who am i?", delay: 500, output: ["Srikar Kodi", "MSc Computer Science — AI & Big Data", "Berlin, Germany"] },
    { cmd: "current_goal", delay: 2000, output: ["ML/AI Engineer Internship", "Starting October 2026", "Location: Berlin or Munich"] },
    { cmd: "ls projects/", delay: 4000, output: ["SkillSync/", "CoverCraft/", "GermanBot/", "InterviewCoach/"] },
    { cmd: "cat stack.txt", delay: 6000, output: ["Python · FastAPI · React · LangChain", "Docker · AWS · PostgreSQL · ChromaDB"] },
  ],
  de: [
    { cmd: "who am i?", delay: 500, output: ["Srikar Kodi", "MSc Informatik — KI & Big Data", "Berlin, Deutschland"] },
    { cmd: "aktuelles_ziel", delay: 2000, output: ["ML/KI-Ingenieur Praktikum", "Ab Oktober 2026", "Standort: Berlin oder München"] },
    { cmd: "ls projekte/", delay: 4000, output: ["SkillSync/", "CoverCraft/", "GermanBot/", "InterviewCoach/"] },
    { cmd: "cat stack.txt", delay: 6000, output: ["Python · FastAPI · React · LangChain", "Docker · AWS · PostgreSQL · ChromaDB"] },
  ]
}

export default function Terminal() {
  const { lang } = useLang()
  const [lines, setLines] = useState([])
  const [currentCmd, setCurrentCmd] = useState("")
  const [cmdIndex, setCmdIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [phase, setPhase] = useState("typing") // typing | output | waiting

  const commands = COMMANDS[lang] || COMMANDS.en

  useEffect(() => {
    setLines([])
    setCmdIndex(0)
    setCharIndex(0)
    setCurrentCmd("")
    setPhase("typing")
  }, [lang])

  useEffect(() => {
    if (cmdIndex >= commands.length) return

    const cmd = commands[cmdIndex]

    if (phase === "typing") {
      if (charIndex < cmd.cmd.length) {
        const t = setTimeout(() => {
          setCurrentCmd(cmd.cmd.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        }, 120)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase("output"), 300)
        return () => clearTimeout(t)
      }
    }

    if (phase === "output") {
      setLines(prev => [
        ...prev,
        { type: "cmd", text: `> ${cmd.cmd}` },
        ...cmd.output.map(o => ({ type: "output", text: o })),
        { type: "spacer" }
      ])
      setCurrentCmd("")
      setCharIndex(0)
      setPhase("waiting")

      const t = setTimeout(() => {
        setCmdIndex(i => i + 1)
        setPhase("typing")
      }, 2000)
      return () => clearTimeout(t)
    }
  }, [phase, charIndex, cmdIndex, commands])

  return (
    <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl overflow-hidden w-full max-w-md font-mono text-sm shadow-2xl">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#141414] border-b border-[#2a2a2a]">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-[#555555] text-xs">srikar@portfolio ~ %</span>
      </div>

      {/* Terminal body */}
      <div className="p-4 space-y-1 min-h-[180px] text-left">
        {lines.map((line, i) => (
          line.type === "spacer"
            ? <div key={i} className="h-2" />
            : <p key={i} className={line.type === "cmd" ? "text-[#C9A84C]" : "text-[#888888]"}>
                {line.text}
              </p>
        ))}

        {/* Current typing line */}
        {cmdIndex < commands.length && (
          <p className="text-[#C9A84C]">
            {">"} {currentCmd}
            <span className="inline-block w-2 h-4 bg-[#C9A84C] ml-0.5 animate-pulse align-middle" />
          </p>
        )}

        {cmdIndex >= commands.length && (
          <p className="text-[#C9A84C]">
            {">"} <span className="inline-block w-2 h-4 bg-[#C9A84C] ml-0.5 animate-pulse align-middle" />
          </p>
        )}
      </div>
    </div>
  )
}
