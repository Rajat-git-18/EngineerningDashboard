"use client";

import { motion } from "framer-motion";

const nodes = ["React Native", "REST API", "Node", "Postgres", "AI"];

export function ArchitecturePipeline() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_52%)]" />
      <div className="relative space-y-3">
        {nodes.map((node, index) => (
          <div key={node} className="flex flex-col items-center">
            <motion.div
              className="w-full rounded-xl border border-white/15 bg-[#111113] px-4 py-3 text-center text-sm font-medium text-zinc-100"
              animate={{ boxShadow: ["0 0 0 rgba(99,102,241,0)", "0 0 24px rgba(99,102,241,0.24)", "0 0 0 rgba(99,102,241,0)"] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                delay: index * 0.35,
              }}
            >
              {node}
            </motion.div>
            {index < nodes.length - 1 ? (
              <motion.div
                className="my-1 h-6 w-px bg-gradient-to-b from-indigo-400/70 to-transparent"
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  delay: index * 0.2,
                }}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
