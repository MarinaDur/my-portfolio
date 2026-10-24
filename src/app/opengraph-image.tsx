import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// The preview card shown when the site is shared (LinkedIn, WhatsApp, Slack…).
export const alt = "Marina Durmishov — I build websites that look good and work even better.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const photo = `data:image/jpeg;base64,${await readFile(join(process.cwd(), "public/marina-headshot.jpg"), "base64")}`;
const bricolage = await readFile(join(process.cwd(), "src/assets/BricolageGrotesque-ExtraBold.ttf"));

const ladybug = (
  <svg width="64" height="64" viewBox="0 0 32 32">
    <circle cx="16" cy="9" r="5" fill="#2B1D16" />
    <ellipse cx="16" cy="19" rx="11" ry="10" fill="#E2412E" stroke="#2B1D16" strokeWidth="2" />
    <path d="M16 9v20" stroke="#2B1D16" strokeWidth="2" />
    <circle cx="10.5" cy="17" r="2" fill="#2B1D16" />
    <circle cx="21.5" cy="17" r="2" fill="#2B1D16" />
    <circle cx="11.5" cy="23.5" r="1.6" fill="#2B1D16" />
    <circle cx="20.5" cy="23.5" r="1.6" fill="#2B1D16" />
  </svg>
);

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#F4ECE1", padding: 36, gap: 24, fontFamily: "Bricolage" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            background: "#B4502B",
            color: "#FFF7EE",
            borderRadius: 40,
            padding: "52px 56px",
          }}
        >
          <div style={{ display: "flex", fontSize: 30, letterSpacing: "-0.03em" }}>
            marina<span style={{ color: "#2B1D16" }}>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 66, lineHeight: 1.02, letterSpacing: "-0.045em" }}>
            I build websites that look good and work even better.
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#F4C6A6", letterSpacing: "-0.01em" }}>
            Web developer &amp; QA engineer · marinadurmishov.com
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 330, gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
          <img src={photo} width={330} height={330} style={{ borderRadius: 40, objectFit: "cover" }} alt="" />
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              gap: 18,
              background: "#2B1D16",
              color: "#FF8FAB",
              borderRadius: 40,
              padding: "0 30px",
              fontSize: 30,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {ladybug}
            <span>Can you catch all 5 bugs?</span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Bricolage", data: bricolage, weight: 800, style: "normal" }] },
  );
}
