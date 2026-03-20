"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Loader,
  CheckCircle,
  Circle,
} from "lucide-react";
import type { PipelineStep } from "@/lib/store";

function StepIcon({ status }: { status: PipelineStep["status"] }) {
  if (status === "running")
    return (
      <Loader
        size={13}
        className="animate-spin shrink-0"
        style={{ color: "var(--accent-primary)" }}
      />
    );
  if (status === "done")
    return (
      <CheckCircle
        size={13}
        className="shrink-0"
        style={{ color: "var(--success)" }}
      />
    );
  return (
    <Circle
      size={13}
      className="shrink-0"
      style={{ color: "var(--text-disabled)" }}
    />
  );
}

export default function PipelineTrace({ steps }: { steps: PipelineStep[] }) {
  const [open, setOpen] = useState(false);

  const runningStep = steps.find((s) => s.status === "running");
  const doneCount = steps.filter((s) => s.status === "done").length;
  const allDone = doneCount === steps.length;

  const summary = allDone
    ? `Completed ${steps.length} steps`
    : runningStep
      ? runningStep.label
      : "Preparing…";

  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-2 px-4 py-3 text-left transition-colors hover:bg-[var(--bg-tertiary)]"
      >
        {open ? (
          <ChevronDown
            size={13}
            className="shrink-0"
            style={{ color: "var(--text-tertiary)" }}
          />
        ) : (
          <ChevronRight
            size={13}
            className="shrink-0"
            style={{ color: "var(--text-tertiary)" }}
          />
        )}
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--text-tertiary)" }}
        >
          Reasoning
        </span>
        <span
          className="ml-2 text-xs"
          style={{ color: "var(--text-secondary)" }}
        >
          {summary}
        </span>
        {!allDone && (
          <Loader
            size={11}
            className="ml-auto animate-spin shrink-0"
            style={{ color: "var(--accent-primary)" }}
          />
        )}
        {allDone && (
          <CheckCircle
            size={11}
            className="ml-auto shrink-0"
            style={{ color: "var(--success)" }}
          />
        )}
      </button>

      {open && (
        <div
          className="flex flex-col border-t px-4 py-3 gap-3"
          style={{ borderColor: "var(--border)" }}
        >
          {steps.map((step) => (
            <div key={step.id} className="flex items-start gap-3">
              <div className="mt-0.5">
                <StepIcon status={step.status} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span
                  className="text-xs font-medium"
                  style={{ color: "var(--text)" }}
                >
                  {step.label}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
