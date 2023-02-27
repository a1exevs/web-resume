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
        {name: 'Python', yearsCount: 1},
        {name: 'PHP', yearsCount: 3},
        {name: 'MatLab', yearsCount: 3},
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
            "React Native"
          ]
        },
        {language: 'C/C++', technologies: ["Qt5", "CMake", "qmake", "qsoap"]},
        {language: 'PHP', technologies: ["Kohana", "Zend Soap"]},
      ],
      software: [
        { id: 0, softList: ["WebStorm", "VSCode", "Postman", "Qt Creator", "PhpStorm", "Android Studio", "SoapUI", "Wireshark", "MSVS", "Git Kraken"]},
        { id: 1, softList: ["Git", "Jenkins", "Jira", "Celoxis", "Figma", "Azure", "Github", "Gitlab"]},
        { id: 2, softList: ["Vim", "GDB", "Valgrind", "Eclipse"]},
        { id: 3, softList: ["Swagger", "Doxygen", "TeX", "MSOffice", "LibreOffice", "GoogleDrive", "Google Sites"]},
        { id: 4, softList: ["Linux shell and server administration (LAMP)"]},
        { id: 5, softList: ["Docker/Docker Compose"]},
      ],
      networking: ["TCP/IP", "REST", "SOAP", "Sockets", "Cisco CCNA education"],
    }
  },
  footer: {}
}

export default store;
