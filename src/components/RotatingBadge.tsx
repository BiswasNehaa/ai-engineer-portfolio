import { motion } from "framer-motion";

export default function RotatingBadge({ text }: { text: string }) {
  const id = "badge-circle-path";
  const repeated = `${text} • `.repeat(3);

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="hidden sm:block relative w-24 h-24 md:w-32 md:h-32 shrink-0"
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <path id={id} d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
        </defs>
        <text className="fill-ink font-mono" style={{ fontSize: "13px", letterSpacing: "2px" }}>
          <textPath href={`#${id}`} startOffset="0%">
            {repeated}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
      </div>
    </motion.div>
  );
}
