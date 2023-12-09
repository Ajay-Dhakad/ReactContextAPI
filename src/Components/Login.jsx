import React, {useContext,useState} from 'react'
import ProfileContext from '../ProfileContext'

function Login() {

    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')

    const {setUser} = useContext(ProfileContext)

    function setuserinfo() {
        
        setUser({username,password})
        setusername('')
        setpassword('')
        
    }

  return (
    <div className='login'>
      
      <input type="text" required placeholder='Username' value={username}  onChange={(e) => {setusername(e.target.value)}}/>
        
      <input type="password" required placeholder='Password' value={password}  onChange={(e) => {setpassword(e.target.value)}}/>
      <button type='submit'  onClick={setuserinfo} >LOGIN</button>

    </div>
  )
}

export default Login
