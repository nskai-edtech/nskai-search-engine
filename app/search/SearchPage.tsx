"use client";

import { useCallback, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSearchStore, INITIAL_STEPS } from "@/lib/store";
import Navbar from "@/components/ui/Navbar";
import SearchInput from "@/components/ui/SearchInput";
import SourceCard from "@/components/ui/SourceCard";
import PipelineTrace from "@/components/ui/PipelineTrace";
import Sidebar from "@/components/ui/Sidebar";

const MOCK_SOURCES = [
  {
    index: 1,
    title: "Retrieval-Augmented Generation Explained",
    url: "https://example.com/rag",
    snippet:
      "RAG combines retrieval systems with generative models to produce grounded answers.",
  },
  {
    index: 2,
    title: "How Large Language Models Work",
    url: "https://example.com/llm",
    snippet:
      "LLMs are trained on vast corpora and learn to predict the next token in a sequence.",
  },
  {
    index: 3,
    title: "Vector Databases for AI Search",
    url: "https://example.com/vectordb",
    snippet:
      "Vector databases store embeddings and enable fast semantic similarity search.",
  },
  {
    index: 4,
    title: "Claude by Anthropic — Overview",
    url: "https://anthropic.com/claude",
    snippet:
      "Claude is a family of AI assistants built by Anthropic with a focus on safety.",
  },
  {
    index: 5,
    title: "Semantic Search vs Keyword Search",
    url: "https://example.com/semantic",
    snippet:
      "Semantic search understands intent and context rather than matching exact keywords.",
  },
];

const MOCK_ANSWER = `Based on the sources retrieved, here is a synthesised answer to your query [1].

Retrieval-augmented generation (RAG) works by first retrieving relevant documents from a knowledge base, then passing those documents as context to a language model [2]. This grounds the model's response in real, verifiable information rather than relying solely on its training data [3].

The key advantage is that the model can cite specific sources [4], making it easier for users to verify claims. Semantic search plays a critical role in the retrieval step, ensuring the most relevant passages are selected [5].`;

async function* streamText(text: string) {
  for (const word of text.split(" ")) {
    yield word + " ";
    await new Promise((r) => setTimeout(r, 40));
  }
}

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") ?? "";

  const {
    query,
    answer,
    sources,
    steps,
    loading,
    setQuery,
    setSources,
    appendAnswer,
    setLoading,
    setSteps,
    updateStep,
    reset,
  } = useSearchStore();

  const search = useCallback(
    async (q: string) => {
      reset();
      setQuery(q);
      setLoading(true);
      router.replace(`/search?q=${encodeURIComponent(q)}`, { scroll: false });

      // Initialise all steps as pending
      setSteps(INITIAL_STEPS.map((s) => ({ ...s, status: "pending" })));

      // Serper
      updateStep("serper", { status: "running" });
      await delay(700);
      updateStep("serper", {
        status: "done",
        detail: `Found ${MOCK_SOURCES.length} results for "${q}"`,
      });

      // Jina
      updateStep("jina", { status: "running" });
      await delay(900);
      updateStep("jina", {
        status: "done",
        detail: `Extracted content from ${MOCK_SOURCES.length} pages`,
      });
      setSources(MOCK_SOURCES);

      // Re-rank
      updateStep("rerank", { status: "running" });
      await delay(500);
      updateStep("rerank", {
        status: "done",
        detail: "Selected top passages by relevance score",
      });

      // Claude synthesis
      updateStep("claude", { status: "running" });
      for await (const chunk of streamText(MOCK_ANSWER)) {
        appendAnswer(chunk);
      }
      updateStep("claude", {
        status: "done",
        detail: "Answer synthesised with inline citations",
      });

      setLoading(false);
    },
    [
      router,
      reset,
      setQuery,
      setLoading,
      setSources,
      appendAnswer,
      setSteps,
      updateStep,
    ],
  );

  useEffect(() => {
    if (initialQuery) search(initialQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasResults = answer || sources.length > 0;

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <Navbar
        showSidebarToggle
        hideThemeToggle
        slot={
          <SearchInput
            initialQuery=""
            onSearch={search}
            loading={loading}
            compact
          />
        }
      />

      <div className="flex flex-1">
        <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-8">
          {query && (
            <h2
              className="font-sans text-2xl font-semibold tracking-tight animate-in"
              style={{ color: "var(--text)" }}
            >
              {query}
            </h2>
          )}

          {/* Pipeline trace — visible as soon as steps are initialised */}
          {steps.length > 0 && <PipelineTrace steps={steps} />}

          {/* Answer */}
          {answer && (
            <div className="flex flex-col gap-3 animate-in">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--text-tertiary)" }}
              >
                Answer
              </p>
              <p
                className="text-sm leading-relaxed whitespace-pre-wrap"
                style={{ color: "var(--text)" }}
              >
                {answer}
                {loading && (
                  <span
                    className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse align-middle"
                    style={{ backgroundColor: "var(--accent-primary)" }}
                  />
                )}
              </p>
            </div>
          )}

          {/* Sources */}
          {sources.length > 0 && (
            <div className="flex flex-col gap-3 animate-in">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--text-tertiary)" }}
              >
                Sources
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {sources.map((s) => (
                  <SourceCard key={s.index} source={s} />
                ))}
              </div>
            </div>
          )}

          {!loading && !hasResults && !query && (
            <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text)" }}
              >
                What do you want to know?
              </p>
              <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                Ask anything above to get a cited answer.
              </p>
            </div>
          )}
        </main>
        <Sidebar />
      </div>
    </div>
  );
}
