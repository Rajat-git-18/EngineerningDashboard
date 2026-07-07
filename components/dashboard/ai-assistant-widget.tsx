"use client";

import { useMemo, useState } from "react";
import { Bot, Send } from "lucide-react";

import { aiAnswers } from "@/lib/dashboard-data";
import { Button } from "@/components/ui/button";

const quickPrompts = [
  "Tell me about Breakfree.",
  "Explain your backend experience.",
  "What technologies do you know?",
  "Tell me about your architecture.",
];

function matchAnswer(prompt: string) {
  const normalized = prompt.toLowerCase();
  if (normalized.includes("breakfree")) return aiAnswers.breakfree;
  if (normalized.includes("backend")) return aiAnswers.backend;
  if (normalized.includes("technolog")) return aiAnswers.technologies;
  if (normalized.includes("architecture")) return aiAnswers.architecture;
  return "I am a mocked assistant for now. Ask about Breakfree, backend experience, technology stack, or architecture.";
}

export function AIAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(aiAnswers.architecture);

  const disabled = useMemo(() => prompt.trim().length === 0, [prompt]);

  const submit = () => {
    if (disabled) return;
    setResponse(matchAnswer(prompt));
    setPrompt("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[min(92vw,360px)]">
      {open ? (
        <div className="rounded-2xl border border-white/15 bg-[#111113]/90 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-white">Ask Rajat AI</p>
            <button
              onClick={() => setOpen(false)}
              className="text-xs text-zinc-400 transition hover:text-zinc-200"
              aria-label="Close AI assistant"
            >
              Close
            </button>
          </div>
          <div className="mb-3 rounded-lg border border-white/10 bg-black/30 p-3 text-sm text-zinc-200">
            {response}
          </div>
          <div className="mb-3 flex flex-wrap gap-2">
            {quickPrompts.map((item) => (
              <button
                key={item}
                onClick={() => setResponse(matchAnswer(item))}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300 transition hover:border-indigo-300/40 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="Ask about architecture..."
              className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-indigo-300/60"
            />
            <Button size="sm" onClick={submit} aria-label="Send prompt">
              <Send className="size-4" />
            </Button>
          </div>
        </div>
      ) : (
        <Button onClick={() => setOpen(true)} className="ml-auto flex shadow-xl shadow-indigo-950/40">
          <Bot className="mr-2 size-4" />
          Ask Rajat AI
        </Button>
      )}
    </div>
  );
}
