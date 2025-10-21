import handySurfLogo from 'src/assets/images/handy-surf-logo.png';
import lipsyncTimingCheckerLogo from 'src/assets/images/lipsync-timing-checker-logo.png';
import photo from 'src/assets/images/photo.jpg';
import stroyInTekhLogo from 'src/assets/images/stroy-in-tekh-logo.png';
import tsGuardsLogo from 'src/assets/images/ts-guards-logo.png';
import { ContactLinkCode, ContentTabName, Store } from 'src/store/store.types';
import { IconName } from 'src/ui/common/components/Icon/Icon';

const store: Store = {
  header: {
    photoPath: photo,
    lastUpdateDate: '2/13/2023',
  },
  commonInfo: {
    photoPath: photo,
    fullName: 'Alexander Olegovich Evstafiadi',
    birthday: new Date('2/22/1996'),
    city: 'Voronezh (Russia)',
    workAt: 'DSR Corporation',
    summary:
      'Over 3 years of experience in software engineering including system analysis, design, application development and writing technical documentation.',
  },
  content: {
    tabs: [
      {
        tabId: ContentTabName.TECHNICAL_SKILLS,
        displayName: 'Technical skills',
        tabIcon: IconName.TECHNICAL_SHILLS,
      },
      {
        tabId: ContentTabName.CAREER_HISTORY,
        displayName: 'Career history',
        tabIcon: IconName.CAREER_HISTORY,
      },
      {
        tabId: ContentTabName.PERSONAL_INFORMATION,
        displayName: 'Personal information',
        tabIcon: IconName.PERSONAL_INFORMATION,
      },
    ],
    technicalSkills: {
      technicalAreas: [
        { name: 'Frontend Development - (Angular, React)', yearsCount: 2 },
        { name: 'Backend Development - NodeJS', yearsCount: 2 },
        { name: 'Mobile development - (React Native)', yearsCount: 1 },
        { name: 'Desktop Development - (Qt5)', yearsCount: 3 },
      ],
      languages: [
        {
          name: 'JS/TS',
          isMain: true,
        },
        {
          name: 'HTML',
          isMain: true,
        },
        {
          name: 'CSS/LESS/SCSS',
          isMain: true,
        },
        {
          name: 'SQL',
          isMain: false,
        },
        {
          name: 'C/C++',
          isMain: false,
        },
        {
          name: 'PHP',
          isMain: false,
        },
        {
          name: 'Python',
          isMain: false,
        },
        {
          name: 'Bash',
          isMain: false,
        },
      ],
      operatingSystems: ['Linux', 'Windows', 'Android', 'iOS', 'MacOS'],
      technologies: [
        {
          language: 'JS/TS',
          technologies: [
            'Angular2+',
            'AngularJS',
            'NestJS',
            'React',
            'Redux',
            'Vue',
            'Express',
            'Sequilize',
            'TypeORM',
            'MicroORM',
            'Jest',
            'React Native',
            'Webpack',
          ],
        },
        { language: 'C/C++', technologies: ['Qt5', 'CMake', 'qmake', 'qsoap'] },
        { language: 'PHP', technologies: ['Kohana', 'Zend Soap'] },
      ],
      software: [
        {
          id: 0,
          softList: [
            'WebStorm',
            'VSCode',
            'Postman',
            'Qt Creator',
            'PhpStorm',
            'Android Studio',
            'SoapUI',
            'Wireshark',
            'MSVS',
            'Git Kraken',
          ],
        },
        { id: 1, softList: ['Git', 'Jenkins', 'Jira', 'Celoxis', 'Figma', 'Azure', 'Github', 'Gitlab'] },
        { id: 2, softList: ['Vim', 'GDB', 'Valgrind', 'Eclipse'] },
        { id: 3, softList: ['Swagger', 'Doxygen', 'TeX', 'MSOffice', 'LibreOffice', 'GoogleDrive', 'Google Sites'] },
        { id: 4, softList: ['Linux shell and server administration (LAMP)'] },
        { id: 5, softList: ['Docker/Docker Compose'] },
      ],
      networking: ['TCP/IP', 'REST', 'SOAP', 'Sockets', 'Cisco CCNA education'],
    },
    careerHistory: {
      companyExperiences: [
        {
          workPeriod: 'Mar 2022 – Present',
          companyName: 'DSR Corporation',
          website: 'https://en.dsr-corporation.com',
          career: 'Software Engineer',
          projectList: [
            {
              projectDescription:
                'eLIMS - a system for tracking, monitoring, and processing chemical sample data in laboratories.',
              workPeriod: 'Jun 2022 – Present',
              environment: [
                'Angular 2+ / AngularJS',
                'React',
                'RxJS',
                'TypeScript',
                'LESS',
                'Azure',
                'Webpack',
                'Jasmine',
                'Karma',
                'Playwright',
              ],
              responsibilities: [
                'front-end development',
                'feature implementation',
                'debugging',
                'testing',
                'code review',
                'design',
                'dev validation',
              ],
              keyContributions: [
                'As part of a feature team, developed the Layout Builder module — a visual content layout configuration tool for dialog windows;',
                'Built an Excel-like table within a dedicated module with complex business logic support;',
                'Maintained the Alias mechanism for dynamic renaming of business entities throughout the system;',
                'Implemented license-based feature control, adjusting functionality availability based on active licenses;',
                'Contributed to the statistics module: implemented and optimized chart rendering logic and patched the D3 library to meet project-specific requirements.',
              ],
            },
            {
              projectDescription:
                'Add-In Plugin - a Microsoft Excel add-in designed for working with chemical lab analysis data.',
              workPeriod: 'Jan 2024 – Mar 2024',
              environment: ['Angular 2+', 'RxJS', 'TypeScript', 'Jasmine', 'Karma', 'Azure', 'MS Excel'],
              responsibilities: [
                'front-end development',
                'feature implementation',
                'debugging',
                'testing',
                'code review',
                'design',
                'dev validation',
              ],
              keyContributions: [
                'Optimized the plugin’s performance in the web version of Excel, significantly speeding up several resource-intensive operations;',
                'Took part in designing and implementing the application versioning mechanism.',
              ],
            },
            {
              projectDescription:
                'eLIMS Web Client - a client-facing web system for registering chemical sample analyses in laboratories.',
              workPeriod: 'Sep 2023 – Jan 2024',
              environment: ['Angular 2+', 'NgXs', 'RxJS', 'TypeScript', 'Jasmine', 'Cypress', 'Azure'],
              responsibilities: [
                'front-end development',
                'feature implementation',
                'debugging',
                'testing',
                'code review',
                'design',
                'dev validation',
              ],
              keyContributions: [
                'Implemented a specific column resizing, ordering, and selection mechanism for new pages (distinct in behavior from existing ones) based on customer requirements, applying the Strategy design pattern;',
                'Optimized user access control logic across pages and UI elements based on permissions.',
              ],
            },
            {
              projectDescription:
                'Ad Builder - a micro-frontend app for creating rental property listings and publishing them across various social media platforms.',
              workPeriod: 'Mar 2022 – Jun 2022',
              environment: ['React', 'Redux', 'NestJS', 'MikroORM', 'MariaDB', 'GitLab'],
              responsibilities: ['full-stack development', 'feature implementation', 'debugging', 'testing'],
              keyContributions: [
                'Joined the project from day one and helped define its architecture;',
                'Integrated third-party services such as Facebook and Instagram;',
                'Significantly improved the deployment pipeline using containerization (Docker), speeding up delivery and app maintenance.',
              ],
            },
          ],
        },
        {
          workPeriod: 'Nov 2019 – Mar 2022',
          companyName: 'Technomarket',
          website: 'https://tm-v.ru',
          career: 'Software Engineer',
          projectList: [
            {
              projectDescription:
                'SMART-RIS is a medical software solution that streamlines workflows for radiologists, functional diagnostics specialists, and clinicians across various fields.',
              workPeriod: 'Nov 2019 – Mar 2022',
              environment: ['React', 'Redux', 'NestJS', 'MySql', 'Sequilize', 'Jest', 'TypeScript', 'Git', 'Linux'],
              responsibilities: [
                'full-stack development',
                'tech leadership',
                'features implementation',
                'debugging',
                'refactoring',
                'testing',
                'code review',
              ],
              keyContributions: [
                'Took part in end-to-end development of all major components — web client, web server, and desktop app — from MVP to a full-scale system now used across multiple healthcare facilities in the Voronezh and Lipetsk regions;',
                'Led development of the “Report Builder” module, enabling dynamic form generation and PDF templates based on flexible XML schemas;',
                'Helped integrate the system with other medical platforms like VOKKDC and MedSoft;',
                'Contributed to the architecture of the “Configurator” — a core module for setting up organizations, workstations, and their relationships;',
                'Migrated key functionality from the legacy desktop app to a modern web-based solution.',
              ],
            },
          ],
        },
      ],
    },
    personalInformation: {
      contacts: [
        {
          name: 'Github',
          address: 'https://github.com/a1exevs',
          isLink: true,
        },
        {
          name: 'hh.ru',
          address: 'https://voronezh.hh.ru/resume/10aa6646ff077b3cb70039ed1f47394e4f476f',
          isLink: true,
        },
        {
          name: 'Linkedin',
          address: 'https://www.linkedin.com/mwlite/in/alexander-evstafiadi-b17b96267',
          isLink: true,
        },
        {
          name: 'VK',
          address: 'https://vk.com/alexevs_gb',
          isLink: true,
        },
        {
          name: 'Google email',
          address: 'aleksandrevstafiadi@gmail.com',
          isLink: false,
        },
        {
          name: 'Yandex email',
          address: 'evstafiadi.shura@yandex.ru',
          isLink: false,
        },
        {
          name: 'Youtube',
          address: 'https://www.youtube.com/channel/UCVrwEd4-3guB5NFQ_oidREg',
          isLink: true,
        },
      ],
      education: [
        {
          name: 'Voronezh State University',
          degree: "Master's degree",
          fieldOfStudy: 'Radio Physical Sciences',
          studyPeriod: '2019 - 2021',
          website: 'https://vsu.ru',
        },
      ],
    },
  },
  contactsData: {
    contactLinks: [
      {
        href: 'https://github.com/a1exevs',
        label: 'GitHub',
        code: ContactLinkCode.GITHUB,
      },
      {
        href: 'https://voronezh.hh.ru/resume/10aa6646ff077b3cb70039ed1f47394e4f476f',
        label: 'hh.ru',
        code: ContactLinkCode.HEAD_HUNTER,
      },
      {
        href: 'https://www.linkedin.com/in/alexander-evstafiadi/',
        label: 'LinkedIn',
        code: ContactLinkCode.LINKEDIN,
      },
      {
        href: 'mailto:aleksandrevstafiadi@gmail.com',
        label: 'Google Email',
        code: ContactLinkCode.GOOGLE_EMAIL,
      },
      {
        href: 'mailto:evstafiadi.shura@yandex.ru',
        label: 'Yandex Email',
        code: ContactLinkCode.YANDEX_EMAIL,
      },
      {
        href: 'https://www.youtube.com/channel/UCVrwEd4-3guB5NFQ_oidREg',
        label: 'YouTube',
        code: ContactLinkCode.YOUTUBE,
      },
      {
        href: 'https://leetcode.com/u/a1exevs/',
        label: 'LeetCode',
        code: ContactLinkCode.LEETCODE,
      },
      {
        href: 'https://www.instagram.com/alexevs_gb',
        label: 'Instagram',
        code: ContactLinkCode.INSTAGRAM,
      },
      {
        href: 'https://api.whatsapp.com/send?phone=79601254138',
        label: 'WhatsApp',
        code: ContactLinkCode.WHATSAPP,
      },
      {
        href: 'https://t.me/AlexanderEvstafiadi',
        label: 'Telegram',
        code: ContactLinkCode.TELEGRAM,
      },
    ],
  },
  skillsData: {
    skills: [
      {
        title: 'Programming_Languages',
        items: ['JavaScript', 'TypeScript', 'HTML', 'CSS/LESS/SCSS'],
      },
      {
        title: 'Frameworks_&_Libraries',
        items: ['Angular', 'React', 'Next.js', 'NestJS'],
      },
      {
        title: 'Databases',
        items: ['PostgreSQL', 'MySQL'],
      },
      {
        title: 'Tools_&_Platforms',
        items: ['Git & GitHub & GitLub', 'Docker', 'Webpack', 'Jira & Confluence', 'Azure'],
      },
      {
        title: 'Soft_Skills',
        items: [
          'Mentoring',
          'Problem Solving',
          'Team Collaboration',
          'Agile Methodologies',
          'Communication',
          'Adaptability',
        ],
      },
    ],
  },
  projectsData: {
    projects: [
      {
        logo: handySurfLogo,
        title: 'HandySurf',
        description:
          'Chrome extension. Your ultimate hands-free browser control with advanced gesture recognition and AI-powered navigation.',
        stack: ['React', 'RxJS', 'Zustand', 'MUI', 'MediaPipe', 'Webpack', 'Typescript', 'Python'],
        links: {
          live: 'https://chromewebstore.google.com/detail/handysurf/bbpfkcnjhagmkpcglcmpgnnlkimpdeoo',
        },
      },
      {
        logo: stroyInTekhLogo,
        title: 'SIT36 Website',
        description:
          'A website for a company "StroyInTekh" specializing in the manufacturing of storage and purification equipment.',
        stack: ['Next.js', 'SCSS', 'Jest', 'Playwright', 'StoryBook'],
        links: {
          live: 'https://sit36.ru',
          repo: 'https://github.com/a1exevs/stroy-in-tekh',
        },
      },
      {
        logo: lipsyncTimingCheckerLogo,
        title: 'Lipsync Timing Checker',
        description: 'Application for calibrating viseme according to Audio track.',
        stack: ['React', 'Tailwind', 'Wavesurfer', 'Jest', 'Playwright', 'StoryBook'],
        links: {
          live: 'https://a1exevs.github.io/lipsync-timing-checker',
          repo: 'https://github.com/a1exevs/lipsync-timing-checker',
        },
      },
      {
        logo: tsGuardsLogo,
        title: 'TS-guards',
        description:
          'Typescript guards library. This library provides a robust set of utility functions to simplify and streamline type-checking and guard validation in your code.',
        stack: ['Typescript'],
        links: {
          live: 'https://www.npmjs.com/package/@alexevs/ts-guards?activeTab=readme',
          repo: 'https://github.com/a1exevs/ts-guards',
        },
      },
    ],
  },
  footer: {
    copyrightLabel: '© 2023 Alexander Evstafiadi',
  },
};

export default store;
