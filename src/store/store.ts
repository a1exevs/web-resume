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
        { name: 'Frontend Development - JS/TS', yearsCount: 3 },
        { name: 'Backend Development - NodeJS', yearsCount: 3 },
        { name: 'Mobile development - JS/TS', yearsCount: 1 },
        { name: 'Desktop Development - C++ (Qt5)', yearsCount: 3 },
        { name: 'Python', yearsCount: 1 },
        { name: 'PHP', yearsCount: 3 },
        { name: 'MatLab', yearsCount: 3 },
      ]
    }
  },
  footer: {}
}

export default store;
