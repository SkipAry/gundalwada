/**
 * Prefixes a root-relative public asset path with the deployment base path.
 *
 * GitHub Pages serves a project site from /<repo>/ rather than /, and Next's
 * own `basePath` only rewrites next/link and next/image — neither of which
 * this site uses. Every <img>, <video>, <source> and <link> path therefore
 * has to carry the prefix itself, and this is the single place that happens.
 *
 * Leave NEXT_PUBLIC_BASE_PATH unset for a root deploy — `next dev`, a custom
 * domain, or any host that serves from / — and this becomes a no-op.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
