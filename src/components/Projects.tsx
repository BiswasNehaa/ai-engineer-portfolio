import { motion } from "framer-motion";
import { projects, type Project } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 md:px-8 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="03" title="Selected Projects" />
        <div className="flex flex-col gap-8">
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
      className="rounded-2xl border border-line p-6 md:p-10 hover:border-accent/60 transition-colors"
    >
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-mono text-xs text-accent">{String(number).padStart(2, "0")}</span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">{project.tagline}</span>
          </div>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-ink mb-4">{project.title}</h3>
          <p className="text-ink-soft leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-3 mb-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring px-4 py-2 rounded-full border border-ink text-ink text-xs font-mono uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
              >
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="focus-ring px-4 py-2 rounded-full bg-accent text-white text-xs font-mono uppercase tracking-widest hover:bg-accent-deep transition-colors"
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
                    <span className="font-mono text-xs px-3 py-1.5 rounded-md bg-panel border border-line">{step}</span>
                    {i < project.pipeline!.length - 1 && <span className="text-muted">&rarr;</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">Architecture</p>
            <p className="text-sm text-ink-soft leading-relaxed">{project.architecture}</p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">Engineering Decisions</p>
            <ul className="space-y-1.5">
              {project.decisions.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">Key Features</p>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">Built With</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded border border-line text-ink-soft">
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
