import { getTodaysFormattedDate } from "./getTodaysFormattedDate";

export const getPersonFromSessionStorage = () => {
  const storedPerson = sessionStorage.getItem("person");
  return storedPerson
    ? JSON.parse(storedPerson)
    : {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      };
};

export const getEducationFromSessionStorage = () => {
  const storedEducation = sessionStorage.getItem("education");
  return storedEducation
    ? JSON.parse(storedEducation)
    : {
        schoolName: "",
        titleOfStudy: "",
        startOfStudy: getTodaysFormattedDate,
        endOfStudy: getTodaysFormattedDate,
      };
};

export const getExperienceFromSessionStorage = () => {
  const storedExperience = sessionStorage.getItem("experience");
  return storedExperience
    ? JSON.parse(storedExperience)
    : {
        company: "",
        position: "",
        startOfEmployment: getTodaysFormattedDate,
        endOfEmployment: getTodaysFormattedDate,
        ongoing: false,
        description: "",
      };
};
