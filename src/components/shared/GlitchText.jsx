import React, { useState, useEffect, useRef } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

export default function GlitchText({ text, className = "", as: Tag = "span", delay = 0 }) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setTimeout(() => setStarted(true), delay);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, started]);

  useEffect(() => {
    if (!started) return;
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration += 1 / 2;
      if (iteration >= text.length) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <Tag ref={ref} className={className}>
      {started ? displayText : text}
    </Tag>
  );
}