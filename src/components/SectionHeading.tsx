import { motion } from "framer-motion";
import Ornament from "./Ornament";

export default function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <div className="flex items-center gap-3 mb-4">
        <Ornament className="w-3 h-3 text-accent" />
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Chapter {index}</span>
      </div>
      <h2 className="font-display font-semibold text-4xl md:text-6xl text-ink tracking-tight">{title}</h2>
      <div className="w-24 h-px bg-accent mt-6" />
    </motion.div>
  );
}
