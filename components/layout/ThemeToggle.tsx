"use client";

import { setTheme, useIsDarkTheme } from "./theme-store";

export function ThemeToggle() {
  const isDark = useIsDarkTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(!isDark)}
      aria-label="Basculer le thème clair/sombre"
      className="flex h-9 w-9 items-center justify-center rounded-btn border border-border-gray text-text-dark transition-colors hover:border-orange-accent hover:text-orange-accent dark:text-text-light"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </>
        ) : (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        )}
      </svg>
    </button>
  );
}
