const UserList = ({ users }) => {
  return (
      <div>
      <h2>All the users</h2>
      <ul>
        {users.map(user => {
          return (
            <li key={user.username}>Username = {user.username}Password = {user.password}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default UserList