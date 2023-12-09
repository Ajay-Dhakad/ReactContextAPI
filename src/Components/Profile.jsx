import React,{ useContext} from 'react'
import ProfileContext from '../ProfileContext'
import Login from '../Components/Login.jsx'

function Profile() {

  const {user,setUser} = useContext(ProfileContext)


  return (
    <div className='profile'>
      <h1> {user ?  `Welcome ${user.username}`  :'Tell me who are you ?'} </h1>
      { !user ? <Login/> : "Login Successful !"}
      
    </div>
  )
}

export default Profile
