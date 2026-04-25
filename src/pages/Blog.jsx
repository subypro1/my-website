const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import Footer from "../components/shared/Footer";
import { Search, Tag, Clock, ArrowRight, Terminal } from "lucide-react";

const BLOG_IMAGE = "https://media.db.com/images/public/69ed04bd77fbf6eff98a61e5/67d54a5ef_generated_18cecff7.png";

const posts = [
  {
    id: 1,
    title: "Understanding APT Groups: Tactics, Techniques, and Procedures",
    date: "2025-04-10",
    readTime: "8 MIN",
    tags: ["THREAT INTEL", "APT", "TTPs"],
    excerpt: "A deep dive into how advanced persistent threat groups operate, their common attack patterns, and how organisations can detect and defend against them using threat intelligence frameworks.",
    classification: "UNCLASSIFIED",
  },
  {
    id: 2,
    title: "Building a Home Lab for Cybersecurity Research",
    date: "2025-03-22",
    readTime: "6 MIN",
    tags: ["LAB SETUP", "LEARNING", "TOOLS"],
    excerpt: "Step-by-step guide to setting up a virtualised home lab environment for practising penetration testing, malware analysis, and incident response without any risk.",
    classification: "PUBLIC",
  },
  {
    id: 3,
    title: "The Role of OSINT in Modern Threat Intelligence",
    date: "2025-02-15",
    readTime: "10 MIN",
    tags: ["OSINT", "INTELLIGENCE", "METHODOLOGY"],
    excerpt: "How open-source intelligence has become a cornerstone of threat intelligence operations, from dark web monitoring to social media analysis and domain reconnaissance.",
    classification: "UNCLASSIFIED",
  },
  {
    id: 4,
    title: "Ransomware in 2025: Trends and Defensive Strategies",
    date: "2025-01-30",
    readTime: "12 MIN",
    tags: ["RANSOMWARE", "DEFENCE", "TRENDS"],
    excerpt: "Examining the current ransomware landscape, including double extortion tactics, ransomware-as-a-service (RaaS), and the most effective defensive measures organisations can implement.",
    classification: "PUBLIC",
  },
  {
    id: 5,
    title: "From Analyst to Founder: Lessons in Cyber Entrepreneurship",
    date: "2024-12-05",
    readTime: "7 MIN",
    tags: ["BUSINESS", "AUVION", "PERSONAL"],
    excerpt: "Reflections on the journey of building Auvion Security from the ground up—balancing technical expertise with business acumen, client management, and the pursuit of something bigger.",
    classification: "PUBLIC",
  },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTag, setFilterTag] = useState(null);

  const allTags = [...new Set(posts.flatMap((p) => p.tags))];

  const filtered = posts.filter((post) => {
    const matchesSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = !filterTag || post.tags.includes(filterTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div>
      <div className="px-6 md:px-12 lg:px-16 py-16">
        {/* Hero */}
        <div className="relative h-40 md:h-56 mb-12 overflow-hidden border border-border">
          <img src={BLOG_IMAGE} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-6 left-6">
            <SectionHeader code="INT.05" title="INTEL BRIEFS" subtitle="Analysis, write-ups, and thought leadership." />
          </div>
        </div>

        {/* CLI-style search */}
        <div className="border border-border bg-card mb-8">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-mono text-muted-foreground">SEARCH // FILTER</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-3">
            <span className="text-primary font-mono text-sm">{'>'}</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="/filter: type to search..."
              className="flex-1 bg-transparent text-sm font-mono text-foreground placeholder-muted-foreground outline-none"
            />
            <Search className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilterTag(null)}
            className={`px-2.5 py-1 text-[10px] font-mono tracking-wider border transition-colors ${
              !filterTag ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            ALL
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(filterTag === tag ? null : tag)}
              className={`px-2.5 py-1 text-[10px] font-mono tracking-wider border transition-colors ${
                filterTag === tag ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group border border-border bg-card p-5 md:p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-mono text-primary">[{post.classification}]</span>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground">{post.date}</span>
                  </div>

                  <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs font-mono text-muted-foreground mt-2 leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-mono text-primary/80 border border-primary/20 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-2" />
              </div>
            </motion.article>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-sm font-mono text-muted-foreground">No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}