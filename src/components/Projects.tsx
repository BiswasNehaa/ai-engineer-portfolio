import { motion } from "framer-motion";
import { projects, type Project } from "../data/content";
import SectionHeading from "./SectionHeading";
import Ornament from "./Ornament";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 md:px-8 border-t border-accent/15">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="III" title="Selected Projects" />
        <div className="flex flex-col gap-10">
          {projects.map((p, i) => (
            <ProjectCase key={p.id} project={p} number={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCase({ project, number }: { project: Project; number: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl border border-accent/20 p-6 md:p-12 hover:border-accent/60 transition-colors overflow-hidden"
    >
      <span
        className="absolute -top-6 -right-2 md:top-[-1.5rem] md:right-4 font-display font-bold text-accent/10 leading-none pointer-events-none select-none"
        style={{ fontSize: "9rem" }}
        aria-hidden="true"
      >
        {String(number).padStart(2, "0")}
      </span>

      <div className="relative grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 mb-3">
            <Ornament className="w-2.5 h-2.5 text-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{project.tagline}</span>
          </div>
          <h3 className="font-display font-semibold text-4xl md:text-5xl text-ink mb-5">{project.title}</h3>
          <p className="text-ink-soft leading-relaxed mb-6 max-w-lg">{project.description}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring px-4 py-2 rounded-full border border-accent/50 text-ink text-xs font-mono uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
              >
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="focus-ring px-4 py-2 rounded-full bg-accent text-paper text-xs font-mono uppercase tracking-widest hover:bg-accent-deep transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>

          {project.pipeline && (
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">Pipeline</p>
              <div className="flex flex-wrap items-center gap-2">
                {project.pipeline.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="font-mono text-xs px-3 py-1.5 rounded-md bg-panel border border-accent/25 text-ink-soft">
                      {step}
                    </span>
                    {i < project.pipeline!.length - 1 && <span className="text-accent/60">&rarr;</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-2 flex flex-col gap-7">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-3">Architecture</p>
            <p className="text-sm text-ink-soft leading-relaxed">{project.architecture}</p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-3">Engineering Decisions</p>
            <ul className="space-y-2">
              {project.decisions.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <Ornament className="mt-0.5 w-2.5 h-2.5 text-accent/70 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-3">Key Features</p>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <Ornament className="mt-0.5 w-2.5 h-2.5 text-accent/70 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-3">Built With</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2.5 py-1 rounded border border-accent/30 text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
