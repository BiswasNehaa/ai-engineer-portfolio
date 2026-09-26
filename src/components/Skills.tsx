import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].label);
  const activeCategory = skillCategories.find((c) => c.label === active)!;

  return (
    <section id="skills" className="py-24 px-5 md:px-8 border-t border-accent/15">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="II" title="Skills" />

        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActive(cat.label)}
              className={`focus-ring font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded-full border transition-colors ${
                active === cat.label
                  ? "bg-accent text-paper border-accent"
                  : "border-accent/30 text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative rounded-2xl border border-accent/30 bg-panel/50 p-8 md:p-10 mb-10 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.4]"
            style={{
              backgroundImage: "radial-gradient(ellipse 60% 60% at 0% 0%, rgba(201,162,75,0.12), transparent 70%)",
            }}
          />
          <div className="relative flex flex-wrap gap-2.5">
            {activeCategory.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="font-mono text-xs px-3.5 py-2 rounded-full border border-accent/40 bg-paper text-ink"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="rounded-lg border border-accent/20 p-5 hover:border-accent/40 transition-colors">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-3">{cat.label}</h3>
              <p className="text-sm text-muted leading-relaxed">{cat.skills.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
