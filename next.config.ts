import type { NextConfig } from "next";

/**
 * Static export — `npm run build` emits a plain `out/` folder.
 * No server needed, so it hosts anywhere.
 *
 * Next is pinned to 15.1.6 rather than tracking 15.5.x: the newer line
 * segfaults during build in our sandbox. Neyam is on 15.5.22 and builds
 * fine on the host, so this is a build-environment pin, not a bug in Next —
 * worth revisiting once the sandbox is upgraded.
 */
/**
 * GitHub Pages serves this at /gundalwada/, so the deploy workflow sets
 * NEXT_PUBLIC_BASE_PATH. Unset it and everything builds for a root deploy
 * instead — that is all a move to a custom domain takes.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    // next/image optimisation needs a server; static export requires this off.
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
