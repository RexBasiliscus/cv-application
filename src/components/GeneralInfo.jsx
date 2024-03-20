import { keyToDisplayName, keyToDisplayType } from '../utilities/keyToDisplay'

const GeneralInfo = ({ handleInputChange, person, handleSubmit, isEditable, onClick }) => {

  const personArr = Object.entries(person)
  // console.log(personArr)


  return (
    <section className="general__info">
        <h2>General Information</h2>
        <form className="form__general" onSubmit={handleSubmit} >
          {personArr.map(([key, value]) => (
            <div className="input-field" key={key}>
              <label htmlFor={key}>{keyToDisplayName[key]}: </label>
              <input 
                name={key}
                type={keyToDisplayType[key]}
                {...(key === "phone" && { pattern: "[0-9]{9}", title: "Please enter a 9-digit phone number" })}
                {...(isEditable ? { required: "required" } : { disabled: "disabled" })}
                placeholder={`Please type in your ${keyToDisplayName[key]}`} 
                value={value}
                onChange={handleInputChange}
                />
            </div>
          ))}
            {isEditable ? 
              <input 
                className="save-btn" 
                type="submit" 
                value="Save" /> :
              <button 
                className="edit-btn"
                onClick={onClick}>
                  Edit
              </button>
            }
        </form>
      </section>
  )
}

export default GeneralInfo