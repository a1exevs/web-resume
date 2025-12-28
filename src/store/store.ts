import handySurfLogo from 'src/assets/images/handy-surf-logo.png';
import lipsyncTimingCheckerLogo from 'src/assets/images/lipsync-timing-checker-logo.png';
import photo from 'src/assets/images/photo.jpg';
import stroyInTekhLogo from 'src/assets/images/stroy-in-tekh-logo.png';
import tsGuardsLogo from 'src/assets/images/ts-guards-logo.png';
import { ContactLinkCode, Store } from 'src/store/store.types';

const store: Store = {
  en: {
    mainInfoData: {
      photoPath: photo,
      fullName: 'Alexander Evstafiadi',
      position: 'Senior Front-end developer',
      status: 'Not looking for a job',
      location: 'Voronezh, Russia',
      resumeLastUpdateDate: 'October 22, 2025',
      additionalDetails: [
        {
          title: 'Personal info',
          items: [
            { label: 'Age', value: '29' },
            { label: 'Date of birthday', value: 'February 22, 1996' },
            { label: 'Relocation', value: 'Open to offers' },
            { label: 'Business trips', value: 'Willing to travel' },
          ],
        },
        {
          title: 'Education',
          items: [
            { label: 'University', value: 'Voronezh State University' },
            { label: 'Degree', value: "Master's degree" },
            { label: 'Field of study', value: 'Radio Physical Sciences' },
            { label: 'Website', value: 'https://vsu.ru', isLink: true },
          ],
        },
        {
          title: 'Contact details',
          items: [
            { label: 'Phone', value: '+7 (960)-125-41-38', isLink: true, linkPrefix: 'tel:' },
            { label: 'Email', value: 'aleksandrevstafiadi@gmail.com', isLink: true, linkPrefix: 'mailto:' },
            {
              label: 'Linkedin',
              value: 'https://www.linkedin.com/in/alexander-evstafiadi',
              linkDisplayValue: 'in/alexander-evstafiadi',
              isLink: true,
            },
          ],
        },
      ],
      aboutMe: {
        summary:
          'Front-end developer with 5+ years of experience building B2B products - including LIMS platforms, medical information systems, Excel plugins, and micro-frontend applications.',
        achievementBullets: [
          'Skilled in Angular (2+ & AngularJS), React, NestJS',
          'Strong focus on maintainable and testable code (Jasmine, Cypress, Karma, Playwright, Jest)',
          'Hands-on experience with complex business logic: layout editors, Excel-like tables, alias systems, licensing, permission-based UI',
          'Familiar with API integrations (e.g., Facebook, Instagram)',
          'Focused on performance optimization, architecture discussions, code reviews, and dev validation',
          'Comfortable working in distributed teams and long-term products',
          'Experienced in mentoring and onboarding new team members',
          'Created and delivered front-end training materials as part of extracurricular initiatives',
          'Actively improve skills via reading, building side projects, and engaging with the broader IT community',
        ],
        goal: 'Looking to grow into a senior or tech lead role on impactful and technically challenging projects.',
      },
    },
    experienceData: {
      companyExperiences: [
        {
          workPeriod: 'Mar 2022 – Present',
          companyName: 'DSR Corporation',
          website: 'https://en.dsr-corporation.com',
          career: 'Middle Front-end Developer - Senior Front-end Developer',
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
          career: 'Junior Front-end Developer - Middle Front-end Developer',
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
    skillsData: {
      skills: [
        {
          title: 'Programming languages',
          items: ['JavaScript', 'TypeScript', 'HTML', 'CSS/LESS/SCSS'],
        },
        {
          title: 'Frameworks & libraries',
          items: ['Angular', 'React', 'Next.js', 'NestJS'],
        },
        {
          title: 'Databases',
          items: ['PostgreSQL', 'MySQL'],
        },
        {
          title: 'Tools & platforms',
          items: ['Git & GitHub & GitLub', 'Docker', 'Webpack', 'Jira & Confluence', 'Azure'],
        },
        {
          title: 'Soft skills',
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
  },
  ru: {
    mainInfoData: {
      photoPath: photo,
      fullName: 'Александр Евстафиади',
      position: 'Senior Front-end разработчик',
      status: 'Не ищу работу',
      location: 'Воронеж, Россия',
      resumeLastUpdateDate: 'Октябрь 22, 2025',
      additionalDetails: [
        {
          title: 'Личная информация',
          items: [
            { label: 'Полных лет', value: '29' },
            { label: 'Дата рождения', value: 'Февраль 22, 1996' },
            { label: 'Переезд', value: 'Открыт к предложениям' },
            { label: 'Командировки', value: 'Готов к поездкам' },
          ],
        },
        {
          title: 'Образование',
          items: [
            { label: 'ВУЗ', value: 'Воронежский Государственный университет' },
            { label: 'Степень', value: 'Магистр' },
            { label: 'Специализация', value: 'Радиофизика' },
            { label: 'Вебсайт', value: 'https://vsu.ru', isLink: true },
          ],
        },
        {
          title: 'Контакты',
          items: [
            { label: 'Телефон', value: '+7 (960)-125-41-38', isLink: true, linkPrefix: 'tel:' },
            { label: 'Почта', value: 'aleksandrevstafiadi@gmail.com', isLink: true, linkPrefix: 'mailto:' },
            {
              label: 'Линкедин',
              value: 'https://www.linkedin.com/in/alexander-evstafiadi',
              linkDisplayValue: 'in/alexander-evstafiadi',
              isLink: true,
            },
          ],
        },
      ],
      aboutMe: {
        summary:
          'Front-end разработчик с опытом более 5 лет в разработке B2B-систем: медицинские информационные системы, LIMS-платформы, корпоративные плагины и микрофронтенды.',
        achievementBullets: [
          'Уверенно работаю с Angular (2+ и AngularJS), React, NestJS',
          'Пишу поддерживаемый и тестируемый код (Jasmine, Cypress, Karma, Playwright, Jest)',
          'Участвую в проектировании архитектуры, реализую сложную бизнес-логику (динамические таблицы, layout-редакторы, alias-механизмы, лицензирование)',
          'Имею опыт интеграции со сторонними API (Facebook, Instagram)',
          'Оптимизирую performance и UX, участвую в ревью кода, dev-валидации',
          'Привык работать в распределенных командах и продуктах с долгим жизненным циклом',
          'Имею опыт менторства и онбординга новых сотрудников',
          'Занимался подготовкой обучающих курсов по фронтенду как внепроектной активностью',
          'Постоянно развиваюсь: читаю профессиональные статьи, создаю пет-проекты, общаюсь с другими специалистами из мира IT',
        ],
        goal: 'Готов к новым технологическим вызовам и росту в роли senior/tech lead.',
      },
    },
    experienceData: {
      companyExperiences: [
        {
          workPeriod: 'Март 2022 – по настоящее время',
          companyName: 'DSR Corporation',
          website: 'https://en.dsr-corporation.com',
          career: 'Middle Front-end разработчик - Senior Front-end разработчик',
          projectList: [
            {
              projectDescription:
                'eLIMS - система для трекинга, мониторинга состояния и обработки данных проб в химических лабораториях.',
              workPeriod: 'Июнь 2022 – по настоящее время',
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
                'front-end разработка',
                'реализация функционала',
                'отладка',
                'тестирование',
                'ревью кода',
                'проектирование',
                'dev-валидация',
              ],
              keyContributions: [
                'В составе подкоманды разрабатывал модуль Layout Builder — визуальный конструктор для настройки отображения контента в диалоговых окнах;',
                'Реализовал Excel-подобную таблицу с поддержкой сложной бизнес-логики;',
                'Поддерживал механизм Алиасов (гибкое переименование бизнес-сущностей) по всей системе;',
                'Реализовал логику поддержки лицензий, влияющих на доступность различных функций;',
                'Участвовал в разработке модуля статистики, включая реализацию и оптимизацию логики построения графиков, а также в патчинге библиотеки D3 для соответствия требованиям проекта.',
              ],
            },
            {
              projectDescription:
                'Add-In Plugin - плагин для Microsoft Excel, предназначенный для работы с данными анализов проб в химических лабораториях.',
              workPeriod: 'Январь 2024 – Март 2024',
              environment: ['Angular 2+', 'RxJS', 'TypeScript', 'Jasmine', 'Karma', 'Azure', 'MS Excel'],
              responsibilities: [
                'front-end разработка',
                'реализация функционала',
                'отладка',
                'тестирование',
                'ревью кода',
                'проектирование',
                'dev-валидация',
              ],
              keyContributions: [
                'Оптимизировал работу плагина в веб-версии Excel, значительно ускорив выполнение ресурсоемких операций;',
                'Участвовал в проектировании и реализации механизма поддержки версионирования приложения.',
              ],
            },
            {
              projectDescription:
                'eLIMS Web Client - система регистрации проб и анализов для химических лабораторий, используемая со стороны клиентов.',
              workPeriod: 'Сентябрь 2023 – Январь 2024',
              environment: ['Angular 2+', 'NgXs', 'RxJS', 'TypeScript', 'Jasmine', 'Cypress', 'Azure'],
              responsibilities: [
                'front-end разработка',
                'реализация функционала',
                'отладка',
                'тестирование',
                'ревью кода',
                'проектирование',
                'dev-валидация',
              ],
              keyContributions: [
                'По требованию заказчиков реализовал специфичный механизм изменения размеров колонок, их порядка и набора в таблицах на новых страницах (отличающийся по логике от существующего решения), с использованием паттерна «Стратегия»;',
                'Оптимизировал логику доступа пользователей к страницам и UI-элементам в зависимости от их прав (permissions).',
              ],
            },
            {
              projectDescription:
                'Ad Builder - микрофронтенд-приложение для создания объявлений о сдаче недвижимости и публикации их в различных социальных сетях.',
              workPeriod: 'Март 2022 – Июнь 2022',
              environment: ['React', 'Redux', 'NestJS', 'MikroORM', 'MariaDB', 'GitLab'],
              responsibilities: ['full-stack разработка', 'реализация функционала', 'отладка', 'тестирование'],
              keyContributions: [
                'Участвовал в разработке проекта с самого старта, принимал участие в планировании архитектуры;',
                'Интегрировал приложение со сторонними сервисами (Facebook, Instagram);',
                'Благодаря использованию контейнеризации (Docker) значительно ускорил процесс доставки и развертывания приложения.',
              ],
            },
          ],
        },
        {
          workPeriod: 'Ноябрь 2019 – Март 2022',
          companyName: 'Техномаркет',
          website: 'https://tm-v.ru',
          career: 'Junior Front-end разработчик - Middle Front-end разработчик',
          projectList: [
            {
              projectDescription:
                'SMART-RIS - это медицинское программное обеспечение, которое упрощает и автоматизирует рабочие процессы для врачей-рентгенологов, специалистов по функциональной диагностике и клиницистов различных направлений.',
              workPeriod: 'Ноябрь 2019 – Март 2022',
              environment: ['React', 'Redux', 'NestJS', 'MySql', 'Sequilize', 'Jest', 'TypeScript', 'Git', 'Linux'],
              responsibilities: [
                'full-stack разработка',
                'техническое руководство',
                'реализация функционала',
                'отладка',
                'рефакторинг',
                'тестирование',
                'ревью кода',
              ],
              keyContributions: [
                'Участвовал в полном цикле разработки всех основных компонентов системы — веб-клиента, веб-сервера и десктоп-приложения — от MVP до полноценного решения, которое используется в медицинских учреждениях Воронежской и Липецкой областей;',
                'Руководил разработкой модуля «Конструктор отчетов» — функционала для динамического создания форм и PDF-шаблонов на основе гибких XML-схем;',
                'Участвовал в интеграции с другими медицинскими информационными системами, такими как ВОККДЦ и МедСофт;',
                'Внес вклад в проектирование архитектуры модуля «Конфигуратор» — ключевого компонента для настройки организаций, рабочих станций и связей между ними;',
                'Перенес ключевые функции из устаревшего десктоп-приложения в современное веб-решение.',
              ],
            },
          ],
        },
      ],
    },
    skillsData: {
      skills: [
        {
          title: 'Языки программирования',
          items: ['JavaScript', 'TypeScript', 'HTML', 'CSS/LESS/SCSS'],
        },
        {
          title: 'Фреймворки & библиотеки',
          items: ['Angular', 'React', 'Next.js', 'NestJS'],
        },
        {
          title: 'Базы данных',
          items: ['PostgreSQL', 'MySQL'],
        },
        {
          title: 'Тулзы & платформы',
          items: ['Git & GitHub & GitLub', 'Docker', 'Webpack', 'Jira & Confluence', 'Azure'],
        },
        {
          title: 'Софт-скилы',
          items: [
            'Ментринг',
            'Разрешение конфликтов',
            'Работа в команде',
            'Agile-методологии',
            'Коммуникабельность',
            'Адаптивность',
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
            'Chrome-расширение. Ваш идеальный способ управления браузером без мыши или клавиатуры с продвинутым распознаванием жестов и навигацией на основе искуственного интелекта.',
          stack: ['React', 'RxJS', 'Zustand', 'MUI', 'MediaPipe', 'Webpack', 'Typescript', 'Python'],
          links: {
            live: 'https://chromewebstore.google.com/detail/handysurf/bbpfkcnjhagmkpcglcmpgnnlkimpdeoo',
          },
        },
        {
          logo: stroyInTekhLogo,
          title: 'SIT36-вебсайт',
          description:
            'Сайт компании «СтройИнТех», специализирующейся на производстве накопительного и очистного оборудования.',
          stack: ['Next.js', 'SCSS', 'Jest', 'Playwright', 'StoryBook'],
          links: {
            live: 'https://sit36.ru',
            repo: 'https://github.com/a1exevs/stroy-in-tekh',
          },
        },
        {
          logo: lipsyncTimingCheckerLogo,
          title: 'Lipsync Timing Checker',
          description: 'Приложение для калибровки визем по звуковой дорожке.',
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
            'Библиотека TypeScript Guards. Эта библиотека предоставляет мощный набор вспомогательных функций для упрощения и оптимизации проверки типов и guards-валидации в вашем коде.',
          stack: ['Typescript'],
          links: {
            live: 'https://www.npmjs.com/package/@alexevs/ts-guards?activeTab=readme',
            repo: 'https://github.com/a1exevs/ts-guards',
          },
        },
      ],
    },
    contactsData: {
      contactLinks: [
        {
          href: 'https://github.com/a1exevs',
          label: 'Гитхаб',
          code: ContactLinkCode.GITHUB,
        },
        {
          href: 'https://voronezh.hh.ru/resume/10aa6646ff077b3cb70039ed1f47394e4f476f',
          label: 'hh.ru',
          code: ContactLinkCode.HEAD_HUNTER,
        },
        {
          href: 'https://www.linkedin.com/in/alexander-evstafiadi/',
          label: 'Линкедин',
          code: ContactLinkCode.LINKEDIN,
        },
        {
          href: 'mailto:aleksandrevstafiadi@gmail.com',
          label: 'Гугл почта',
          code: ContactLinkCode.GOOGLE_EMAIL,
        },
        {
          href: 'mailto:evstafiadi.shura@yandex.ru',
          label: 'Яндекс почта',
          code: ContactLinkCode.YANDEX_EMAIL,
        },
        {
          href: 'https://www.youtube.com/channel/UCVrwEd4-3guB5NFQ_oidREg',
          label: 'Ютуб',
          code: ContactLinkCode.YOUTUBE,
        },
        {
          href: 'https://leetcode.com/u/a1exevs/',
          label: 'Литкод',
          code: ContactLinkCode.LEETCODE,
        },
        {
          href: 'https://www.instagram.com/alexevs_gb',
          label: 'Инстаграм',
          code: ContactLinkCode.INSTAGRAM,
        },
        {
          href: 'https://api.whatsapp.com/send?phone=79601254138',
          label: 'Ватсап',
          code: ContactLinkCode.WHATSAPP,
        },
        {
          href: 'https://t.me/AlexanderEvstafiadi',
          label: 'Телеграм',
          code: ContactLinkCode.TELEGRAM,
        },
      ],
    },
  },
};

export default store;
