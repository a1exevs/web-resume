import React from 'react';

const SkillsPage: React.FC = () => {
  return (
    <div>
      <h2 className="glitch mb-8 text-center text-3xl font-bold uppercase tracking-widest text-[var(--primary-color)]">
        Skills_Matrix
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="border border-[var(--primary-color)]/30 p-4">
          <h3 className="mb-4 text-lg font-bold text-white">
            <span className="text-[var(--primary-color)]">&gt;</span> Programming_Languages
          </h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> HTML
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> CSS/LESS/SCSS
            </li>
          </ul>
        </div>
        <div className="border border-[var(--primary-color)]/30 p-4">
          <h3 className="mb-4 text-lg font-bold text-white">
            <span className="text-[var(--primary-color)]">&gt;</span> Frameworks_&amp;_Libraries
          </h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> Angular
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> NestJS
            </li>
          </ul>
        </div>
        <div className="border border-[var(--primary-color)]/30 p-4">
          <h3 className="mb-4 text-lg font-bold text-white">
            <span className="text-[var(--primary-color)]">&gt;</span> Databases
          </h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> PostgreSQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> MySQL
            </li>
          </ul>
        </div>
        <div className="border border-[var(--primary-color)]/30 p-4">
          <h3 className="mb-4 text-lg font-bold text-white">
            <span className="text-[var(--primary-color)]">&gt;</span> Tools_&amp;_Platforms
          </h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> Git &amp; GitHub &amp; GitLub
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> Docker
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> Webpack
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> Jira &amp; Confluence
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> Azure
            </li>
          </ul>
        </div>
        <div className="border border-[var(--primary-color)]/30 p-4">
          <h3 className="mb-4 text-lg font-bold text-white">
            <span className="text-[var(--primary-color)]">&gt;</span> Soft_Skills
          </h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> Mentoring
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> Problem Solving
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> Team Collaboration
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> Agile Methodologies
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> Communication
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--primary-color)]">//</span> Adaptability
            </li>
          </ul>
        </div>
        <div className="border border-[var(--primary-color)]/30 p-4 flex flex-col justify-center items-center text-center">
          <span className="material-symbols-outlined text-4xl text-[var(--primary-color)]">psychology</span>
          <h3 className="mt-2 mb-2 text-lg font-bold text-white">Continuous_Learning</h3>
          <p className="text-sm text-neutral-400">
            Constantly upgrading my skill set to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>
      </div>
      <div className="mt-8 text-right text-xs text-neutral-500">
        <p>
          SYSTEM_SCAN_COMPLETE: <span className="text-[var(--primary-color)]/80">All skills up-to-date.</span>
        </p>
      </div>
    </div>
  );
};

export default SkillsPage;
