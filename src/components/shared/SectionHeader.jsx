import React from "react";
import GlitchText from "./GlitchText";

export default function SectionHeader({ code, title, subtitle }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[10px] font-mono text-primary tracking-widest">[{code}]</span>
        <div className="h-px flex-1 bg-border" />
      </div>
      <GlitchText
        text={title}
        as="h2"
        className="font-heading font-bold text-3xl md:text-5xl text-foreground tracking-tight"
      />
      {subtitle && (
        <p className="text-sm font-mono text-muted-foreground mt-3 max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}