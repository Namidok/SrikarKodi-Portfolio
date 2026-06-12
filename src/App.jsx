import useScrollFade from "./hooks/useScrollFade"
import Navbar from "./components/Navbar"
import Chatbot from "./components/Chatbot"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"

export default function App() {
  useScrollFade()

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Chatbot />
    </div>
  )
}