import { motion } from "framer-motion";
import { about, profile } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 px-5 md:px-8 border-t border-accent/15">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="I" title="About" />
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <p className="font-display text-2xl md:text-4xl leading-snug text-ink">
              A final-year CSE student who specializes in AI engineering — production RAG systems and LLM
              application development.
            </p>
            <p className="text-muted leading-relaxed mt-6 max-w-xl">{profile.intro}</p>
          </div>
          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">What she works with</p>
            <ul className="space-y-2.5">
              {about.points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex items-start gap-3 text-ink-soft"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {p}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
