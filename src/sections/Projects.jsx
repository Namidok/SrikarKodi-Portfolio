import { PROJECTS } from "../data/portfolio"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="fade-section mb-16">
          <p className="text-xs text-[#C9A84C] uppercase tracking-widest mb-4 font-semibold">Projects</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Built for real problems.
            <br />
            <span className="gold-text">Deployed on real servers.</span>
          </h2>
        </div>

        <div className="fade-section grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}