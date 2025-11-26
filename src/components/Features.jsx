"use client";

import React, { useRef } from "react";
import {
  FiZap,
  FiTrendingUp,
  FiCpu,
  FiImage,
  FiTerminal,
  FiRepeat,
  FiFastForward,
} from "react-icons/fi";

const cardsTop = [
  {
    id: "memories",
    title: "Memories",
    description:
      "Cascade will remember important things about your codebase and workflow.",
    icon: FiZap,
  },
  {
    id: "lint",
    title: "Lint Fixing",
    description:
      "Cascade will automatically detect and fix lint errors that it generates.",
    icon: FiTrendingUp,
  },
  {
    id: "mcp",
    title: "MCP Support",
    description:
      "Enhance your AI workflows by connecting custom tools and services. Access curated MCP servers in Windsurf settings for one click set-up.",
    icon: FiCpu,
    wide: true, // spans 2 cols
  },
];

const cardsBottom = [
  {
    id: "drag",
    title: "Drag & Drop Images",
    description:
      "Build your designs instantly by dropping an image into Cascade.",
    icon: FiImage,
  },
  {
    id: "terminal",
    title: "Terminal Command",
    description:
      "Don't remember a terminal command? Just ⌘+I terminal to stay in flow.",
    icon: FiTerminal,
  },
  {
    id: "continue",
    title: "Continue My Work",
    description:
      "Cascade keeps track of your actions so you can just tell it to continue what you’re doing.",
    icon: FiRepeat,
  },
  {
    id: "turbo",
    title: "Turbo Mode",
    description:
      "Turn on Turbo mode in settings to allow Cascade to auto-execute terminal commands.",
    icon: FiFastForward,
  },
];

