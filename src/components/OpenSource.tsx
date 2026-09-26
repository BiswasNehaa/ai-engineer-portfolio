import { motion } from "framer-motion";
import { openSource, profile } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function OpenSource() {
  return (
    <section id="open-source" className="py-24 px-5 md:px-8 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="04" title="Open Source" />
        <p className="text-lg text-ink-soft max-w-2xl mb-2">{openSource.summary}</p>
        <p className="font-mono text-sm text-muted max-w-2xl mb-10">{openSource.maintainer}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {openSource.repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-line p-6 hover:border-accent transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent">{repo.org}</span>
                <span className="text-muted group-hover:text-accent transition-colors">&rarr;</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 break-words text-ink">{repo.name}</h3>
              <p className="text-sm text-muted">{repo.description}</p>
            </motion.a>
          ))}
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink text-ink hover:border-accent hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest"
        >
          Explore My GitHub &rarr;
        </a>
      </div>
    </section>
  );
}
