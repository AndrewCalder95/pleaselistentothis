import React, {useState, useEffect} from 'react';
import LoginForm from '../components/LoginForm'
import UserList from '../components/UserList'
import { Link } from 'react-router'

const LoginContainer = () => {

    const [login, setLogin] = useState([]);

    
   const handleUserSubmit = User => {
    fetch("http://localhost:8080/login", {
        method: 'POST',
        body: JSON.stringify(User),
        headers: { 'Content-Type': 'application/json' }
        })
   }
   

return(
    <div>
    <LoginForm 
    onUserSubmit={handleUserSubmit}
    />
    </div>
 )
}

export default LoginContainer