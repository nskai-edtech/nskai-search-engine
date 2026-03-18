"use client";

import { useThemeStore } from "@/lib/store";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDark = useThemeStore((s) => s.isDark);

  return (
    <div className={isDark ? "dark" : ""} style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
}
