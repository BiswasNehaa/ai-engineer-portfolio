import { motion } from "framer-motion";
import { profile } from "../data/content";
import RotatingBadge from "./RotatingBadge";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-5 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between mb-6">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-muted mt-2"
          >
            {profile.role} — Portfolio
          </motion.p>
          <RotatingBadge text="Open to AI Engineering Roles" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold leading-[0.85] text-[18vw] md:text-[11vw] lg:text-[9.5rem] tracking-tight text-ink"
        >
          NEHA
          <br />
          BISWAS
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 mt-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-display text-2xl md:text-3xl text-ink-soft"
          >
            {profile.role}
            <span className="text-accent">.</span> Building production RAG &amp; LLM systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:text-right"
          >
            <p className="text-muted leading-relaxed max-w-sm md:ml-auto">{profile.intro}</p>
            <div className="flex md:justify-end gap-3 mt-6">
              <a
                href="#projects"
                className="focus-ring px-5 py-2.5 rounded-full bg-ink text-paper font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors"
              >
                View Projects
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring px-5 py-2.5 rounded-full border border-ink text-ink font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
