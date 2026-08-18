/**
 * ORNAMENTS — original line work drawn for Gundal Wada.
 *
 * Every motif here is traced from the client's own photographs and footage
 * of THIS building, not from a generic "Indian heritage" vocabulary:
 *
 *   CuspedArch   the foliated arch that repeats along the verandah arcade
 *                and again as the niche in the back wall of the hall
 *   Chowk        the sunken square courtyard with its tulsi vrindavan
 *   Valance      the scalloped timber eave trim over the courtyard
 *
 * Nothing is traced from existing artwork — these are constructed from
 * geometry, the way the originals were.
 *
 * All strokes are currentColor so a parent recolours them, and every node
 * is aria-hidden: none of this is content.
 */

/* ── Cusped arch ─────────────────────────────────────────────
   The primary mark. Nine foils over a rectangular opening, which is what
   the arcade actually carries. Drawn as one continuous path so the
   stroke-dash animation traces it in a single motion. */
export function CuspedArch({
  className = "",
  width = 220,
}: {
  className?: string;
  width?: number;
}) {
  /**
   * The head is a true semicircle of radius R about (cx, cy), divided into
   * `foils` equal segments. Each segment is replaced by a small arc that
   * bulges INWARD (sweep 0), which is what produces the cusps between the
   * lobes — a foliated arch is a semicircle eaten into, not a row of bumps
   * sitting on a line.
   */
  const foils = 7;
  const cx = 110;
  const cy = 132;
  const R = 96;
  const pt = (t: number) => [cx + R * Math.cos(t), cy - R * Math.sin(t)] as const;

  let d = `M ${cx - R} 176 L ${cx - R} ${cy}`;
  for (let i = 0; i < foils; i++) {
    const t1 = Math.PI - ((i + 1) * Math.PI) / foils;
    const [x0, y0] = pt(Math.PI - (i * Math.PI) / foils);
    const [x1, y1] = pt(t1);
    const chord = Math.hypot(x1 - x0, y1 - y0);
    const r = (chord / 2) * 1.02; // a hair over, so the arcs always resolve
    d += ` A ${r.toFixed(2)} ${r.toFixed(2)} 0 0 0 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
  }
  d += ` L ${cx + R} 176`;

  return (
    <svg
      className={className}
      width={width}
      height={(width * 190) / 220}
      viewBox="0 0 220 190"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* the foliated head and its jambs, one continuous stroke */}
      <path d={d} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* impost line, where the arcade's arch meets its pillars */}
      <path
        d={`M ${cx - R - 8} ${cy} L ${cx - R} ${cy} M ${cx + R} ${cy} L ${cx + R + 8} ${cy}`}
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.6"
      />
      {/* keystone drop at the crown */}
      <path
        d={`M ${cx} ${cy - R} L ${cx} ${cy - R + 16}`}
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.7"
      />
    </svg>
  );
}

/* ── Chowk ───────────────────────────────────────────────────
   The seal. Concentric squares are the courtyard's plan; the small plinth
   and leaf at the centre are the tulsi vrindavan that actually stands
   there. The rotated inner square is the open sky. */
export function Chowk({
  className = "",
  size = 132,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 132 132"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* outer wall */}
      <rect x="8" y="8" width="116" height="116" stroke="currentColor" strokeWidth="1.6" />
      {/* the arcade ring */}
      <rect x="22" y="22" width="88" height="88" stroke="currentColor" strokeWidth="1.2" opacity="0.75" />
      {/* the sunken court */}
      <rect x="38" y="38" width="56" height="56" stroke="currentColor" strokeWidth="1.6" />
      {/* open sky, turned on its corner */}
      <path d="M66 30 L102 66 L66 102 L30 66 Z" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      {/* pillars at the four corners of the arcade */}
      <path
        d="M8 8 L22 22 M124 8 L110 22 M8 124 L22 110 M124 124 L110 110"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Tulsi vrindavan — the planted plinth that actually stands at the
          centre of this courtyard. Stepped base, stem, two leaves. */}
      <path
        d="M56 78 L76 78 M58 78 L58 70 L74 70 L74 78 M61 70 L61 65 L71 65 L71 70"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M66 65 L66 54" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M66 58 C61 58 59 55 59 52 C63 52 66 54 66 58 Z
           M66 61 C71 61 73 58 73 55 C69 55 66 57 66 61 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Valance ─────────────────────────────────────────────────
   The scalloped timber trim that runs under the eaves around the
   courtyard. Tiles horizontally at any width via <pattern> in
   userSpaceOnUse units — no viewBox, so the scallops keep their shape
   instead of stretching. */
export function Valance({
  className = "",
  height = 18,
  /** Must be unique per usage — SVG ids are global to the document. */
  uid = "a",
}: {
  className?: string;
  height?: number;
  uid?: string;
}) {
  const id = `valance-${uid}`;
  return (
    <svg
      className={className}
      height={height}
      width="100%"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={id} width="28" height={height} patternUnits="userSpaceOnUse">
          <path
            d={`M0 1 L28 1 M0 1 C0 ${height - 3} 14 ${height - 3} 14 1 C14 ${
              height - 3
            } 28 ${height - 3} 28 1`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <circle cx="14" cy={height - 5} r="0.9" fill="currentColor" opacity="0.7" />
        </pattern>
      </defs>
      <rect width="100%" height={height} fill={`url(#${id})`} />
    </svg>
  );
}

/* ── Tiger ───────────────────────────────────────────────────
   The client's own mark, redrawn as a single-weight silhouette so it can
   sit at small sizes in the nav and footer where the raster logo would
   turn to mush. Simplified from the logo's walking tiger — same posture,
   same direction of travel. */
export function TigerMark({
  className = "",
  width = 44,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={width * 0.46}
      viewBox="0 0 100 46"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 30 C10 26 14 24 20 24 L34 24 C40 24 46 22 52 21 C60 20 68 20 74 22
           C78 23 80 25 82 27 L86 24 C88 22 90 21 93 21 L97 21 L94 25 L96 28
           C94 30 91 31 88 30 L84 34 C82 37 78 38 74 38 L70 38 L70 44
           M60 38 L60 44 M40 26 L40 42 M28 26 L28 42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
