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
        startOfStudy: "2024-01-01",
        endOfStudy: "2024-01-01",
      };
};

export const getExperienceFromSessionStorage = () => {
  const storedExperience = sessionStorage.getItem("experience");
  return storedExperience
    ? JSON.parse(storedExperience)
    : {
        company: "",
        position: "",
        startOfEmployment: "2024-01-01",
        endOfEmployment: "2024-01-01",
        ongoing: false,
        description: "",
      };
};
