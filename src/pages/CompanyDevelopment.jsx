import React from "react";
import SectionHeader from "../components/shared/SectionHeader";
import TimelineItem from "../components/development/TimelineItem";
import Footer from "../components/shared/Footer";
import { motion } from "framer-motion";
import { Shield, Target, Users, Globe } from "lucide-react";

const companyMilestones = [
  {
    date: "2025",
    title: "CTI Platform Launch",
    category: "PRODUCT",
    description: "Began development of Auvion Security's proprietary threat intelligence platform. Automated IOC enrichment, real-time feeds, and analyst dashboards.",
  },
  {
    date: "2025",
    title: "Client Acquisition & Growth",
    category: "BUSINESS",
    description: "Expanded client portfolio with mid-size enterprises and SMBs seeking proactive threat intelligence services and security consulting.",
  },
  {
    date: "2024",
    title: "Service Offering Expansion",
    category: "OPERATIONS",
    description: "Broadened service portfolio to include incident response retainers, vulnerability assessments, and ongoing threat monitoring engagements.",
  },
  {
    date: "2024",
    title: "Auvion Security Founded",
    category: "FOUNDING",
    description: "Established Auvion Security as a cyber threat intelligence company. Focused on providing actionable intelligence to organisations navigating an increasingly complex threat landscape.",
  },
];

const metrics = [
  { icon: Shield, label: "SERVICES", value: "CTI • IR • VA", desc: "Threat Intel, Incident Response, Vuln Assessment" },
  { icon: Target, label: "FOCUS", value: "PROACTIVE", desc: "Intelligence-led security operations" },
  { icon: Users, label: "APPROACH", value: "CLIENT-FIRST", desc: "Tailored solutions for every engagement" },
  { icon: Globe, label: "SCOPE", value: "GLOBAL", desc: "Monitoring threats across all sectors" },
];

export default function CompanyDevelopment() {
  return (
    <div>
      <div className="px-6 md:px-12 lg:px-16 py-16">
        <SectionHeader
          code="AVN.03"
          title="AUVION SECURITY"
          subtitle="The evolution of a cyber threat intelligence company."
        />

        {/* Company Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-border bg-card p-5"
              >
                <Icon className="w-4 h-4 text-primary mb-3" />
                <p className="text-[10px] font-mono text-muted-foreground tracking-widest">{m.label}</p>
                <p className="font-heading font-bold text-foreground mt-1">{m.value}</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-2">{m.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Company description */}
        <div className="border border-border bg-card p-6 md:p-10 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="font-heading font-bold text-xl text-foreground">About Auvion Security</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                Auvion Security is a cyber threat intelligence company dedicated to helping organisations
                understand and mitigate the threats they face. We combine deep technical expertise with
                strategic analysis to deliver intelligence that matters.
              </p>
            </div>
            <div>
              <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                From dark web monitoring and threat actor profiling to incident response and vulnerability
                assessments, Auvion provides the clarity needed to make informed security decisions in an
                ever-evolving landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <h3 className="font-heading font-bold text-lg text-foreground mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-primary" />
          COMPANY MILESTONES
        </h3>
        <div className="max-w-2xl">
          {companyMilestones.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} side="right" />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}