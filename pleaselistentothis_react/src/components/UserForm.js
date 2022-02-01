import { useState } from 'react'



const UserForm = ({ onUserSubmit }) => {

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleSecondNameChange = (event) => {
    setSecondName(event.target.value)
  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const resetForm = () => {
    setFirstName('')
    setSecondName('')
    setUsername('')
    setPassword('')
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const payload = {
      firstName,
      secondName,
      username,
      password
    }
    onUserSubmit(payload)
    resetForm()
    
  }

  return (
    <form onSubmit={handleFormSubmit}>
    
      <label htmlFor="firstName">First Name:</label>
      <input type="text" name="firstName" value={firstName} onChange={handleFirstNameChange} />
      <label htmlFor="secondName">Last Name:</label>
      <input type="text" name="secondName" value={secondName} onChange={handleSecondNameChange} />
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" value={username} onChange={handleUsernameChange} />
      <label htmlFor="password">Password:</label>
      <input type="text" name="password" value={password} onChange={handlePasswordChange} />

      <input type="submit" value="Save" />
    </form>
  
  )
}

export default UserForm;