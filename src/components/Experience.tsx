import { motion } from "framer-motion";
import { experience, education, coursework } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-5 md:px-8 border-t border-accent/15">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="V" title="Experience & Education" />

        <div className="relative pl-8 border-l border-accent/25 mb-16">
          {experience.map((exp) => (
            <div key={exp.role} className="relative pb-2">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-paper" />
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">{exp.org}</p>
              <h3 className="font-display font-bold text-2xl mb-1 text-ink">{exp.role}</h3>
              <p className="text-sm text-muted mb-4">{exp.location}</p>
              <ul className="space-y-2">
                {exp.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-ink-soft max-w-2xl">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">Education</p>
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-lg border border-accent/20 p-5"
            >
              <p className="font-display font-medium text-base mb-2 text-ink">{ed.degree}</p>
              <p className="text-sm text-muted mb-3">{ed.school}</p>
              <p className="font-mono text-xs text-accent">{ed.detail}</p>
            </motion.div>
          ))}
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">Relevant Coursework</p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((c) => (
              <span key={c} className="font-mono text-xs px-3 py-1.5 rounded border border-accent/25 text-ink-soft">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
