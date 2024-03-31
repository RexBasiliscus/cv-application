import { keyToDisplayName, keyToDisplayType } from "../utilities/keyToDisplay";
import { getEducationFromSessionStorage } from "../utilities/getFromSessionStorage";
import { useState, useEffect } from "react";

const Education = () => {
  const [education, setEducation] = useState(getEducationFromSessionStorage());
  const [isEditable, setIsEditable] = useState(true);

  useEffect(() => {
    sessionStorage.setItem("education", JSON.stringify(education));
  }, [education]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name in education) {
      setEducation({ ...education, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditable(false);
  };

  const educationArr = Object.entries(education);

  return (
    <section className="education__info">
      <h2>Education</h2>
      <div className="education__wrapper">
        <form
          className="form__education"
          onSubmit={handleSubmit}
        >
          {educationArr.map(([key, value]) => (
            <div
              className="input-field"
              key={key}
            >
              <label htmlFor={key}>{keyToDisplayName[key]}: </label>
              <input
                name={key}
                type={keyToDisplayType[key]}
                {...(isEditable
                  ? { required: "required " }
                  : { disabled: "disabled" })}
                placeholder={`Please type in your ${keyToDisplayName[key]}`}
                value={value}
                onChange={handleInputChange}
              />
            </div>
          ))}
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
      </div>
    </section>
  );
};

export default Education;
