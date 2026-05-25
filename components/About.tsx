"use client";

import { Code2, Brain, Lock } from "lucide-react";

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      style={{
        borderTop: "1px solid var(--col-border)",
        borderBottom: "1px solid var(--col-border)",
        background: "var(--col-surface)",
        padding: "clamp(4rem, 10vh, 7rem) 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 5vw, 3.5rem)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2.5rem, 6vw, 5rem)",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left column, label + pillars */}
          <div style={{ maxWidth: "280px" }}>
            <p
              className="section-label reveal delay-0"
              style={{ marginBottom: "1rem" }}
            >
              About the Developer
            </p>

            <div
              className="reveal delay-2"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                marginTop: "2.5rem",
              }}
            >
              {[
                {
                  icon: <Code2 size={15} strokeWidth={1.5} aria-hidden="true" />,
                  label: "Swift & SwiftUI",
                  sub: "Native-first, platform-native",
                },
                {
                  icon: <Brain size={15} strokeWidth={1.5} aria-hidden="true" />,
                  label: "On-device ML",
                  sub: "MLX, WhisperKit, Foundation Models",
                },
                {
                  icon: <Lock size={15} strokeWidth={1.5} aria-hidden="true" />,
                  label: "Privacy by design",
                  sub: "Zero telemetry, zero cloud",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      color: "var(--col-jade)",
                      marginTop: "1px",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--col-text)",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        marginBottom: "0.15rem",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        color: "var(--col-muted)",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column, text */}
          <div style={{ maxWidth: "640px" }}>
            <h2
              id="about-heading"
              className="reveal delay-1"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--col-text)",
                marginBottom: "2rem",
              }}
            >
              Built by someone who believes the best software{" "}
              <em style={{ color: "var(--col-jade-glow)" }}>disappears</em>.
            </h2>

            <div
              className="reveal delay-3"
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <p
                className="drop-cap"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--col-muted)",
                  lineHeight: "1.75",
                }}
              >
                I am Arunkumar V, an independent developer focused on Swift and the Apple platform ecosystem,
                specifically the intersection of native macOS app architecture,
                on-device machine learning with MLX, and the emerging capabilities
                unlocked by Apple Silicon. I believe software should feel
                inevitable: fast, private, and deeply integrated with the hardware
                it runs on.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--col-muted)",
                  lineHeight: "1.75",
                }}
              >
                Humanizer and Voice_ are not experiments, they are finished,
                usable tools I built to solve problems I actually had. Both
                demonstrate the same conviction: that privacy-first{" "}
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 500,
                    color: "var(--col-text)",
                  }}
                >
                  &amp;
                </span>{" "}
                on-device AI are not marketing claims but engineering choices
                made at the architecture level. Everything these apps do, they do
                on your Mac, using Apple&rsquo;s own frameworks and the compute
                advantage of Apple Silicon.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
