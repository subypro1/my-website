const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import StatusBadge from "../components/shared/StatusBadge";
import Footer from "../components/shared/Footer";
import { X, ExternalLink, Target, Search, Shield } from "lucide-react";

const PROJECTS_IMAGE = "https://media.db.com/images/public/69ed04bd77fbf6eff98a61e5/6178b5e02_generated_e2c6f948.png";

const projects = [
  {
    code: "RED_HORIZON",
    title: "Threat Landscape Analysis",
    status: "COMPLETED",
    date: "2025",
    category: "INTELLIGENCE",
    summary: "Comprehensive analysis of emerging APT groups targeting critical infrastructure sectors.",
    details: {
      gathering: "Open-source intelligence (OSINT) collection across dark web forums, paste sites, and threat feeds. Monitoring of 50+ threat actor channels.",
      analysis: "Pattern recognition across multiple attack campaigns. Attribution analysis using MITRE ATT&CK framework mapping. Developed custom indicators of compromise (IOCs).",
      remediation: "Delivered actionable intelligence reports to stakeholders. Implemented automated alerting for identified threat patterns.",
    },
    tags: ["OSINT", "APT", "MITRE ATT&CK", "Dark Web"],
  },
  {
    code: "IRON_GATE",
    title: "Network Security Audit",
    status: "COMPLETED",
    date: "2024",
    category: "ASSESSMENT",
    summary: "Full-spectrum network security assessment for a mid-size enterprise, identifying critical vulnerabilities.",
    details: {
      gathering: "Network topology mapping, service enumeration, and vulnerability scanning across internal and external perimeters.",
      analysis: "Risk-scored vulnerability findings. Discovered misconfigured firewalls, unpatched systems, and lateral movement opportunities.",
      remediation: "Provided prioritized remediation roadmap. Assisted in implementing network segmentation and zero-trust architecture.",
    },
    tags: ["Pen Test", "Network Security", "Zero Trust", "Vulnerability Assessment"],
  },
  {
    code: "PHANTOM_TRACE",
    title: "Incident Response Operation",
    status: "CLASSIFIED",
    date: "2025",
    category: "RESPONSE",
    summary: "Rapid response to active ransomware incident. Contained threat, preserved evidence, and restored operations.",
    details: {
      gathering: "Forensic image acquisition, memory capture, and log aggregation from affected endpoints and network devices.",
      analysis: "Malware reverse engineering, lateral movement tracking, and initial access vector identification. Built full attack timeline.",
      remediation: "Threat containment and eradication. Implemented enhanced monitoring and hardened backup strategies.",
    },
    tags: ["Ransomware", "DFIR", "Malware Analysis", "Forensics"],
  },
  {
    code: "SILENT_WATCH",
    title: "CTI Platform Development",
    status: "ACTIVE",
    date: "2025",
    category: "DEVELOPMENT",
    summary: "Designing and building Auvion Security's proprietary threat intelligence platform for real-time threat monitoring.",
    details: {
      gathering: "Requirements analysis, stakeholder interviews, and competitive landscape review of existing CTI platforms.",
      analysis: "Architecture design for scalable data ingestion pipelines, automated IOC enrichment, and threat scoring algorithms.",
      remediation: "Iterative development sprints. Current phase: API integration layer and analyst dashboard.",
    },
    tags: ["CTI Platform", "Automation", "API", "Product Development"],
  },
];

function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("gathering");
  const tabs = [
    { key: "gathering", label: "GATHERING" },
    { key: "analysis", label: "ANALYSIS" },
    { key: "remediation", label: "REMEDIATION" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-2xl bg-card border border-border max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <span className="text-[10px] font-mono text-primary tracking-widest">OP: {project.code}</span>
            <h3 className="font-heading font-bold text-xl text-foreground mt-1">{project.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted transition-colors">
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 px-4 py-3 text-xs font-mono tracking-wider transition-colors ${
                activeTab === tab.key
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm font-mono text-foreground/80 leading-relaxed">
            {project.details[activeTab]}
          </p>
        </div>

        {/* Tags */}
        <div className="px-6 pb-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-[10px] font-mono text-primary border border-primary/30 tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div className="px-6 md:px-12 lg:px-16 py-16">
        {/* Hero */}
        <div className="relative h-48 md:h-64 mb-12 overflow-hidden border border-border">
          <img src={PROJECTS_IMAGE} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-6 left-6">
            <SectionHeader code="OP.LOG" title="OPERATIONS" subtitle="Project archives and active engagements." />
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.code}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer border border-border bg-card p-5 md:p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-mono text-primary tracking-widest">OP: {project.code}</span>
                      <StatusBadge
                        label={project.status}
                        variant={project.status === "ACTIVE" ? "active" : project.status === "CLASSIFIED" ? "classified" : "default"}
                      />
                    </div>
                    <h3 className="font-heading font-bold text-foreground">{project.title}</h3>
                    <p className="text-xs font-mono text-muted-foreground mt-1 max-w-lg">{project.summary}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-muted-foreground">{project.date}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      <Footer />
    </div>
  );
}