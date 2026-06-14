import { createContext, useContext, useState } from "react"

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en")
  const toggle = () => setLang(l => l === "en" ? "de" : "en")
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

export function t(obj, lang) {
  if (!obj) return ""
  if (typeof obj === "string") return obj
  return obj[lang] || obj["en"] || ""
}
