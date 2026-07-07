"use client";

import { motion } from "framer-motion";

const lines = [
  "$ initializing rajat-gupta.dev",
  "Loading components...",
  "Loading architecture...",
  "Connecting GitHub...",
  "Loading AI Assistant...",
  "Ready ✓",
];

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#111113] p-5 shadow-2xl shadow-black/30 sm:p-6"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">Boot Sequence</p>
        <div className="space-y-2 font-mono text-sm text-zinc-300">
          {lines.map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.22 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
