import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Layers, 
  User, 
  Building2, 
  Box, 
  FileText,
  Shield
} from 'lucide-react';

const HUDSidebar = () => {
  const menuItems = [
    { icon: <Home size={18} />, label: 'HOME', path: '/' },
    { icon: <Layers size={18} />, label: 'PROJECTS', path: '/projects' },
    { icon: <User size={18} />, label: 'PERSONAL DEV', path: '/personal' },
    { icon: <Building2 size={18} />, label: 'COMPANY DEV', path: '/company' },
    { icon: <Box size={18} />, label: 'MISCELLANEOUS', path: '/misc' },
    { icon: <FileText size={18} />, label: 'BLOG', path: '/blog' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 bg-black/40 border-r border-primary/20 backdrop-blur-md z-40 hidden lg:flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-primary/10">
        <div className="flex items-center gap-3">
          {/* FIX: Using the correct subfolder path for GitHub Pages */}
          <img 
            src="/my-website/logo.png" 
            alt="Auvion Logo" 
            className="h-8 w-auto filter drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-white">AUVION</span>
            <span className="text-[10px] text-primary tracking-[0.2em] font-medium uppercase opacity-70">
              Security // Ops
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-8 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-sm transition-all duration-300 group
              ${isActive 
                ? 'bg-primary/10 text-primary border-l-2 border-primary shadow-[inset_4px_0_10px_-4px_rgba(255,0,0,0.3)]' 
                : 'text-muted-foreground hover:text-white hover:bg-white/5'}
            `}
          >
            <span className="opacity-70 group-hover:opacity-100 transition-opacity">
              {item.icon}
            </span>
            <span className="text-xs font-bold tracking-widest uppercase">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Footer Status */}
      <div className="p-6 border-t border-primary/10 bg-black/20">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] text-primary/60 font-mono tracking-tight uppercase">
            System: Encrypted
          </span>
        </div>
      </div>
    </aside>
  );
};

export default HUDSidebar;
