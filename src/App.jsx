import React, { useState } from "react";
import { EncryptedText } from "./components/ui/encrypted-text";
import { CardSpotlight } from "./components/ui/card-spotlight";
import { Meteors } from "./components/ui/meteors";
import { PointerHighlight } from "./components/ui/pointer-highlight";
import { AnimatedShinyButton } from "./components/eldoraui/animated-shiny-button";
import { AnimatedBadge } from "./components/eldoraui/animated-badge";
import { Button } from "./components/ui/button";
import { GravityStarsBackground } from "./components/animate-ui/components/backgrounds/gravity-stars";
import { CursorProvider } from "./components/animate-ui/components/animate/cursor";
import {
  Cursor,
  CursorFollow,
} from "./components/animate-ui/components/animate/cursor";

// Yasir — Ultra-minimal portfolio with enhanced UX and accessibility

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      style={{
        fontFamily:
          'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        scrollBehavior: "smooth",
      }}
      className="min-h-screen bg-black text-white antialiased"
    >
      <GravityStarsBackground className="bg-transparent absolute z-20" />
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-red-500 focus:text-black focus:rounded"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-white hover:text-red-500 transition-colors duration-300"
            aria-label="Home"
          >
            Rahman<span className="text-red-500">.</span>
          </a>

          <nav
            className="hidden md:flex items-center gap-8 text-sm"
            aria-label="Main navigation"
          >
            <a
              href="https://www.linkedin.com/in/rahmanhr/"
              target="_blank"
              className="text-gray-400 font-medium hover:text-white transition-colors duration-300
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500
                 focus-visible:ring-offset-2 cursor-pointer focus-visible:ring-offset-black"
            >
              LinkedIn
            </a>
            <a
              href="https://hashnode.com/@hr-rahman"
              target="_blank"
              className="text-gray-400 font-medium hover:text-white transition-colors duration-300
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500
                 focus-visible:ring-offset-2 cursor-pointer focus-visible:ring-offset-black"
            >
              Blog
            </a>

            <AnimatedShinyButton
              url={"/rahman_frontend_resume.pdf"}
              href="/rahman_frontend_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ac"
            >
              Resume
              {/* <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span> */}
            </AnimatedShinyButton>
          </nav>

          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:rounded"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile menu with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/95 border-t border-gray-800 px-4 sm:px-6 py-6">
            <div className="flex flex-col gap-4">
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2 focus:text-red-500 focus:outline-none"
              >
                Work
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2 focus:text-red-500 focus:outline-none"
              >
                About
              </a>
              <a
                href="/rahman_frontend_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 sm:px-6 py-3 sm:py-3 bg-red-500 text-black font-semibold rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black w-full sm:w-auto justify-center"
              >
                Resume
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero - Ultra minimal, impact-first */}
      <section
        id="main-content"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20"
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8">
            <AnimatedBadge text="OPEN TO WORK" color="#22d3ee"></AnimatedBadge>
          </div>

          {/* Main headline - oversized, bold */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6">
            Building digital
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-[length:200%_auto] animate-gradient">
              <EncryptedText
                text="experiences"
                encryptedClassName="text-neutral-500"
                // revealedClassName="dark:text-red text-red"
                revealDelayMs={75}
              />
            </span>
          </h1>

          {/* Single line description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto px-4">
            Frontend developer focused on React and modern UI development
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 ">
            <a
              href="#work"
              className="group z-30 inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-red-500 text-black font-semibold rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black w-full sm:w-auto justify-center"
            >
              View my work
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href="#about"
              className="inline-flex z-30 items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 hover:border-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black w-full sm:w-auto justify-center"
            >
              More about me
            </a>
          </div>

          {/* Social proof / quick links */}
          <div className="mt-12 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 px-4">
            <a
              href="https://github.com/rahman-D3V"
              className="hover:text-red-500 z-30 transition-colors duration-300 focus:text-red-500 focus:outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://www.linkedin.com/in/rahmanhr/"
              className="hover:text-red-500 z-30 transition-colors duration-300 focus:text-red-500 focus:outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://hashnode.com/@hr-rahman"
              target="_blank"
              className="hover:text-red-500 z-30 transition-colors duration-300 focus:text-red-500 focus:outline-none"
            >
              Blog
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-600">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-700 to-transparent" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Projects */}

        <section id="work" className="py-5 sm:py-20 scroll-mt-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between mb-10 sm:mb-12 gap-2">
            <h2 className="text-3xl sm:text-4xl font-bold">Selected Work</h2>
            <span className="text-sm text-gray-500">2025–2026</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 01 */}
            <CardSpotlight className="group overflow-hidden relative bg-gradient-to-br from-gray-900/60 to-gray-900/20 border border-gray-800 rounded-2xl p-6 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
              <span className="absolute top-4 right-4 text-xs text-gray-600 font-mono">
                01
              </span>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-500 transition-colors relative z-20">
                Buyonic
              </h3>

              <p className="text-sm text-gray-400 group-hover:text-neutral-200 mb-5 leading-relaxed relative z-20">
                Modern e-commerce platform focused on smooth cart flow,
                filtering, and a clean checkout experience.
              </p>

              <div className="flex flex-wrap gap-2 mb-5 ">
                <span className="text-xs px-2.5 py-1 rounded-full border border-gray-700  bg-black/50 text-gray-400; group-hover:border-gray-500">
                  React
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full border border-gray-700  bg-black/50 text-gray-400; group-hover:border-gray-500">
                  Tailwind CSS
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full border border-gray-700  bg-black/50 text-gray-400; group-hover:border-gray-500">
                  Zustand
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full border border-gray-700  bg-black/50 text-gray-400; group-hover:border-gray-500">
                  RHF
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm relative z-20">
                <a
                  href="https://buyonic.netlify.app/"
                  className="text-red-500 font-medium hover:underline focus:outline-none"
                  target="_blank"
                >
                  View project →
                </a>
                <a
                  href="https://github.com/rahman-D3V/Buyonic/commits/main/"
                  className="text-gray-400 hover:text-white transition focus:outline-none"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </CardSpotlight>

            {/* Project 02 */}
            <CardSpotlight className="group relative bg-gradient-to-br from-gray-900/60 to-gray-900/20 border border-gray-800 rounded-2xl p-6 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 overflow-hidden">
              <span className="absolute top-4 right-4 text-xs text-gray-600 font-mono">
                02
              </span>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-500 transition-colors relative z-20">
                RoleFit
              </h3>

              <p className="text-sm text-gray-400 mb-5 leading-relaxed relative z-20 group-hover:text-neutral-200">
                AI-powered job description analyzer that evaluates candidate fit
                using Gemini-based semantic matching.
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs px-2.5 py-1 rounded-full border border-gray-700  bg-black/50 text-gray-400; group-hover:border-gray-500">
                  Next.js
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full border border-gray-700  bg-black/50 text-gray-400; group-hover:border-gray-500">
                  React
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full border border-gray-700  bg-black/50 text-gray-400; group-hover:border-gray-500">
                  Gemini API
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full border border-gray-700  bg-black/50 text-gray-400; group-hover:border-gray-500">
                  AI
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm relative z-20">
                <a
                  href="https://role-fit.vercel.app/"
                  className="text-red-500 font-medium hover:underline focus:outline-none"
                  target="_blank"
                >
                  View project →
                </a>
                <a
                  href="https://github.com/rahman-D3V/RoleFit"
                  className="text-gray-400 hover:text-white transition focus:outline-none"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </CardSpotlight>

            {/* Project 03 */}
            <CardSpotlight className="group relative bg-gradient-to-br from-gray-900/60 to-gray-900/20 border border-gray-800 rounded-2xl p-6 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 overflow-hidden">
              <span className="absolute top-4 right-4 text-xs text-gray-600 font-mono">
                03
              </span>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-500 transition-colors relative z-20">
                Planiro
              </h3>

              <p className="text-sm text-gray-400 mb-5 leading-relaxed relative z-20 group-hover:text-neutral-200">
                Lightweight task manager designed for quick capture and minimal
                daily workflows, with clarity.
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs px-2.5 py-1 rounded-full border border-gray-700  bg-black/50 text-gray-400; group-hover:border-gray-500">
                  React
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full border border-gray-700  bg-black/50 text-gray-400; group-hover:border-gray-500">
                  LocalStorage
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm relative z-20">
                <a
                  href="https://planiro.netlify.app/"
                  className="text-red-500 font-medium hover:underline focus:outline-none"
                  target="_blank"
                >
                  View project →
                </a>
                <a
                  href="https://github.com/rahman-D3V/Planiro"
                  className="text-gray-400 hover:text-white transition focus:outline-none"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </CardSpotlight>
          </div>
        </section>

        {/* Skills */}

        <section
          id="skills"
          className="py-16 sm:py-20 border-t border-gray-900"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12">
            <PointerHighlight>
              <span className="p-3">Tech Stack</span>
            </PointerHighlight>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {SKILLS.map((s) => (
              <div
                key={s}
                className="group px-4 sm:px-5 py-4 border border-gray-800 rounded-xl text-center text-sm font-medium text-gray-300 hover:border-red-500 hover:text-red-500 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-gray-900/30 to-transparent cursor-default focus:border-red-500 focus:outline-none"
                tabIndex={0}
              >
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* About Section with Code Editor Effect */}
        <section
          id="about"
          className="py-5 sm:py-20 border-t border-gray-900 scroll-mt-20"
        >
          {/* <CursorProvider global={false}>
        {true && <Cursor />}
        {true && (
          <CursorFollow
            side={'bottom'}
            sideOffset={15}
            align={'end'}
            alignOffset={5}
          >
            Designer
          </CursorFollow>
        )} */}

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">About</h2>

            {/* Code Editor Style Container */}
            <div className="relative bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
              {/* Editor Header */}
              <CursorProvider>
                <Cursor />
                <CursorFollow>rahman</CursorFollow>
                <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#323233] border-b border-gray-700">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    rahman.js
                  </div>
                  <div className="text-xs text-gray-500 hidden sm:block">
                    JavaScript
                  </div>
                </div>

                {/* Code Content - Improved for mobile */}
                <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                  <div className="space-y-0.5 sm:space-y-1 min-w-max">
                    <CodeLine num={1}>
                      <span className="text-purple-400">const</span>
                      <span className="text-white ml-2">developer</span>
                      <span className="text-white ml-2">=</span>
                      <span className="text-white ml-2">{"{"}</span>
                    </CodeLine>

                    <CodeLine num={2}>
                      <span className="text-blue-400 ml-2 sm:ml-4">name:</span>
                      <span className="text-orange-300 ml-2">
                        "Habibur Rahman"
                      </span>
                      <span className="text-white">,</span>
                    </CodeLine>

                    <CodeLine num={3}>
                      <span className="text-blue-400 ml-2 sm:ml-4">role:</span>
                      <span className="text-orange-300 ml-2">
                        "Frontend Developer"
                      </span>
                      <span className="text-white">,</span>
                    </CodeLine>
                    <CodeLine num={4}>
                      <span className="text-blue-400 ml-2 sm:ml-4">email:</span>
                      <span className="text-orange-300 ml-2">
                        "rahman.d3v@gmail.com"
                      </span>
                      <span className="text-white">,</span>
                    </CodeLine>

                    <CodeLine num={5}>
                      <span className="text-blue-400 ml-2 sm:ml-4">
                        education:
                      </span>
                      <span className="text-white ml-2">{"{"}</span>
                    </CodeLine>

                    <CodeLine num={6}>
                      <span className="text-blue-400 ml-4 sm:ml-8">
                        degree:
                      </span>
                      <span className="text-orange-300 ml-2">
                        "Bachelor of Computer Applications(BCA)"
                      </span>
                      <span className="text-white">,</span>
                    </CodeLine>

                    <CodeLine num={7}>
                      <span className="text-blue-400 ml-4 sm:ml-8">
                        university:
                      </span>
                      <span className="text-orange-300 ml-2">
                        "Lovely Professional University"
                      </span>
                      <span className="text-white">,</span>
                    </CodeLine>

                    <CodeLine num={8}>
                      <span className="text-blue-400 ml-4 sm:ml-8">cgpa:</span>
                      <span className="text-green-400 ml-2">9.0</span>
                      <span className="text-white">,</span>
                    </CodeLine>

                    <CodeLine num={9}>
                      <span className="text-blue-400 ml-4 sm:ml-8">
                        status:
                      </span>
                      <span className="text-orange-300 ml-2">"Final Year"</span>
                    </CodeLine>

                    <CodeLine num={10}>
                      <span className="text-white ml-2 sm:ml-4">{"}"}</span>
                      <span className="text-white">,</span>
                    </CodeLine>

                    {/* ===== SKILLS (UPDATED) ===== */}

                    <CodeLine num={11}>
                      <span className="text-blue-400 ml-2 sm:ml-4">
                        skills:
                      </span>
                      <span className="text-white ml-2">{"{"}</span>
                    </CodeLine>

                    <CodeLine num={12}>
                      <span className="text-blue-400 ml-4 sm:ml-8">
                        languages:
                      </span>
                      <span className="text-orange-300 ml-2">
                        ["JavaScript", "C++"]
                      </span>
                      <span className="text-white">,</span>
                    </CodeLine>

                    <CodeLine num={13}>
                      <span className="text-blue-400 ml-4 sm:ml-8">
                        frameworks_and_lib:
                      </span>
                      <span className="text-orange-300 ml-2">
                        ["React.js", "Next.js", "Zustand", "React Hook Form"]
                      </span>
                      <span className="text-white">,</span>
                    </CodeLine>

                    <CodeLine num={14}>
                      <span className="text-blue-400 ml-4 sm:ml-8">
                        styling:
                      </span>
                      <span className="text-orange-300 ml-2">
                        ["Tailwind CSS", "shadcn/ui"]
                      </span>
                      <span className="text-white">,</span>
                    </CodeLine>

                    <CodeLine num={15}>
                      <span className="text-blue-400 ml-4 sm:ml-8">
                        apis_and_tools:
                      </span>
                      <span className="text-orange-300 ml-2">
                        ["REST APIs", "Gemini API", "Git", "GitHub"]
                      </span>
                    </CodeLine>

                    <CodeLine num={16}>
                      <span className="text-white ml-2 sm:ml-4">{"}"}</span>
                      <span className="text-white">,</span>
                    </CodeLine>

                    {/* ===== END SKILLS ===== */}

                    <CodeLine num={17}>
                      <span className="text-blue-400 ml-2 sm:ml-4">
                        availability:
                      </span>
                      <span className="text-green-400 ml-2">true</span>
                      <span className="text-white">,</span>
                      <span className="text-gray-500 ml-2">
                        // Open to opportunities
                      </span>
                    </CodeLine>

                    <CodeLine num={18}>
                      <span className="text-blue-400 ml-2 sm:ml-4">
                        location:
                      </span>
                      <span className="text-orange-300 ml-2">"India"</span>
                    </CodeLine>

                    <CodeLine num={19}>
                      <span className="text-white">{"}"};</span>
                    </CodeLine>

                    <CodeLine num={20}>
                      <span></span>
                    </CodeLine>

                    <CodeLine num={21}>
                      <span className="text-purple-400">export</span>
                      <span className="text-purple-400 ml-2">default</span>
                      <span className="text-white ml-2">developer;</span>
                    </CodeLine>
                  </div>
                  <Meteors number={20} />
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-1.5 sm:py-2 bg-[#007acc] text-white text-xs">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="hidden sm:inline">⚡ VS Code</span>
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="hidden sm:inline">Ln 21</span>
                  </div>
                </div>
              </CursorProvider>
            </div>

            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-linear-to-br from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-xl">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                I build clean, responsive web interfaces using modern JavaScript
                tools. I care about details, performance and making sure the UI
                feels smooth and easy to use.
              </p>
            </div>
          </div>
        </section>

        <div className=" flex items-center justify-center mb-14 sm:-mt-5 gap-6 sm:gap-8">
          <a
            href="https://github.com/rahman-D3V"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:rounded"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/rahmanhr/"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:rounded"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="mailto:rahman.d3v@gmail.com"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:rounded"
            aria-label="Email"
          >
            <span className="sr-only">Email</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a
            href="https://hashnode.com/@hr-rahman"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:rounded"
            aria-label="Hashnode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Hashnode</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <footer className="py-6 sm:py-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500">
            <div>© {new Date().getFullYear()} Rahman. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <span>Built with React & Tailwind</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

// Helper component for code lines
function CodeLine({ num, children }) {
  return (
    <div className="flex">
      <span className="text-gray-600 select-none w-6 sm:w-8 flex-shrink-0 text-right pr-2 sm:pr-3">
        {num}
      </span>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}

const SKILLS = [
  "React.js",
  "JavaScript",
  "HTML & CSS",
  "Tailwind CSS",
  "shadcn/ui",
  "Zustand",
  "Redux Toolkit",
  "React Hook Form",
  "REST APIs",
  "Responsive Design",
  "Git & GitHub",
  "C++",
];
