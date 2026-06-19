import useScrollFade from "./hooks/useScrollFade"
import useTracker from "./hooks/useTracker"
import Navbar from "./components/Navbar"
import Chatbot from "./components/Chatbot"
import ParticleBackground from "./components/ParticleBackground"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"

export default function App() {
  useScrollFade()
  useTracker()

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Chatbot />
      </div>
    </div>
  )
}
