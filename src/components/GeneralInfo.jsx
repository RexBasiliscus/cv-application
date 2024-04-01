import { keyToDisplayName, keyToDisplayType } from "../utilities/keyToDisplay";
import { getPersonFromSessionStorage } from "../utilities/getFromSessionStorage";
import { useState, useEffect } from "react";

const GeneralInfo = () => {
  const [person, setPerson] = useState(getPersonFromSessionStorage());
  const [isEditable, setIsEditable] = useState(true);

  const personArr = Object.entries(person);

  useEffect(() => {
    sessionStorage.setItem("person", JSON.stringify(person));
  }, [person]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name in person) {
      setPerson({ ...person, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditable(false);
  };

  return (
    <section className="general__info">
      <h2>General Information</h2>
      <form
        className="form__general"
        onSubmit={handleSubmit}
      >
        {personArr.map(([key, value]) => (
          <div
            className="input-field"
            key={key}
          >
            <label htmlFor={key}>{keyToDisplayName[key]}: </label>
            <input
              name={key}
              type={keyToDisplayType[key]}
              {...(key === "phone" && {
                pattern: "[0-9]{9}",
                title: "Please enter a 9-digit phone number",
              })}
              {...(isEditable
                ? { required: "required" }
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
    </section>
  );
};

export default GeneralInfo;
