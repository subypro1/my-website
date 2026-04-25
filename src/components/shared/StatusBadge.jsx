import React from "react";

export default function StatusBadge({ label, variant = "default" }) {
  const styles = {
    default: "border-border text-muted-foreground",
    active: "border-primary text-primary",
    classified: "border-primary/50 text-primary bg-primary/5",
  };

  return (
    <span className={`
      inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-wider
      border ${styles[variant]}
    `}>
      {variant === "active" && (
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      )}
      {label}
    </span>
  );
}