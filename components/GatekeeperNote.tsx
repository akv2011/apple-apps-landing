"use client";

import { Info, MousePointerClick, FolderOpen } from "lucide-react";

export default function GatekeeperNote() {
  return (
    <section
      aria-labelledby="gatekeeper-heading"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 clamp(1.25rem, 5vw, 3.5rem) clamp(4rem, 10vh, 7rem)",
      }}
    >
      <div
        className="gatekeeper-card reveal delay-0"
        style={{
          borderRadius: "8px",
          padding: "clamp(1.75rem, 5vw, 2.75rem)",
          maxWidth: "760px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.875rem",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "var(--col-jade-bg)",
              border: "1px solid var(--col-jade-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: "1px",
            }}
          >
            <Info
              size={16}
              strokeWidth={1.5}
              style={{ color: "var(--col-jade-glow)" }}
              aria-hidden="true"
            />
          </div>
          <div>
            <h2
              id="gatekeeper-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.25rem",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "var(--col-text)",
                marginBottom: "0.35rem",
              }}
            >
              Opening unsigned apps on macOS
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                color: "var(--col-muted)",
                lineHeight: 1.5,
              }}
            >
              A quick, one-time step, macOS remembers your choice.
            </p>
          </div>
        </div>

        {/* Context paragraph */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            color: "var(--col-muted)",
            lineHeight: "1.7",
            marginBottom: "1.75rem",
            paddingLeft: "0",
          }}
        >
          These apps are built by an independent developer who does not yet hold a
          paid Apple Developer Program membership. macOS Gatekeeper may show a
          dialog reading{" "}
          <span
            style={{
              color: "var(--col-text)",
              fontStyle: "italic",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
            }}
          >
            &ldquo;App can&rsquo;t be opened because it is from an unidentified developer.&rdquo;
          </span>{" "}
          This is expected. Getting past it takes two clicks:
        </p>

        {/* Steps */}
        <ol
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "1.75rem",
          }}
          aria-label="Steps to open the app"
        >
          <li className="gatekeeper-step">
            <span className="gatekeeper-num tabular-nums" aria-hidden="true">
              1
            </span>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--col-muted)",
                  lineHeight: 1.6,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <FolderOpen
                  size={14}
                  strokeWidth={1.5}
                  style={{ color: "var(--col-jade)", flexShrink: 0 }}
                  aria-hidden="true"
                />
                Locate the app in{" "}
                <code
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    background: "var(--col-border)",
                    padding: "0.1em 0.45em",
                    borderRadius: "3px",
                    color: "var(--col-text)",
                  }}
                >
                  /Applications
                </code>{" "}
                →{" "}
                <span className="gatekeeper-bold">
                  right-click it
                </span>{" "}
                → choose{" "}
                <span className="gatekeeper-bold">Open</span>
              </p>
            </div>
          </li>

          <li className="gatekeeper-step">
            <span className="gatekeeper-num tabular-nums" aria-hidden="true">
              2
            </span>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--col-muted)",
                  lineHeight: 1.6,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <MousePointerClick
                  size={14}
                  strokeWidth={1.5}
                  style={{ color: "var(--col-jade)", flexShrink: 0 }}
                  aria-hidden="true"
                />
                In the dialog that appears, click{" "}
                <span className="gatekeeper-bold">Open</span>
              </p>
            </div>
          </li>
        </ol>

        {/* Reassurance footer */}
        <div
          style={{
            padding: "0.875rem 1.125rem",
            borderRadius: "4px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid var(--col-border)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "var(--col-muted)",
              lineHeight: 1.55,
            }}
          >
            macOS stores your approval and will open the app normally on every
            subsequent launch.{" "}
            <span style={{ color: "var(--col-text)", fontWeight: 500 }}>
              You only need to do this once.
            </span>{" "}
            Source code for both apps is publicly available on GitHub, you are
            welcome to audit it before running anything.
          </p>
        </div>
      </div>
    </section>
  );
}
