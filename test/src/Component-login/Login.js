import React from 'react'
import './Login.css'

const Login = () => {


  return (
    <div className='container'>
      <h4>Login</h4><hr color='black' />
      <from  >
        <input type="text" name="Username" placeholder='Username' /><br /><br />
        <input type="text" name="password" placeholder='Password' /><br /><br />
        <button>Login</button>
      </from>
      <div> <p>Not Momper ? <span><a href="">Signup</a></span></p> </div>
    </div>
  )
}

export default Login