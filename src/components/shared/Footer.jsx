import React from "react";
import { Shield } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-16 py-12">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-heading font-bold text-xs tracking-widest text-foreground">SENTINEL // AUVION SECURITY</span>
          </div>
          <p className="text-[10px] font-mono text-muted-foreground max-w-xs">
            Cyber Threat Intelligence. Proactive Defence. Strategic Resilience.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="px-4 py-2 border border-primary text-primary text-xs font-mono tracking-widest hover:bg-primary hover:text-foreground transition-colors"
        >
          RETURN TO TOP ↑
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-border/50">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} AUVION SECURITY</span>
          <span>ALL RIGHTS RESERVED</span>
          <span>BUILT WITH PRECISION</span>
        </div>
      </div>
    </footer>
  );
}