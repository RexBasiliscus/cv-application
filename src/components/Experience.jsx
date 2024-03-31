import { keyToDisplayName, keyToDisplayType } from "../utilities/keyToDisplay";
import { getExperienceFromSessionStorage } from "../utilities/getFromSessionStorage";
import { useState, useEffect } from "react";

const Experience = () => {
  const [experience, setExperience] = useState(
    getExperienceFromSessionStorage()
  );
  const [isEditable, setIsEditable] = useState(true);

  const experienceArr = Object.entries(experience);

  useEffect(() => {
    sessionStorage.setItem("experience", JSON.stringify(experience));
  }, [experience]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "ongoing") {
      setExperience({ ...experience, [name]: e.target.checked });
    }

    if (name in experience) {
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
                  id="description"
                  name="description"
                  rows="5"
                  cols="41"
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
                  id="ongoing"
                  name={key}
                  checked={value}
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
