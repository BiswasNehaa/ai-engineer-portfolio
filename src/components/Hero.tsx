import { motion } from "framer-motion";
import { profile } from "../data/content";
import Ornament from "./Ornament";
import Emblem from "./Emblem";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-24 md:pt-36 md:pb-32 px-5 md:px-8 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,162,75,0.16), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,162,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,75,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <Ornament className="w-2.5 h-2.5 text-accent" />
          <p className="font-mono text-xs uppercase tracking-[0.45em] text-accent">
            {profile.role} &mdash; Portfolio
          </p>
          <Ornament className="w-2.5 h-2.5 text-accent" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display font-semibold leading-[0.82] text-center text-[15vw] md:text-[8.5vw] lg:text-[7rem] tracking-tight text-ink"
          >
            NEHA
            <br />
            BISWAS
          </motion.h1>
          <Emblem />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display italic text-2xl md:text-4xl text-accent text-center mb-3"
        >
          Systems, built with intention.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className="w-16 h-px bg-accent/50" />
          <Ornament className="w-2 h-2 text-accent" />
          <span className="w-16 h-px bg-accent/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-ink-soft leading-relaxed max-w-xl mx-auto text-center mb-10"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="focus-ring px-7 py-3 rounded-full bg-accent text-paper font-mono text-xs uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors"
          >
            View Projects
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring px-7 py-3 rounded-full border border-accent/60 text-ink font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
