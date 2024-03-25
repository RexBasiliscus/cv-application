import { keyToDisplayName, keyToDisplayType } from "../utilities/keyToDisplay";

const Education = ({
  handleInputChange,
  education,
  isEditable,
  onClick,
  handleSubmit,
}) => {
  const educationArr = Object.entries(education);
  // console.log(educationArr)

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
              onClick={onClick}
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
