const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import SectionHeader from "../components/shared/SectionHeader";
import TimelineItem from "../components/development/TimelineItem";
import Footer from "../components/shared/Footer";
import { motion } from "framer-motion";

const DEV_IMAGE = "https://media.db.com/images/public/69ed04bd77fbf6eff98a61e5/4094fe652_generated_d68c33f6.png";

const milestones = [
  {
    date: "2025",
    title: "Advanced Threat Intelligence Certification",
    category: "CERTIFICATION",
    description: "Completed advanced training in threat intelligence lifecycle, including collection, analysis, dissemination, and feedback loops. Applied knowledge to real-world CTI operations at Auvion Security.",
  },
  {
    date: "2024",
    title: "Incident Response Specialisation",
    category: "SKILL DEVELOPMENT",
    description: "Deepened expertise in digital forensics and incident response (DFIR). Hands-on experience with memory forensics, malware analysis, and timeline reconstruction.",
  },
  {
    date: "2024",
    title: "SIEM & SOAR Platform Mastery",
    category: "TECHNICAL SKILL",
    description: "Achieved proficiency in enterprise security platforms including Splunk, Microsoft Sentinel, and SOAR automation workflows for faster threat detection and response.",
  },
  {
    date: "2023",
    title: "Penetration Testing Foundations",
    category: "CERTIFICATION",
    description: "Gained foundational knowledge in ethical hacking, vulnerability assessment, and exploitation techniques. Applied to network security audits and red team engagements.",
  },
  {
    date: "2023",
    title: "Cybersecurity Analyst Role",
    category: "CAREER MILESTONE",
    description: "Began professional career in cybersecurity analysis, working on threat monitoring, vulnerability management, and security operations center (SOC) activities.",
  },
  {
    date: "2022",
    title: "Entry Into Cybersecurity",
    category: "EDUCATION",
    description: "Started formal education and self-study in cybersecurity. Focused on networking fundamentals, operating system security, and security principles.",
  },
];

const skills = [
  { name: "Threat Intelligence", level: 95 },
  { name: "Incident Response", level: 90 },
  { name: "Malware Analysis", level: 85 },
  { name: "SIEM / SOAR", level: 88 },
  { name: "Penetration Testing", level: 80 },
  { name: "Digital Forensics", level: 82 },
  { name: "OSINT", level: 92 },
  { name: "Network Security", level: 87 },
];

export default function PersonalDevelopment() {
  return (
    <div>
      <div className="px-6 md:px-12 lg:px-16 py-16">
        {/* Hero */}
        <div className="relative h-48 md:h-64 mb-12 overflow-hidden border border-border">
          <img src={DEV_IMAGE} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-6 left-6">
            <SectionHeader code="ANL.02" title="THE ANALYST" subtitle="Personal growth, certifications, and technical mastery." />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              GROWTH TRAJECTORY
            </h3>
            {milestones.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} side="left" />
            ))}
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              CAPABILITY MATRIX
            </h3>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs font-mono text-foreground">{skill.name}</span>
                    <span className="text-[10px] font-mono text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.08 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}