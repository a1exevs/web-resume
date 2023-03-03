import {ContentTabNames, Store} from "src/store/store.types";
import photo from 'src/assets/images/photo.jpg';

const store: Store = {
  header: {
    lastUpdateDate: "13.02.2023"
  },
  commonInfo: {
    photoPath: photo,
    fullName: "Alexander Olegovich Evstafiadi",
    birthday: "22.02.1996",
    city: "Voronezh (Russia)",
    workAt: "DSR Corporation",
    summary: "Over 3 years of experience in software engineering including system analysis, design, application development and writing technical documentation."
  },
  content: {
    tabs: [
      ContentTabNames.TECHNICAL_SKILLS,
      ContentTabNames.CAREER_HISTORY,
      ContentTabNames.PERSONAL_INFORMATION,
    ],
    technicalSkills: {
      technicalAreas: [
        {name: 'Frontend Development - JS/TS', yearsCount: 3},
        {name: 'Backend Development - NodeJS', yearsCount: 3},
        {name: 'Mobile development - JS/TS', yearsCount: 1},
        {name: 'Desktop Development - C++ (Qt5)', yearsCount: 3},
      ],
      languages: ['JS/TS', 'HTML', 'CSS/LESS/SASS/SCSS', 'SQL', 'C/C++', 'PHP', 'Python', 'Bash'],
      operatingSystems: ["Linux", "Windows", "Android", "iOS", "MacOS"],
      technologies: [
        {
          language: 'JS/TS',
          technologies: [
            "Angular2+",
            "AngularJS",
            "NestJS",
            "React",
            "Redux",
            "Vue",
            "Express",
            "Sequilize",
            "TypeORM",
            "MicroORM",
            "Jest",
            "React Native",
            "Webpack"
          ]
        },
        {language: 'C/C++', technologies: ["Qt5", "CMake", "qmake", "qsoap"]},
        {language: 'PHP', technologies: ["Kohana", "Zend Soap"]},
      ],
      software: [
        {
          id: 0,
          softList: ["WebStorm", "VSCode", "Postman", "Qt Creator", "PhpStorm", "Android Studio", "SoapUI", "Wireshark", "MSVS", "Git Kraken"]
        },
        {id: 1, softList: ["Git", "Jenkins", "Jira", "Celoxis", "Figma", "Azure", "Github", "Gitlab"]},
        {id: 2, softList: ["Vim", "GDB", "Valgrind", "Eclipse"]},
        {id: 3, softList: ["Swagger", "Doxygen", "TeX", "MSOffice", "LibreOffice", "GoogleDrive", "Google Sites"]},
        {id: 4, softList: ["Linux shell and server administration (LAMP)"]},
        {id: 5, softList: ["Docker/Docker Compose"]},
      ],
      networking: ["TCP/IP", "REST", "SOAP", "Sockets", "Cisco CCNA education"],
    },
    careerHistory: {
      companyExperiences: [
        {
          workPeriod: "21.03.2022 – Present",
          companyName: "DSR Corporation",
          career: "Software Engineer",
          projectList: [
            {
              projectDescription: "Frontend development (LABWORKS Web Client)",
              environment: ["Windows", "Git", "Azure", "Angular2+/AngularJS/React", "RxJS", "TS/JS", "Jest"],
              responsibilities: ["design", "implementation", "debug", "testing"],
            },
            {
              projectDescription: "Microfrontend/REST API development (REDX Ad Builder)",
              environment: ["Windows", "WSL2", "Git", "Gitlab", "Vue", "NestJS", "MariaDB", "MicroORM", "TS/JS", "Jest"],
              responsibilities: ["design", "implementation", "debug", "testing"],
            },
          ],
        },
        {
          workPeriod: "22.11.2019 – 18.03.2022",
          companyName: "Technomarket",
          career: "Software Engineer",
          projectList: [
            {
              projectDescription: "REST API development",
              environment: ["Linux", "Git", "NestJS", "MySql", "Sequilize", "TypeScript"],
              responsibilities: ["implementation", "debug", "testing"],
            },
            {
              projectDescription: "Web client development (SPA)",
              environment: ["Linux", "Git", "React", "Redux", "Jest", "TypeScript"],
              responsibilities: ['design', "implementation", "debug", "testing"],
            },
            {
              projectDescription: "Desktop client",
              environment: ["Linux", "Jenkins", "Git", "Qt5", "qmake", "C++11"],
              responsibilities: ["tech leading", "design", "implementation", "debug", "testing"],
            },
            {
              projectDescription: "SOAP/REST-server development",
              environment: ["Linux", "Kohana", "MySql", "Zend Soap", "PHP"],
              responsibilities: ["implementation", "tech leading", "debug", "testing"],
            }
          ],
        }
      ]
    }
  },
  footer: {}
}

export default store;
