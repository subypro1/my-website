import React from "react";
import { motion } from "framer-motion";

export default function TimelineItem({ item, index, side = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="relative pl-8 pb-10 border-l border-border last:pb-0"
    >
      {/* Dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 border-2 border-primary bg-background" />
      
      {/* Date */}
      <span className="text-[10px] font-mono text-primary tracking-widest">{item.date}</span>
      
      {/* Title */}
      <h3 className="font-heading font-bold text-foreground mt-1">{item.title}</h3>
      
      {/* Category */}
      {item.category && (
        <span className="inline-block text-[10px] font-mono text-muted-foreground tracking-wider mt-1 border border-border px-2 py-0.5">
          {item.category}
        </span>
      )}
      
      {/* Description */}
      <p className="text-xs font-mono text-muted-foreground leading-relaxed mt-3">
        {item.description}
      </p>
    </motion.div>
  );
}