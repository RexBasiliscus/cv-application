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
