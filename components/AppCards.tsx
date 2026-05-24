"use client";

import { Download, Github, Shield, Cpu } from "lucide-react";

interface AppCardProps {
  letter: string;
  iconClass: string;
  cardClass?: string;
  name: string;
  tagline: string;
  description: string;
  badges: { label: string; accent?: boolean }[];
  dmgUrl: string;
  githubUrl: string;
  requirements: string;
  accentVariant?: "top-bar" | "side-bar";
  animDelay: string;
}

function AppCard({
  letter,
  iconClass,
  cardClass = "",
  name,
  tagline,
  description,
  badges,
  dmgUrl,
  githubUrl,
  requirements,
  accentVariant = "top-bar",
  animDelay,
}: AppCardProps) {
  return (
    <article
      className={`app-card ${cardClass} reveal`}
      style={{
        borderRadius: "8px",
        padding: "clamp(1.5rem, 4vw, 2.5rem)",
        animationDelay: animDelay,
      }}
    >
      {/* Accent top bar */}
      {accentVariant === "top-bar" && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, var(--col-jade) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Accent side bar (card B variant) */}
      {accentVariant === "side-bar" && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "2px",
            background:
              "linear-gradient(180deg, transparent 0%, var(--col-border2) 40%, transparent 100%)",
          }}
        />
      )}

      {/* Header: icon + name */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <div
          className={`app-icon-placeholder ${iconClass}`}
          role="img"
          aria-label={`${name} app icon placeholder`}
        >
          {letter}
        </div>
        <div style={{ paddingTop: "0.25rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.625rem",
              letterSpacing: "-0.025em",
              lineHeight: 1,
              color: "var(--col-text)",
              marginBottom: "0.35rem",

            }}
          >
            {name}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "var(--col-jade-glow)",
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            {tagline}
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="hr-fine" style={{ marginBottom: "1.25rem" }} />

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.9375rem",
          color: "var(--col-muted)",
          lineHeight: "1.7",
          marginBottom: "1.5rem",
        }}
      >
        {description}
      </p>

      {/* Tech badges */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          marginBottom: "1.75rem",
        }}
        role="list"
        aria-label="Technologies used"
      >
        {badges.map((b) => (
          <span
            key={b.label}
            className={`tech-badge ${b.accent ? "tech-badge-accent" : ""}`}
            role="listitem"
          >
            {b.label}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginBottom: "1.25rem",
        }}
      >
        <a
          href={dmgUrl}
          className="btn-primary"
          download
          aria-label={`Download ${name} as a .dmg file`}
        >
          <Download size={14} strokeWidth={2} aria-hidden="true" />
          Download .dmg
        </a>
        <a
          href={githubUrl}
          className="btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} source code on GitHub`}
        >
          <Github size={14} strokeWidth={1.5} aria-hidden="true" />
          GitHub
        </a>
      </div>

      {/* Requirements */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.6875rem",
          color: "var(--col-faint)",
          letterSpacing: "0.04em",
          display: "flex",
          alignItems: "center",
          gap: "0.375rem",
        }}
      >
        <Cpu size={11} strokeWidth={1.5} aria-hidden="true" />
        {requirements}
      </p>
    </article>
  );
}

export default function AppCards() {
  return (
    <section
      aria-labelledby="apps-heading"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding:
          "clamp(4rem, 10vh, 7rem) clamp(1.25rem, 5vw, 3.5rem)",
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: "3rem" }}>
        <p className="section-label reveal delay-0" style={{ marginBottom: "0.75rem" }}>
          The Work
        </p>
        <h2
          id="apps-heading"
          className="reveal delay-1"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "var(--col-text)",
            maxWidth: "22ch",
          }}
        >
          Two apps.{" "}
          <span
            style={{
              fontStyle: "italic",
              color: "var(--col-muted)",
            }}
          >
            One principle.
          </span>
        </h2>
      </div>

      <div className="cards-grid">
        {/* Card A — Humanizer */}
        <AppCard
          letter="H"
          iconClass="app-icon-h"
          name="Humanizer"
          tagline="Make your writing sound like you again."
          description="Humanizer detects AI-generated text with a locally-running MLX model on Apple Silicon, then rewrites it in a natural human voice using Apple's on-device Foundation Models (Apple Intelligence). Processing happens entirely on your Mac — your words never touch a server."
          badges={[
            { label: "Swift 6", accent: true },
            { label: "SwiftUI" },
            { label: "MLX" },
            { label: "MLX-Swift-LM" },
            { label: "Apple Foundation Models", accent: true },
            { label: "SwiftData" },
            { label: "Apple Silicon" },
          ]}
          dmgUrl="https://github.com/akv2011/Humanizer/releases/latest/download/Humanizer.dmg"
          githubUrl="https://github.com/akv2011/Humanizer"
          requirements="Requires macOS 14 Sonoma or later · Apple Silicon"
          accentVariant="top-bar"
          animDelay="0.55s"
        />

        {/* Card B — Voice_ */}
        <AppCard
          letter="V_"
          iconClass="app-icon-v"
          cardClass="app-card-b"
          name="Voice_"
          tagline="Your conversations, understood deeply."
          description="Voice_ is a conversation journal for macOS Tahoe. It records mic or system audio, live-transcribes with WhisperKit, performs speaker diarization, translates with cultural nuance, summarizes with context, and reads back via neural TTS. Every step runs entirely on-device."
          badges={[
            { label: "Swift 6", accent: true },
            { label: "SwiftUI" },
            { label: "WhisperKit", accent: true },
            { label: "FluidAudio" },
            { label: "SpeakerKit" },
            { label: "TTSKit" },
            { label: "SwiftData" },
          ]}
          dmgUrl="https://github.com/akv2011/Voice_/releases/latest/download/Voice.dmg"
          githubUrl="https://github.com/akv2011/Voice_"
          requirements="Requires macOS 26 Tahoe · Apple Silicon"
          accentVariant="side-bar"
          animDelay="0.72s"
        />
      </div>

      {/* Privacy assurance strip */}
      <div
        className="reveal delay-6"
        style={{
          marginTop: "2.5rem",
          padding: "1rem 1.5rem",
          borderRadius: "4px",
          border: "1px solid var(--col-border)",
          background: "rgba(77, 140, 111, 0.04)",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <Shield
          size={16}
          strokeWidth={1.5}
          style={{ color: "var(--col-jade)", flexShrink: 0 }}
          aria-hidden="true"
        />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8125rem",
            color: "var(--col-muted)",
            lineHeight: 1.5,
          }}
        >
          <strong
            style={{ color: "var(--col-text)", fontWeight: 600 }}
          >
            Zero network requests.
          </strong>{" "}
          Both apps are sandboxed macOS applications. No telemetry, no analytics,
          no accounts. Your data stays on your Mac — permanently.
        </p>
      </div>
    </section>
  );
}
