"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function useTheme() {
  // Always return dark mode
  return { theme: "dark", toggleTheme: () => { } };
}
