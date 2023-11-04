import React from 'react'
import './Login.css'


const NewAccont = () => {
  return (
    <div className='container'>
        <h4>create accont</h4><hr color='black' />
        <from  >
        <input type="text" name="Username" placeholder='Username' /><br /><br />
        <input type="text" name="email" placeholder='email' /><br /><br />
        <input type="text" name="new  password" placeholder='new  Password' /><br /><br />
        <button>create accont</button>
         <p>Not Momper ? <span><a href="#">Login</a></span></p>
      </from>
    </div>
  )
}

export default NewAccont