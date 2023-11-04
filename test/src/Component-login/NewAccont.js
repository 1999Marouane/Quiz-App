import React, { useState } from 'react'
import './Login.css'
import shortid from 'shortid'


const NewAccont = (props) => {
  
    const [username, setusersname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({username,email,password});
        props.click({
            username,
            email,
            password,
            id: shortid.generate()
        })
        console.log(shortid.generate() );

        setemail('');
        setpassword('');
        setusersname('')
     

    }
   


    return (
        <div className='container' >
            <h4>create accont</h4><hr color='black' />
            <from onSubmit={handleSubmit} >
                <input type="text" name="username"  value={username} onChange={(event)=> setusersname(event.target.value)} placeholder='Username' /><br /><br />
                <input type="text" name="email"  value={email} onChange={(event)=> setemail(event.target.value)} placeholder='email' /><br /><br />
                <input type="text" name="new  password"  value={password} onChange={(event)=> setpassword(event.target.value)}placeholder='new  Password' /><br /><br />
                <button onClick={handleSubmit}>create accont</button>
                <p>Not Momper ? <span><a href="#">Login</a></span></p>
            </from>
        </div>
    )
}

export default NewAccont