function CardBody({ id }) {
  switch (id) {
    case "memories":
      return (
        <div className="flex h-full flex-col justify-end px-10 pb-8 text-xs text-white">
          <div className="flex flex-1 flex-col justify-end gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <p className="text-xs">Rules</p>
                <p className="text-xs text-white/40">Refresh</p>
              </div>
              <div className="flex flex-col gap-1 rounded-sm border border-white/20 bg-white/10 p-2">
                <p className="text-xs"># Front end</p>
                <p className="text-xs">- Follow Next.js patterns</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <p className="text-xs">Memories</p>
                <div className="flex items-center text-[10px] text-white/50">
                  Search memories
                </div>
              </div>
              <div className="flex flex-col gap-1 rounded-t-sm border-x border-t border-white/20 bg-white/10 p-2">
                <p className="text-xs">Codebase Structure</p>
                <p className="text-xs text-white/30">
                  #codebase_structure #typescript
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    case "lint":
      return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 pb-8 text-xs text-white">
          <div className="flex h-full w-fit flex-col justify-center gap-3">
            <div className="mr-5 flex w-56 items-end justify-between gap-5 rounded-sm border border-white/20 bg-white/10 p-1.5">
              <div className="flex w-full items-center gap-1">
                <span className="inline-flex h-3 w-3 items-center justify-center rounded-full border border-white/60 text-[8px]">
                  !
                </span>
                <p className="text-xs">4 new linter errors</p>
              </div>
              <div className="flex items-center gap-1 whitespace-nowrap text-[9px] text-white/60">
                Auto-fix on
                <span>▾</span>
              </div>
            </div>

            <div className="flex w-full justify-end">
              <div className="flex w-fit items-center gap-5 rounded-sm border border-white/20 bg-white/10 p-1.5">
                <div className="flex items-center gap-1">
                  <span className="relative inline-block h-3 w-3 rounded border border-white/70" />
                  <p className="text-xs text-white">Edited</p>
                  <div className="mr-20 flex items-center rounded border border-white/50 bg-white/10 px-1 pr-3 font-mono text-[9px] text-white">
                    panel.ts
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-56 items-center gap-5 rounded-sm border border-white/20 bg-white/10 p-1.5">
              <div className="flex items-center gap-1">
                <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-white" />
                <p className="text-xs text-white">0 new linter errors found</p>
              </div>
            </div>
          </div>
        </div>
      );

    case "mcp":
      return (
        <div className="flex h-full flex-col justify-end px-10 pb-8 text-xs text-white">
          <div className="flex items-center justify-between gap-14">
            <div className="mb-8 flex h-full flex-col justify-end gap-10">
              <div className="flex flex-col">
                {[
                  ["Figma", "5 tools"],
                  ["Slack", "7 tools"],
                  ["Stripe", "9 tools"],
                  ["Sequential Thinking", "3 tools", true],
                ].map(([name, tools, dim], idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="rounded-full bg-white/30 p-1">
                      <div
                        className={`h-1.5 w-1.5 rounded-full ${
                          dim ? "bg-white/70" : "bg-teal-300"
                        }`}
                      />
                    </div>
                    <p className="text-white">
                      {name}{" "}
                      <span className="text-white/50">{tools}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex max-w-xl flex-col rounded-t-lg border-x border-t border-white/50 bg-white/20 p-5">
              <div className="z-10 flex min-w-44 shrink-0 flex-col">
                <div className="mb-4 flex w-full items-center justify-between gap-16">
                  <p className="text-xs font-medium tracking-[-0.034rem] text-white">
                    Plugin Store
                  </p>
                  <p className="text-xs font-medium text-white/50">
                    Manage Plugins
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {["GitHub", "PostgresSQL", "Playwright", "Neon"].map(
                    (name) => (
                      <div
                        key={name}
                        className="flex items-center justify-between"
                      >
                        <p className="text-xs font-medium text-white/50">
                          {name}
                        </p>
                        <p className="text-xs font-medium text-white/50">
                          Add server +
                        </p>
                      </div>
                    )
                  )}
                  {["Figma", "Slack"].map((name) => (
                    <div
                      key={name}
                      className="flex items-center justify-between"
                    >
                      <p className="text-xs font-medium text-white/50">
                        {name}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-medium text-white/50">
                          Configure
                        </p>
                        <span className="text-[9px] text-white/50">✏️</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "drag":
      return (
        <div className="flex h-full flex-col justify-center gap-3 px-0 pb-8 text-sm text-white">
          <div className="flex flex-col gap-10">
            <div className="relative flex w-full justify-start overflow-hidden">
              <div className="-ml-12 w-fit">
                <div className="mr-5 flex items-center gap-2 rounded-tr-md border-l border-t border-white/20 bg-white/10 p-2">
                  <div className="flex gap-1">
                    <div className="h-5 w-5 rounded border border-white/40" />
                    <div className="h-5 w-5 rounded border border-white/40" />
                    <div className="h-5 w-5 rounded border border-white/40" />
                  </div>
                </div>
                <div className="flex w-fit items-center gap-5 whitespace-nowrap rounded-r-md border border-white/20 bg-white/10 p-1.5 text-xs">
                  Change my layout to match these designs
                </div>
              </div>
            </div>

            <div className="flex w-full justify-end overflow-hidden">
              <div className="w-fit">
                <div className="ml-5 rounded-tl-md border-l border-t border-white/20 bg-white/10 p-2">
                  <div className="h-5 w-5 rounded border border-white/40" />
                </div>
                <div className="flex w-fit items-center gap-5 whitespace-nowrap rounded-l-md border border-white/20 bg-white/10 p-1.5 text-xs">
                  Build out my designs
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "terminal":
      return (
        <div className="flex h-full flex-col justify-center gap-6 pl-10 pr-6 pb-8 text-xs text-white">
          <div className="flex w-full items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <p className="font-mono text-xs text-white">Problems Output</p>
              <div className="flex items-center rounded border border-white/50 bg-white/10 px-1 font-mono text-sm text-white">
                Terminal
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 overflow-hidden">
            <p className="font-mono text-xs text-white/30">
              user@Mac portfolio %
            </p>
            <div className="flex w-fit flex-col gap-1 whitespace-nowrap rounded-l-sm border border-white/20 bg-white/10 p-1.5 text-sm text-white">
              <span>Create a compressed archive of this directory</span>
              <span className="text-xs text-white/40">Windsurf Fast</span>
            </div>
          </div>
        </div>
      );

    case "continue":
      return (
        <div className="flex h-full flex-col justify-center gap-2 pl-16 pr-4 pb-8 text-xs text-white">
          <div className="flex w-full justify-end">
            <div className="flex w-[90%] items-center gap-5 rounded-l-lg border-y border-l border-white/50 bg-white/10 p-1.5">
              Continue my work
            </div>
          </div>
          <div className="flex w-full justify-end">
            <div className="flex w-[80%] items-center gap-5 rounded-l-lg border-y border-l border-white/50 bg-white/10 p-1.5">
              <div className="flex items-center gap-1">
                <span className="relative inline-block h-3 w-3 rounded border border-white/70" />
                <p className="text-xs text-white">Edited</p>
                <div className="flex items-center rounded border border-white/50 bg-white/10 px-1 pr-3 font-mono text-[9px] text-white">
                  Navbar.tsx
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end">
            <div className="flex w-[70%] items-center gap-5 rounded-l-lg border-y border-l border-white/50 bg-white/10 p-1.5">
              <div className="flex items-center gap-1">
                <span className="relative inline-block h-3 w-3 rounded border border-white/70" />
                <p className="text-xs text-white">Edited</p>
                <div className="mr-20 flex items-center rounded border border-white/50 bg-white/10 px-1 pr-3 font-mono text-[9px] text-white">
                  Dropdown.tsx
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "turbo":
      return (
        <div className="flex h-full flex-col justify-center px-5 pb-8 text-xs text-white">
          <div className="relative flex h-40 flex-col items-center justify-center overflow-hidden rounded-lg border border-white/50 bg-white/10 p-5">
            <div className="z-10 flex items-center gap-2 rounded-lg border border-white/50 bg-white/10 px-2 py-1">
              <p className="text-lg font-medium text-white">Turbo</p>
              <span className="text-xs">▾</span>
            </div>

            <div className="absolute left-5 top-3 flex w-fit items-center gap-5 rounded-lg border border-white/50 bg-white/10 p-1.5">
              <div className="flex items-center gap-1">
                <span className="relative inline-block h-3 w-3 rounded border border-white/70" />
                <p className="text-xs text-white">Edited</p>
              </div>
            </div>

            <div className="absolute left-32 top-4 flex w-fit items-center gap-5 rounded-lg border border-white/50 bg-white/10 p-1.5">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <span className="relative inline-block h-3 w-3 rounded border border-white/70" />
                <p className="text-xs text-white">Ran Terminal Command</p>
              </div>
            </div>

            <div className="absolute left-1 top-14 flex w-fit items-center gap-5 rounded-lg border border-white/50 bg-white/10 p-1.5">
              <div className="flex items-center gap-1">
                <span className="relative inline-block h-3 w-3 rounded border border-white/70" />
                <p className="text-xs text-white">Created</p>
              </div>
            </div>

            <div className="absolute left-52 top-16 flex w-fit items-center gap-5 rounded-lg border border-white/50 bg-white/10 p-1.5">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <span className="relative inline-block h-3 w-3 rounded border border-white/70" />
                <p className="text-xs text-white">Ran Preview</p>
              </div>
            </div>

            <div className="absolute bottom-3 left-2 flex w-fit items-center gap-5 rounded-lg border border-white/50 bg-white/10 p-1.5">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <span className="relative inline-block h-3 w-3 rounded border border-white/70" />
                <p className="text-xs text-white">Searched nextjs.org</p>
              </div>
            </div>

            <div className="absolute bottom-4 left-44 flex w-fit items-center gap-5 rounded-lg border border-white/50 bg-white/10 p-1.5">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <span className="relative inline-block h-3 w-3 rounded border border-white/70" />
                <p className="text-xs text-white">Deployed app</p>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function WindsurfFeatures() {
  const containerRef = useRef(null);
  const gradientRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current || !gradientRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const xNorm = (e.clientX - rect.left) / rect.width; // 0–1
    const yNorm = (e.clientY - rect.top) / rect.height;

    // Windsurf base center:
    const baseX = 88.4514;
    const baseY = 10.9267;

    // how far the glow can move (in percentage points)
    const rangeX = 10; // tweak if you want more drama
    const rangeY = 8;

    const cx = baseX + (xNorm - 0.5) * rangeX;
    const cy = baseY + (yNorm - 0.5) * rangeY;

    gradientRef.current.style.background = `
      radial-gradient(
        146.64% 134.09% at ${cx}% ${cy}%,
        rgb(255, 228, 122) 0.1%,
        rgb(251, 156, 229) 17.31%,
        rgb(9, 111, 255) 29.33%,
        rgb(1, 28, 66) 60.58%
      )
    `;
  };

  const handleMouseLeave = () => {
    if (!gradientRef.current) return;
    gradientRef.current.style.background = `
      radial-gradient(
        146.64% 134.09% at 88.4514% 10.9267%,
        rgb(255, 228, 122) 0.1%,
        rgb(251, 156, 229) 17.31%,
        rgb(9, 111, 255) 29.33%,
        rgb(1, 28, 66) 60.58%
      )
    `;
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-36">
      {/* Header */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start gap-8 px-5 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <div className="h-1.5 w-1.5 rounded-full bg-sky-900" />
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-700">
              FEATURES
            </p>
          </div>
          <h4 className="text-start text-4xl font-semibold leading-tight text-slate-900 md:text-end md:text-5xl">
            One editor.
            <br />
            Unlimited superpowers.
          </h4>
        </div>
      </div>

      {/* Full-width area */}
      <div className="relative left-1/2 right-1/2 mx-[-50vw] w-screen pl-5">
        <div
          ref={containerRef}
          className="relative mx-auto h-200 w-full max-w-7xl overflow-x-auto overflow-y-hidden bg-white pl-5 pr-5 md:pl-0 xl:overflow-x-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* SVG mask (same grid as Windsurf) */}
          <svg
            className="pointer-events-none absolute left-0 -top-20 z-0 -translate-x-[312px]"
            width="1748.4"
            height="1082.88"
          >
            <mask
              id="features-mask"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1748.4"
              height="1082.88"
            >
              <rect width="100%" height="100%" fill="black" />
              {/* Top row */}
              <rect
                x="0"
                y="80"
                width="304"
                height="380"
                rx="6"
                ry="6"
                fill="white"
              />
              <rect
                x="312"
                y="80"
                width="304"
                height="380"
                rx="6"
                ry="6"
                fill="white"
              />
              <rect
                x="624"
                y="80"
                width="304"
                height="380"
                rx="6"
                ry="6"
                fill="white"
              />
              <rect
                x="936"
                y="80"
                width="616"
                height="380"
                rx="6"
                ry="6"
                fill="white"
              />
              {/* Bottom row */}
              <rect
                x="0"
                y="468"
                width="304"
                height="380"
                rx="6"
                ry="6"
                fill="white"
              />
              <rect
                x="312"
                y="468"
                width="304"
                height="380"
                rx="6"
                ry="6"
                fill="white"
              />
              <rect
                x="624"
                y="468"
                width="304"
                height="380"
                rx="6"
                ry="6"
                fill="white"
              />
              <rect
                x="936"
                y="468"
                width="304"
                height="380"
                rx="6"
                ry="6"
                fill="white"
              />
              <rect
                x="1248"
                y="468"
                width="304"
                height="380"
                rx="6"
                ry="6"
                fill="white"
              />
            </mask>
          </svg>

          {/* Moving radial gradient UNDER mask, independent from grid */}
          <div className="pointer-events-none absolute left-0 -top-20 z-0 -translate-x-[312px]">
            <div
              ref={gradientRef}
              className="h-[1082.88px] w-[1748.4px] blur-[30px]"
              style={{
                background:
                  "radial-gradient(146.64% 134.09% at 88.4514% 10.9267%, rgb(255, 228, 122) 0.1%, rgb(251, 156, 229) 17.31%, rgb(9, 111, 255) 29.33%, rgb(1, 28, 66) 60.58%)",
                WebkitMaskImage: "url(#features-mask)",
                maskImage: "url(#features-mask)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />
          </div>

          {/* Card grid – fixed, with white gaps between */}
          <div
            className="absolute left-0 top-0 z-10 grid grid-cols-4 gap-2"
            style={{ width: "1240px", height: "768px" }}
          >
            {/* Top row first two cards */}
            {cardsTop.slice(0, 2).map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="col-span-1 flex flex-col items-center justify-center rounded-md outline outline-white"
                  style={{ height: "380px" }}
                >
                  <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-md">
                    <div className="flex min-h-[10.063rem] max-h-[10.063rem] flex-col gap-4 rounded-t-md px-7 pb-5 pt-10">
                      <div className="flex items-center gap-2">
                        <Icon className="h-8 w-auto text-white" />
                        <p className="text-base font-medium text-white transition-[text-shadow] duration-700 group-hover:[text-shadow:0px_2px_5px_rgba(0,0,0,0.2)]">
                          {card.title}
                        </p>
                      </div>
                      <p className="text-sm text-white transition-[text-shadow] duration-700 group-hover:[text-shadow:0px_2px_5px_rgba(0,0,0,0.2)]">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col overflow-hidden rounded-b-md">
                      <CardBody id={card.id} />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Wide MCP card (col-span-2) */}
            {(() => {
              const card = cardsTop[2];
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="col-span-2 flex flex-col items-center justify-center rounded-md outline outline-white"
                  style={{ height: "380px" }}
                >
                  <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-md">
                    <div className="flex min-h-[10.063rem] max-h-[10.063rem] flex-col gap-4 rounded-t-md px-7 pb-5 pt-10">
                      <div className="flex items-center gap-2">
                        <Icon className="h-8 w-auto text-white" />
                        <p className="text-base font-medium text-white transition-[text-shadow] duration-700 group-hover:[text-shadow:0px_2px_5px_rgba(0,0,0,0.2)]">
                          {card.title}
                        </p>
                      </div>
                      <p className="text-sm text-white transition-[text-shadow] duration-700 group-hover:[text-shadow:0px_2px_5px_rgba(0,0,0,0.2)]">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col overflow-hidden rounded-b-md">
                      <CardBody id="mcp" />
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Bottom row 4 cards */}
            {cardsBottom.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="col-span-1 flex flex-col items-center justify-center rounded-md outline outline-white"
                  style={{ height: "380px" }}
                >
                  <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-md">
                    <div className="flex min-h-[10.063rem] max-h-[10.063rem] flex-col gap-4 rounded-t-md px-7 pb-5 pt-10">
                      <div className="flex items-center gap-2">
                        <Icon className="h-8 w-auto text-white" />
                        <p className="text-base font-medium text-white transition-[text-shadow] duration-700 group-hover:[text-shadow:0px_2px_5px_rgba(0,0,0,0.2)]">
                          {card.title}
                        </p>
                      </div>
                      <p className="text-sm text-white transition-[text-shadow] duration-700 group-hover:[text-shadow:0px_2px_5px_rgba(0,0,0,0.2)]">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col overflow-hidden rounded-b-md">
                      <CardBody id={card.id} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
