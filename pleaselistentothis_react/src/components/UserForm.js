import { useState } from 'react'


const UserForm = ({ onUserSubmit }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const resetForm = () => {
    setUsername('')
    setPassword('')
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const payload = {
      username,
      password
    }
    onUserSubmit(payload)
    resetForm()
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" value={username} onChange={handleUsernameChange} />

      <label htmlFor="password">Password:</label>
      <input type="text" name="password" value={password} onChange={handlePasswordChange} />

      <input type="submit" value="Save" />
    </form>
  )
}

export default UserForm;