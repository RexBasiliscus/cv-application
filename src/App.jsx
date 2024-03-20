import { useEffect, useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import { getPersonFromSessionStorage, getEducationFromSessionStorage } from './utilities/getFromSessionStorage'

function App() {
  const [person, setPerson] = useState(getPersonFromSessionStorage())
  const [education, setEducation] = useState(getEducationFromSessionStorage())
  const [isEditable, setIsEditable] = useState(true)

  useEffect(() => {
    sessionStorage.setItem("person", JSON.stringify(person))
    sessionStorage.setItem("education", JSON.stringify(education))
  }, [person, education])

  // useEffect(() => {
  //   sessionStorage.setItem("education", JSON.stringify(education))
  // }, [education])

  const handleInputChange = (e) => {
    const { name, value } = e.target

    if (name in person) {
      setPerson({ ...person, [name]: value })
    } else if (name in education) {
      setEducation({ ...education, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    console.log('Form submitted.')
    setIsEditable(false)
  }

  return (
    <>
      <header>
        <h1>CV Application Creator</h1>
      </header>

        <div>
          <GeneralInfo 
            person={person} 
            handleInputChange={handleInputChange} 
            onClick={() => setIsEditable(true)}
            handleSubmit={handleSubmit}
            isEditable={isEditable} />
          <Education 
            education={education}
            handleInputChange={handleInputChange}
            onClick={() => setIsEditable(true)}
            handleSubmit={handleSubmit}
            isEditable={isEditable} /> 
        </div>
    </>
  )
}

export default App
