import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].label);
  const activeCategory = skillCategories.find((c) => c.label === active)!;

  return (
    <section id="skills" className="py-24 px-5 md:px-8 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="02" title="Skills" />

        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActive(cat.label)}
              className={`focus-ring font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded-full border transition-colors ${
                active === cat.label
                  ? "bg-ink text-paper border-ink"
                  : "border-line text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-line bg-panel/50 p-8 md:p-10 mb-10">
          <div className="flex flex-wrap gap-2.5">
            {activeCategory.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="font-mono text-xs px-3.5 py-2 rounded-full border border-line bg-paper text-ink"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="rounded-lg border border-line p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-3">{cat.label}</h3>
              <p className="text-sm text-muted leading-relaxed">{cat.skills.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
