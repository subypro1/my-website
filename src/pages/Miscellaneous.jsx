import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import Footer from "../components/shared/Footer";
import { Award, Wrench, BookOpen, Coffee, ArrowUpRight } from "lucide-react";

const certifications = [
  { name: "CompTIA Security+", issuer: "CompTIA", year: "2023" },
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "2024" },
  { name: "Splunk Core Certified User", issuer: "Splunk", year: "2024" },
  { name: "Google Cybersecurity Certificate", issuer: "Google", year: "2023" },
];

const tools = [
  "Splunk", "Microsoft Sentinel", "Wireshark", "Nmap", "Burp Suite",
  "Metasploit", "MITRE ATT&CK", "VirusTotal", "Shodan", "Maltego",
  "Volatility", "Autopsy", "YARA", "Suricata", "TheHive",
];

const interests = [
  { label: "Threat Research", desc: "Staying ahead of emerging tactics, techniques, and procedures (TTPs) used by threat actors." },
  { label: "CTF Competitions", desc: "Participating in capture-the-flag challenges to sharpen offensive and defensive skills." },
  { label: "Open Source Projects", desc: "Contributing to open-source security tools and sharing knowledge with the community." },
  { label: "Continuous Learning", desc: "Always pursuing new certifications, courses, and hands-on labs to stay at the cutting edge." },
];

export default function Miscellaneous() {
  return (
    <div>
      <div className="px-6 md:px-12 lg:px-16 py-16">
        <SectionHeader
          code="MX.04"
          title="MISCELLANEOUS"
          subtitle="Certifications, tools, interests, and everything else."
        />

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-lg text-foreground mb-6 flex items-center gap-3">
            <Award className="w-4 h-4 text-primary" />
            CERTIFICATIONS
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-border bg-card p-5 flex items-start justify-between"
              >
                <div>
                  <h4 className="font-heading font-bold text-foreground text-sm">{cert.name}</h4>
                  <p className="text-[10px] font-mono text-muted-foreground mt-1">{cert.issuer} • {cert.year}</p>
                </div>
                <Award className="w-4 h-4 text-primary shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-lg text-foreground mb-6 flex items-center gap-3">
            <Wrench className="w-4 h-4 text-primary" />
            TOOLS & TECHNOLOGIES
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-3 py-1.5 text-xs font-mono text-foreground/80 border border-border hover:border-primary/30 hover:text-primary transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <h3 className="font-heading font-bold text-lg text-foreground mb-6 flex items-center gap-3">
            <Coffee className="w-4 h-4 text-primary" />
            INTERESTS & ACTIVITIES
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {interests.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-border bg-card p-5"
              >
                <h4 className="font-heading font-bold text-foreground text-sm flex items-center gap-2">
                  {item.label}
                  <ArrowUpRight className="w-3 h-3 text-primary" />
                </h4>
                <p className="text-xs font-mono text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}