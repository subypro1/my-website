import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, Database, Wifi } from "lucide-react";

const metrics = [
  { icon: Cpu, label: "THREAT PROC", getValue: () => `${(Math.random() * 2 + 97).toFixed(1)}%` },
  { icon: Activity, label: "DETECTION RATE", getValue: () => `${(Math.random() * 1 + 98).toFixed(2)}%` },
  { icon: Database, label: "IOC DATABASE", getValue: () => `${(Math.floor(Math.random() * 999) + 142000).toLocaleString()}` },
  { icon: Wifi, label: "FEEDS ACTIVE", getValue: () => `${Math.floor(Math.random() * 3) + 47}` },
];

export default function AIMetricsBar() {
  const [values, setValues] = useState(metrics.map(m => m.getValue()));

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(metrics.map(m => m.getValue()));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-t border-b border-border bg-card/50 px-6 md:px-12 lg:px-16 py-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
              <div>
                <p className="text-[10px] font-mono text-muted-foreground tracking-widest">{m.label}</p>
                <motion.p
                  key={values[i]}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className="text-sm font-mono text-foreground font-semibold"
                >
                  {values[i]}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}