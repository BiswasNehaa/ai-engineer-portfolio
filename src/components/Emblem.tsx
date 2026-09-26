import { motion } from "framer-motion";
import Ornament from "./Ornament";

export default function Emblem() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-40 h-40 md:w-56 md:h-56 shrink-0"
    >
      <div className="absolute inset-0 rounded-full border border-accent/60" />
      <div className="absolute inset-3 rounded-full border border-accent/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-6xl md:text-8xl text-accent">N</span>
      </div>
      <Ornament className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 text-accent" />
      <Ornament className="absolute top-1/2 -right-1 -translate-y-1/2 w-3 h-3 text-accent/70" />
      <Ornament className="absolute top-1/2 -left-1 -translate-y-1/2 w-3 h-3 text-accent/70" />
      <Ornament className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 text-accent" />
    </motion.div>
  );
}
