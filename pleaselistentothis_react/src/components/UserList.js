const UserList = ({ users }) => {
  return (
    <>
      <div>
      <h2>All the users</h2>
      <ul>
        {users.map(user => {
          return (
            <ul>
            <li>First Name = {user.firstName}</li>
            <li> Last Name = {user.secondName} </li>
            <li> Username = {user.username}</li>
             <li>Password = {user.password},</li>
             </ul>

          )
        })}
      </ul>
    </div>
    </>
  )
}

export default UserList