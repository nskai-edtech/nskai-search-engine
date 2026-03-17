# AI Search Engine

[cite_start]A comprehensive AI-powered search engine designed to deliver deeper, more satisfying search experiences[cite: 10]. [cite_start]Inspired by products like Perplexity AI, this system understands user intent, retrieves and synthesizes information from multiple sources, and presents clear, cited answers rather than a list of blue links[cite: 11].

## Core Value Proposition

* [cite_start]Direct, synthesized answers instead of a list of links[cite: 24].
* [cite_start]Transparent source citations so users can verify claims[cite: 25].
* [cite_start]Contextual follow-up: the engine remembers conversation context[cite: 26].
* [cite_start]Multi-source synthesis: combines information across multiple web pages[cite: 27].

## Architecture & Query Pipeline

[cite_start]The system follows a retrieval-augmented generation (RAG) pipeline architecture[cite: 39]. When a user submits a query, it flows through the following stages:

1. [cite_start]**Submission:** User submits a query via the frontend[cite: 43].
2. [cite_start]**Processing:** The query processor classifies intent and rewrites for optimal retrieval[cite: 44].
3. [cite_start]**Retrieval:** The web retriever sends the rewritten query to search APIs and fetches top results[cite: 45].
4. [cite_start]**Extraction:** The content extractor fetches and parses full page content from the top URLs[cite: 46].
5. [cite_start]**Ranking:** A re-ranker scores each content chunk against the original query and selects the most relevant passages[cite: 47].
6. [cite_start]**Synthesis:** The LLM synthesizer receives the query and ranked passages, generating a coherent answer with inline citations[cite: 48].
7. [cite_start]**Delivery:** The response streams to the frontend in real-time with source cards displayed alongside[cite: 51].

## Tech Stack

### Installed Dependencies
* [cite_start]**Framework:** NextJS + React + Tailwind[cite: 41].
* **Styling & UI:** Tailwind CSS, `shadcn/ui`, `lucide-react`, `clsx`, `tailwind-merge`.
* **AI & Streaming:** `@anthropic-ai/sdk`, `ai` (Vercel AI SDK).
* **Formatting:** Prettier, ESLint.

### Planned External Services
* [cite_start]**LLM Provider:** Claude Haiku 4.5 and Claude Sonnet 4.6[cite: 41].
* [cite_start]**Search API:** Serper.dev[cite: 41].
* [cite_start]**Content Extraction:** Jina Reader API[cite: 41].

## Getting Started

This project uses `pnpm` for fast, efficient dependency management.

### 1. Install Dependencies
```bash
pnpm install
