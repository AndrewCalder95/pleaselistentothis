import React, {useState, useEffect} from 'react';
import UserForm from '../components/UserForm'
import UserList from '../components/UserList'
import { Link } from 'react-router'

const RegisterContainer = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetchUsers();
      }, []);

    const fetchUsers = () => {
        return fetch('http://localhost:8080/api/users')
        .then(response => response.json())
        .then(users => setUsers(users));
        console.log(users)
  }
    
   const handleUserSubmit = newUser => {
    fetch("http://localhost:8080/api/users", {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: { 'Content-Type': 'application/json' }
        })
        .then(() => fetchUsers())
   }
   

return(
    <div>
    <UserForm 
    onUserSubmit={handleUserSubmit}
    />
  
    {/* <UserList users = {users}/> */}
    </div>
 )
}

export default RegisterContainer