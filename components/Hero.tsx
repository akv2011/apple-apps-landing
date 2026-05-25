"use client";

import { ChevronDown } from "lucide-react";

const marqueeItems = [
  "Swift 6",
  "SwiftUI",
  "Apple Silicon",
  "On-Device ML",
  "MLX",
  "Foundation Models",
  "WhisperKit",
  "SwiftData",
  "Privacy First",
  "macOS Native",
];

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      style={{
        paddingTop: "clamp(5rem, 14vh, 9rem)",
        paddingBottom: "5rem",
        position: "relative",
      }}
    >
      {/* Background decorative number */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "0",
          right: "-2%",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: "0.85",
          zIndex: 0,
        }}
      >
        <span className="hero-deco-num reveal-fade delay-0">02</span>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 5vw, 3.5rem)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section label */}
        <p className="section-label reveal delay-0" style={{ marginBottom: "1.75rem" }}>
          Portfolio&nbsp;&nbsp;/&nbsp;&nbsp;Apple Developer Academy @ BINUS Application
        </p>

        {/* Main headline */}
        <h1
          className="hero-headline reveal delay-1"
          style={{ maxWidth: "18ch", marginBottom: "2rem" }}
        >
          Native macOS apps that{" "}
          <em>respect</em>
          <br />
          your privacy.
        </h1>

        {/* Sub-headline */}
        <p
          className="reveal delay-2"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2.2vw, 1.1875rem)",
            color: "var(--col-muted)",
            maxWidth: "46ch",
            lineHeight: "1.7",
            marginBottom: "3rem",
            fontWeight: 400,
          }}
        >
          Everything runs on‑device on Apple Silicon.{" "}
          <span
            style={{
              color: "var(--col-text)",
              fontStyle: "italic",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
            }}
          >
            Your text, your voice, your machine.
          </span>{" "}
          No cloud. No accounts. No surveillance.
        </p>

        {/* Author line */}
        <div
          className="reveal delay-3"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "5rem",
          }}
        >
          {/* Avatar placeholder */}
          <div
            aria-hidden="true"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, var(--col-jade-dim) 0%, var(--col-jade) 100%)",
              border: "1px solid var(--col-jade-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#fff",
              fontStyle: "italic",
              flexShrink: 0,
            }}
          >
            A
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "var(--col-text)",
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              Arunkumar V
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                color: "var(--col-muted)",
                lineHeight: 1.2,
              }}
            >
              Swift Developer · On-device ML
            </p>
          </div>
          <div
            style={{
              height: "24px",
              width: "1px",
              background: "var(--col-border2)",
              marginLeft: "0.25rem",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "var(--col-muted)",
            }}
          >
            Two apps&nbsp;&nbsp;·&nbsp;&nbsp;100% on-device
          </p>
        </div>

        {/* Scroll hint */}
        <div
          className="scroll-hint"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.35rem",
          }}
        >
          <span
            style={{
              fontSize: "0.625rem",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--col-faint)",
            }}
          >
            Scroll
          </span>
          <ChevronDown
            size={16}
            strokeWidth={1.5}
            style={{ color: "var(--col-muted)" }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Marquee stripe */}
      <div
        className="marquee-track reveal-fade delay-4"
        style={{ marginTop: "4rem" }}
        aria-hidden="true"
      >
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
