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
    <ul>
      <label htmlFor="firstName">First Name:</label>
      <li><input type="text" name="firstName" value={firstName} onChange={handleFirstNameChange} /></li>
      <label htmlFor="secondName">Last Name:</label>
      <li><input type="text" name="secondName" value={secondName} onChange={handleSecondNameChange} /></li>
      <label htmlFor="username">Username:</label>
      <li><input type="text" name="username" value={username} onChange={handleUsernameChange} /></li>
      <label htmlFor="password">Password:</label>
      <li><input type="text" name="password" value={password} onChange={handlePasswordChange} /></li>
      </ul>
      <input type="submit" value="Save" />
    </form>
  
  )
}

export default UserForm;