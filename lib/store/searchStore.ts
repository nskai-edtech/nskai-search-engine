import { create } from "zustand";

export interface Source {
  index: number;
  title: string;
  url: string;
  snippet: string;
}

export type StepStatus = "pending" | "running" | "done";

export interface PipelineStep {
  id: string;
  label: string;
  detail: string;
  status: StepStatus;
}

export const INITIAL_STEPS: PipelineStep[] = [
  { id: "serper", label: "Web search", detail: "Querying Serper.dev for top results", status: "pending" },
  { id: "jina", label: "Content extraction", detail: "Fetching and parsing page content via Jina Reader", status: "pending" },
  { id: "rerank", label: "Re-ranking", detail: "Scoring passages against your query", status: "pending" },
  { id: "claude", label: "Synthesis", detail: "Claude generating a cited answer from ranked passages", status: "pending" },
];

type SearchStore = {
  query: string;
  answer: string;
  sources: Source[];
  loading: boolean;
  steps: PipelineStep[];
  setQuery: (q: string) => void;
  setSources: (s: Source[]) => void;
  appendAnswer: (chunk: string) => void;
  setLoading: (v: boolean) => void;
  setSteps: (steps: PipelineStep[]) => void;
  updateStep: (id: string, patch: Partial<PipelineStep>) => void;
  reset: () => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  query: "",
  answer: "",
  sources: [],
  loading: false,
  steps: [],
  setQuery: (q) => set({ query: q }),
  setSources: (s) => set({ sources: s }),
  appendAnswer: (chunk) => set((state) => ({ answer: state.answer + chunk })),
  setLoading: (v) => set({ loading: v }),
  setSteps: (steps) => set({ steps }),
  updateStep: (id, patch) =>
    set((state) => ({
      steps: state.steps.map((s) => (s.id === id ? { ...s, ...patch } : s)),
    })),
  reset: () => set({ answer: "", sources: [], loading: false, steps: [] }),
}));
