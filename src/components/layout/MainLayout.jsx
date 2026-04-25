import React from "react";
import { Outlet } from "react-router-dom";
import HUDSidebar from "./HUDSidebar";
import ParticleBackground from "./ParticleBackground";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Deep red vignette overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(10,0,0,0.85) 100%)",
        }}
      />

      {/* Particle network */}
      <ParticleBackground />

      {/* Scanline */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.025]">
        <div className="w-full h-[2px] bg-primary animate-scanline" />
      </div>

      <HUDSidebar />

      <main className="lg:ml-56 min-h-screen relative z-10">
        <Outlet />
      </main>
    </div>
  );
}