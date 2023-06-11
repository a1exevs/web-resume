import photo from 'src/assets/images/photo.jpg';
import { ContentTabName, Store } from 'src/store/store.types';
import { IconName } from 'src/ui/common/components/Icon/Icon';

const store: Store = {
  header: {
    lastUpdateDate: new Date('2/13/2023'),
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
          workPeriod: '21.03.2022 – Present',
          companyName: 'DSR Corporation',
          website: 'https://en.dsr-corporation.com',
          career: 'Software Engineer',
          projectList: [
            {
              projectDescription: 'Frontend development (LABWORKS Web Client)',
              environment: ['Windows', 'Git', 'Azure', 'Angular2+/AngularJS/React', 'RxJS', 'TS/JS', 'Jest'],
              responsibilities: ['design', 'implementation', 'debug', 'testing'],
            },
            {
              projectDescription: 'Microfrontend/REST API development (REDX Ad Builder)',
              environment: [
                'Windows',
                'WSL2',
                'Git',
                'Gitlab',
                'Vue',
                'NestJS',
                'MariaDB',
                'MicroORM',
                'TS/JS',
                'Jest',
              ],
              responsibilities: ['design', 'implementation', 'debug', 'testing'],
            },
          ],
        },
        {
          workPeriod: '22.11.2019 – 18.03.2022',
          companyName: 'Technomarket',
          website: 'https://tm-v.ru',
          career: 'Software Engineer',
          projectList: [
            {
              projectDescription: 'REST API development',
              environment: ['Linux', 'Git', 'NestJS', 'MySql', 'Sequilize', 'TypeScript'],
              responsibilities: ['implementation', 'debug', 'testing'],
            },
            {
              projectDescription: 'Web client development (SPA)',
              environment: ['Linux', 'Git', 'React', 'Redux', 'Jest', 'TypeScript'],
              responsibilities: ['design', 'implementation', 'debug', 'testing'],
            },
            {
              projectDescription: 'Desktop client',
              environment: ['Linux', 'Jenkins', 'Git', 'Qt5', 'qmake', 'C++11'],
              responsibilities: ['tech leading', 'design', 'implementation', 'debug', 'testing'],
            },
            {
              projectDescription: 'SOAP/REST-server development',
              environment: ['Linux', 'Kohana', 'MySql', 'Zend Soap', 'PHP'],
              responsibilities: ['implementation', 'tech leading', 'debug', 'testing'],
            },
          ],
        },
        {
          workPeriod: '11.2018 – 05.2019',
          companyName: 'Ratex (on the basis of VSU)',
          website: 'https://www.rusprofile.ru/id/2201449',
          career: 'Junior Physics Researcher',
          projectList: [
            {
              projectDescription: 'Software for research in the area of SISO and MIMO Radio channels',
              environment: ['Windows', 'Matlab', 'Qt5', 'qmake', 'C++11'],
              responsibilities: ['implementation', 'debug', 'testing'],
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
  footer: {
    copyrightLabel: '© 2023 Alexander Evstafiadi',
  },
};

export default store;
