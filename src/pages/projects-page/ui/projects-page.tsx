import React from 'react';

import handySurfLogo from 'src/assets/images/handy-surf-logo.png';
import lipsyncTimingCheckerLogo from 'src/assets/images/lipsync-timing-checker-logo.png';
import stroyInTekhLogo from 'src/assets/images/stroy-in-tekh-logo.png';
import tsGuardsLogo from 'src/assets/images/ts-guards-logo.png';

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <h2 className="glitch mb-8 text-center text-3xl font-bold uppercase tracking-widest text-[var(--primary-color)]">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="project-card group cursor-pointer border border-[#273a27] bg-black/30 p-4 transition-all duration-300 hover:border-[var(--primary-color)] hover:shadow-[0_0_20px_rgba(5,199,5,0.5)]">
          <div className="relative overflow-hidden">
            <img
              alt="Project 1"
              className="project-image w-full h-48 object-cover transition-all duration-300 filter grayscale brightness-75"
              src={handySurfLogo}
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0"></div>
          </div>
          <div className="mt-4">
            <h3 className="project-title text-xl font-bold text-white transition-colors duration-300">HandySurf</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Chrome extension. Your ultimate hands-free browser control with advanced gesture recognition and
              AI-powered navigation.
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold uppercase text-[var(--primary-color)]/80">STACK:</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">React</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">RxJS</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">Zustand</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">MUI</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">MediaPipe</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">Webpack</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">Typescript</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">Python</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <a
                className="flex items-center gap-1 text-sm text-green-400 transition-colors hover:text-white"
                href="https://chromewebstore.google.com/detail/handysurf/bbpfkcnjhagmkpcglcmpgnnlkimpdeoo"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base"> link </span>
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="project-card group cursor-pointer border border-[#273a27] bg-black/30 p-4 transition-all duration-300 hover:border-[var(--primary-color)] hover:shadow-[0_0_20px_rgba(5,199,5,0.5)]">
          <div className="relative overflow-hidden">
            <img
              alt="Project 2"
              className="project-image w-full h-48 object-cover transition-all duration-300 filter grayscale brightness-75"
              src={stroyInTekhLogo}
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0"></div>
          </div>
          <div className="mt-4">
            <h3 className="project-title text-xl font-bold text-white transition-colors duration-300">SIT36 Website</h3>
            <p className="mt-2 text-sm text-neutral-400">
              A website for a company "StroyInTekh" specializing in the manufacturing of storage and purification
              equipment.
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold uppercase text-[var(--primary-color)]/80">STACK:</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">Next.js</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">SCSS</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">Jest</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">Playwright</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">StoryBook</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <a
                className="flex items-center gap-1 text-sm text-green-400 transition-colors hover:text-white"
                href="https://sit36.ru"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base"> link </span>
                Live Demo
              </a>
              <a
                className="flex items-center gap-1 text-sm text-green-400 transition-colors hover:text-white"
                href="https://github.com/a1exevs/stroy-in-tekh"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base"> code </span>
                Repository
              </a>
            </div>
          </div>
        </div>
        <div className="project-card group cursor-pointer border border-[#273a27] bg-black/30 p-4 transition-all duration-300 hover:border-[var(--primary-color)] hover:shadow-[0_0_20px_rgba(5,199,5,0.5)]">
          <div className="relative overflow-hidden">
            <img
              alt="Project 3"
              className="project-image w-full h-48 object-cover transition-all duration-300 filter grayscale brightness-75"
              src={lipsyncTimingCheckerLogo}
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0"></div>
          </div>
          <div className="mt-4">
            <h3 className="project-title text-xl font-bold text-white transition-colors duration-300">
              Lipsync Timing Checker
            </h3>
            <p className="mt-2 text-sm text-neutral-400">
              Application for calibrating viseme according to Audio track.
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold uppercase text-[var(--primary-color)]/80">STACK:</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">React</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">Tailwind</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">Wavesurfer</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">Jest</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">Playwright</span>
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">StoryBook</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <a
                className="flex items-center gap-1 text-sm text-green-400 transition-colors hover:text-white"
                href="https://a1exevs.github.io/lipsync-timing-checker"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base"> link </span>
                Live Demo
              </a>
              <a
                className="flex items-center gap-1 text-sm text-green-400 transition-colors hover:text-white"
                href="https://github.com/a1exevs/lipsync-timing-checker"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base"> code </span>
                Repository
              </a>
            </div>
          </div>
        </div>
        <div className="project-card group cursor-pointer border border-[#273a27] bg-black/30 p-4 transition-all duration-300 hover:border-[var(--primary-color)] hover:shadow-[0_0_20px_rgba(5,199,5,0.5)]">
          <div className="relative overflow-hidden">
            <img
              alt="Project 4"
              className="project-image w-full h-48 object-cover transition-all duration-300 filter grayscale brightness-75"
              src={tsGuardsLogo}
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0"></div>
          </div>
          <div className="mt-4">
            <h3 className="project-title text-xl font-bold text-white transition-colors duration-300">TS-guards</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Typescript guards library. This library provides a robust set of utility functions to simplify and
              streamline type-checking and guard validation in your code.
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold uppercase text-[var(--primary-color)]/80">STACK:</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-sm bg-[#1a431a] px-2 py-1 text-xs text-green-300">Typescript</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <a
                className="flex items-center gap-1 text-sm text-green-400 transition-colors hover:text-white"
                href="https://www.npmjs.com/package/@alexevs/ts-guards?activeTab=readme"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base"> link </span>
                Live Demo
              </a>
              <a
                className="flex items-center gap-1 text-sm text-green-400 transition-colors hover:text-white"
                href="https://github.com/a1exevs/ts-guards"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base"> code </span>
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
