import { motion } from "framer-motion";

export default function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="flex items-baseline gap-4 mb-12"
    >
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="font-display font-bold text-3xl md:text-5xl text-ink tracking-tight">{title}</h2>
      <span className="flex-1 h-px bg-line ml-2" />
    </motion.div>
  );
}
