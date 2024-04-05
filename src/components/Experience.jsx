import { keyToDisplayName, keyToDisplayType } from "../utilities/keyToDisplay";
import { getExperienceFromSessionStorage } from "../utilities/getFromSessionStorage";
import { useState, useEffect } from "react";

const Experience = () => {
  const [experience, setExperience] = useState(
    getExperienceFromSessionStorage()
  );
  const [isEditable, setIsEditable] = useState(true);
  const [cachedEndOfEmploymentValue, setCachedEndOfEmploymentValue] =
    useState("");

  const experienceArr = Object.entries(experience);

  useEffect(() => {
    sessionStorage.setItem("experience", JSON.stringify(experience));
  }, [experience]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "ongoing") {
      const checkbox = e.target;
      const checked = checkbox.checked;

      if (checked) {
        checkbox.value = true;
        setCachedEndOfEmploymentValue(experience.endOfEmployment);
        setExperience({
          ...experience,
          [name]: checked,
          endOfEmployment: "",
        });
      } else {
        checkbox.value = false;
        setExperience({
          ...experience,
          [name]: checked,
          endOfEmployment: cachedEndOfEmploymentValue,
        });
      }
    } else {
      setExperience({ ...experience, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditable(false);
  };

  return (
    <section className="experience__info">
      <h2>Experience</h2>
      <form
        className="form__experience"
        onSubmit={handleSubmit}
      >
        {experienceArr.map(([key, value]) => {
          if (key === "description") {
            return (
              <div
                className="input-field"
                key={key}
              >
                <label htmlFor={key}>{keyToDisplayName[key]}: </label>
                <textarea
                  id={key}
                  name={key}
                  rows="5"
                  cols="41"
                  {...(isEditable
                    ? { required: "required" }
                    : { disabled: "disabled" })}
                  placeholder={`Please type in your ${keyToDisplayName[key]}`}
                  onChange={handleInputChange}
                />
              </div>
            );
          } else if (key === "ongoing") {
            return (
              <div
                className="input-field"
                key={key}
              >
                <label htmlFor={key}>{keyToDisplayName[key]}</label>
                <input
                  type={keyToDisplayType[key]}
                  id={key}
                  name={key}
                  value={value}
                  {...([key].value && { checked: "checked" })}
                  onChange={handleInputChange}
                  {...(!isEditable && { disabled: "disabled" })}
                />
              </div>
            );
          } else if (key === "endOfEmployment") {
            return (
              <div
                className="input-field"
                key={key}
              >
                <label htmlFor={key}>{keyToDisplayName[key]}</label>
                <input
                  type={keyToDisplayType[key]}
                  id={key}
                  name={key}
                  value={value}
                  {...(experience.ongoing === false && isEditable
                    ? { required: "required" }
                    : { disabled: "disabled" })}
                  placeholder={`Please type in your ${keyToDisplayName[key]}`}
                  onChange={handleInputChange}
                />
              </div>
            );
          } else {
            return (
              <div
                className="input-field"
                key={key}
              >
                <label htmlFor={key}>{keyToDisplayName[key]}: </label>
                <input
                  name={key}
                  type={keyToDisplayType[key]}
                  {...(isEditable
                    ? { required: "required" }
                    : { disabled: "disabled" })}
                  placeholder={`Please type in your ${keyToDisplayName[key]}`}
                  value={value}
                  onChange={handleInputChange}
                />
              </div>
            );
          }
        })}
        {isEditable ? (
          <input
            className="save-btn"
            type="submit"
            value="Save"
          />
        ) : (
          <button
            className="edit-btn"
            onClick={() => setIsEditable(true)}
          >
            Edit
          </button>
        )}
      </form>
    </section>
  );
};

export default Experience;
