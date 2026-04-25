import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FolderOpen, FileText, Layers, ArrowUpRight } from "lucide-react";

const links = [
  { path: "/projects", label: "PROJECTS", desc: "Completed & active security projects", icon: FolderOpen, code: "01" },
  { path: "/blog", label: "BLOG", desc: "Write-ups, analysis & thought leadership", icon: FileText, code: "05" },
  { path: "/misc", label: "MISCELLANEOUS", desc: "Certifications, tools & more", icon: Layers, code: "04" },
];

export default function QuickLinksSection() {
  return (
    <section className="px-6 md:px-12 lg:px-16 pb-20 border-t border-border pt-16">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[10px] font-mono text-muted-foreground tracking-widest">QUICK ACCESS</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {links.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={item.path}
                className="group block border border-[#2a0a0a] bg-[#130505] p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-8 h-8 border border-primary/30 bg-primary/10 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-[10px] font-mono text-primary tracking-widest">[{item.code}]</span>
                <h3 className="font-heading font-bold text-white mt-1">{item.label}</h3>
                <p className="text-xs font-mono text-zinc-400 mt-2">{item.desc}</p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}