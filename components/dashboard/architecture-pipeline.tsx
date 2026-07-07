"use client";

import { motion } from "framer-motion";

const nodes = ["React Native", "REST API", "Node", "Postgres", "AI"];

export function ArchitecturePipeline() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111113] p-5 sm:p-6">
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_52%)]" />
      <div className="relative space-y-2.5">
        {nodes.map((node, index) => (
          <div key={node} className="flex flex-col items-center">
            <motion.div
              className="w-full rounded-xl border border-white/15 bg-[#17171c] px-4 py-3 text-center text-sm font-medium text-zinc-100"
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
              <div className="relative my-1.5 h-7 w-px overflow-hidden bg-white/10">
                <motion.div
                  className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-indigo-300"
                  animate={{ y: [0, 26, 0], opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2.2,
                    delay: index * 0.3,
                  }}
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
