import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot } from "lucide-react"

const SUGGESTED_QUESTIONS = [
  "What is Srikar's experience with NLP?",
  "What projects has he built?",
  "Is he available for internships?",
  "What cloud technologies does he know?",
]

export default function Chatbot() {
  const [open,     setOpen]     = useState(false)
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I am Srikar's AI assistant. Ask me anything about his skills, projects, or experience." }
  ])
  const [input,   setInput]   = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const send = async (text) => {
    const userText = text || input.trim()
    if (!userText || loading) return
    const userMsg = { role: "user", content: userText }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {
      const response = await fetch("http://54.205.12.26/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content }))
        }),
      })
      const data = await response.json()
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Something went wrong. Please try again or email kodisrikar@gmail.com" }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#C9A84C] hover:bg-[#E8C96A] rounded-full flex items-center justify-center shadow-lg shadow-[#C9A84C]/25 transition-all duration-200 hover:scale-110"
      >
        {open ? <X size={22} className="text-black" /> : <MessageCircle size={22} className="text-black" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-[#141414] border border-[#2a2a2a] rounded-2xl shadow-2xl flex flex-col overflow-hidden" style={{ height: "520px" }}>

          <div className="flex items-center gap-3 px-4 py-4 border-b border-[#2a2a2a] bg-[#0D0D0D]">
            <div className="w-8 h-8 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full flex items-center justify-center">
              <Bot size={16} className="text-[#C9A84C]" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Srikar's Assistant</p>
              <p className="text-[#555555] text-xs">Powered by Groq + Llama 3</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[#555555] text-xs">Online</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={"flex " + (msg.role === "user" ? "justify-end" : "justify-start")}>
                <div className={"max-w-[85%] px-3 py-2.5 rounded-xl text-sm leading-relaxed " + (
                  msg.role === "user"
                    ? "bg-[#C9A84C] text-black font-medium"
                    : "bg-[#1a1a1a] border border-[#2a2a2a] text-[#aaaaaa]"
                )}>
                  {msg.content}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="space-y-2 mt-2">
                <p className="text-[#555555] text-xs text-center">Suggested questions</p>
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => send(q)}
                    className="w-full text-left bg-white/[0.03] border border-[#2a2a2a] hover:border-[#C9A84C]/30 text-[#888888] hover:text-white text-xs px-3 py-2 rounded-lg transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] px-3 py-2.5 rounded-xl">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-[#555555] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-[#555555] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-[#555555] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="px-4 py-3 border-t border-[#2a2a2a] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about skills, projects..."
              className="flex-1 bg-white/[0.03] border border-[#2a2a2a] focus:border-[#C9A84C]/40 rounded-xl px-3 py-2.5 text-sm text-white placeholder-[#555555] outline-none transition-colors"
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              className="w-10 h-10 bg-[#C9A84C] hover:bg-[#E8C96A] disabled:opacity-30 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
            >
              <Send size={14} className="text-black" />
            </button>
          </div>

        </div>
      )}
    </>
  )
}
