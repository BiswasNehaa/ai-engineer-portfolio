import { motion } from "framer-motion";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-8 border-t border-line">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-widest text-accent mb-4"
        >
          06 // Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-bold text-4xl md:text-6xl text-ink mb-6 tracking-tight"
        >
          Let&rsquo;s build something intelligent.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted text-lg max-w-xl mx-auto mb-12"
        >
          Open to AI Engineering opportunities, internships, and collaborations involving RAG systems, LLM
          applications, and intelligent software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring px-6 py-3 rounded-full bg-ink text-paper font-mono text-sm uppercase tracking-widest hover:bg-accent transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring px-6 py-3 rounded-full border border-ink text-ink hover:border-accent hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring px-6 py-3 rounded-full border border-ink text-ink hover:border-accent hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
