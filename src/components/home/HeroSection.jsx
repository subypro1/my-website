import React from "react";
import { motion } from "framer-motion";
import GlitchText from "../shared/GlitchText";
import StatusBadge from "../shared/StatusBadge";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Red gradient glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom left, rgba(255,59,63,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Status badges */}
          <div className="flex items-center gap-3 mb-8">
            <StatusBadge label="STATUS: ACTIVE" variant="active" />
            <StatusBadge label="CLEARANCE: ALPHA" variant="classified" />
          </div>

          {/* Headline */}
          <GlitchText
            text="CYBERSECURITY"
            as="h1"
            className="font-heading font-black text-5xl md:text-7xl lg:text-[7rem] text-foreground tracking-tighter leading-none"
            delay={300}
          />
          <GlitchText
            text="PORTFOLIO"
            as="h1"
            className="font-heading font-black text-5xl md:text-7xl lg:text-[7rem] text-primary tracking-tighter leading-none mt-1"
            delay={600}
          />

          {/* Tagline */}
          <div className="mt-8 max-w-xl">
            <p className="text-sm font-mono text-muted-foreground leading-relaxed">
              <span className="text-primary">{'>'}</span>{" "}
              Threat Intelligence Specialist & Founder of{" "}
              <span className="text-foreground font-semibold">Auvion Security</span>.
              Protecting digital infrastructure through proactive intelligence,
              adversary profiling, and strategic cyber defence.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10 mt-12">
            {[
              { label: "SECTOR", value: "CYBER THREAT INTEL" },
              { label: "COMPANY", value: "AUVION SECURITY" },
              { label: "ROLE", value: "OWNER & ANALYST" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[10px] font-mono text-muted-foreground tracking-widest">{stat.label}</p>
                <p className="text-sm font-mono text-foreground mt-1 font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </div>

      {/* Right-side decorative line grid */}
      <div className="absolute right-0 top-0 h-full w-px bg-border opacity-40" />
      <div className="absolute right-16 top-0 h-full w-px bg-border opacity-20" />
    </section>
  );
}