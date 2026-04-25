import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Building2, ArrowRight } from "lucide-react";

const pathData = [
  {
    icon: Shield,
    title: "THE ANALYST",
    subtitle: "Personal Development",
    description: "Deep-rooted experience in threat detection, vulnerability assessment, incident response, and security architecture. Driven by a passion for dismantling threats before they materialize.",
    skills: ["Threat Intelligence", "Incident Response", "Malware Analysis", "SIEM/SOAR", "Penetration Testing", "Digital Forensics"],
    link: "/personal",
    linkLabel: "VIEW PERSONAL DEVELOPMENT",
  },
  {
    icon: Building2,
    title: "THE FOUNDER",
    subtitle: "Company Development",
    description: "Building a cyber threat intelligence company from the ground up. Auvion Security delivers actionable intelligence to organisations, helping them stay ahead of emerging threats.",
    skills: ["Strategic Planning", "Client Relations", "Threat Reporting", "Team Leadership", "Business Development", "CTI Operations"],
    link: "/company",
    linkLabel: "VIEW COMPANY DEVELOPMENT",
  },
];

export default function DualPathSection() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-20 border-t border-border">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[10px] font-mono text-primary tracking-widest">[SYS.01]</span>
        <div className="h-px flex-1 bg-border" />
      </div>
      <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground tracking-tight mb-2">DUAL IDENTITY</h2>
      <p className="text-sm font-mono text-muted-foreground mb-10">Operating at the intersection of technical mastery and business leadership.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {pathData.map((path, i) => {
          const Icon = path.icon;
          return (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group border border-[#2a0a0a] bg-[#130505] p-6 md:p-8 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-primary/40 flex items-center justify-center bg-primary/10">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">{path.title}</h3>
                  <p className="text-[10px] font-mono text-primary tracking-widest">{path.subtitle}</p>
                </div>
              </div>

              <p className="text-sm font-mono text-zinc-400 leading-relaxed mb-6">
                {path.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {path.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-[10px] font-mono text-zinc-300 border border-zinc-700 tracking-wider hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                to={path.link}
                className="inline-flex items-center gap-2 text-xs font-mono text-primary hover:text-white transition-colors"
              >
                {path.linkLabel}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}