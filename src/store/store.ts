import {Store} from "./store.types";
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
    summary: "Over 3 years of experience in software engineering\n" + "including system analysis, design, application development and writing technical documentation."
  },
  content: {},
  footer: {}
}

export default store;
