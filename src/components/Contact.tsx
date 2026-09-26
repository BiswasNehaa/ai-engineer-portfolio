import { motion } from "framer-motion";
import { profile } from "../data/content";
import Ornament from "./Ornament";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-5 md:px-8 border-t border-accent/15 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(201,162,75,0.14), transparent 70%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Ornament className="w-3 h-3 text-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent">Chapter VI &mdash; Contact</span>
          <Ornament className="w-3 h-3 text-accent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-semibold italic text-4xl md:text-6xl text-ink mb-8 tracking-tight"
        >
          Let&rsquo;s build something intelligent.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-ink-soft text-lg max-w-xl mx-auto mb-4"
        >
          Open to AI Engineering opportunities, internships, and collaborations involving RAG systems, LLM
          applications, and intelligent software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className="w-16 h-px bg-accent/50" />
          <Ornament className="w-2 h-2 text-accent" />
          <span className="w-16 h-px bg-accent/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring px-6 py-3 rounded-full bg-accent text-paper font-mono text-sm uppercase tracking-widest hover:bg-accent-deep transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring px-6 py-3 rounded-full border border-accent/50 text-ink hover:border-accent hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring px-6 py-3 rounded-full border border-accent/50 text-ink hover:border-accent hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
