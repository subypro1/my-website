import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, FolderOpen, User, Building2, Layers, FileText, 
  Menu, X, Activity
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "HOME", icon: Home, code: "00" },
  { path: "/projects", label: "PROJECTS", icon: FolderOpen, code: "01" },
  { path: "/personal", label: "PERSONAL DEV", icon: User, code: "02" },
  { path: "/company", label: "COMPANY DEV", icon: Building2, code: "03" },
  { path: "/misc", label: "MISCELLANEOUS", icon: Layers, code: "04" },
  { path: "/blog", label: "BLOG", icon: FileText, code: "05" },
];

export default function HUDSidebar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const utcTime = time.toUTCString().split(" ").slice(4).join(" ").replace(" GMT", "");

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 border border-border bg-background"
      >
        {mobileOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <aside className={`
        fixed top-0 left-0 h-full z-40 w-56 bg-background border-r border-border
        flex flex-col transition-transform duration-300
        lg:translate-x-0
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="p-5 border-b border-border">
          <div className="flex items-center gap-3">
            {/* Direct path to the public folder file */}
            <img 
              src="/logo.png" 
              alt="Auvion Security Logo" 
              className="w-8 h-8 object-contain" 
            />
            <span className="font-heading font-bold text-sm tracking-widest text-foreground uppercase">
              AUVION
            </span>
          </div>
          <p className="text-[10px] font-mono text-muted-foreground mt-2 tracking-wider uppercase">
            Security // CTI Operations
          </p>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  group flex items-center gap-3 px-3 py-2.5 text-xs font-mono tracking-wider
                  transition-all duration-200 relative
                  ${isActive
                    ? "text-primary bg-primary/10 border-l-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border-l-2 border-transparent"
                  }
                `}
              >
                <span className="text-[10px] opacity-40">{item.code}</span>
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute right-2 w-1.5 h-1.5 rounded-full bg-primary animate-pulse-red"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border space-y-3">
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-mono text-muted-foreground uppercase">System Active</span>
          </div>
          <div className="text-[10px] font-mono text-muted-foreground space-y-1">
            <div className="flex justify-between">
              <span>TIME</span>
              <span className="text-foreground">{utcTime} UTC</span>
            </div>
            <div className="flex justify-between">
              <span>LOC</span>
              <span className="text-foreground">UK</span>
            </div>
            <div className="flex justify-between">
              <span>ORG</span>
              <span className="text-primary font-bold">AUVION</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}