import React, { useState } from 'react'

import './Login.css'
import shortid from 'shortid'
import { Link } from 'react-router-dom'
// import { createObjectCsvWriter } from 'csv-writer';


const NewAccont = () => {
  
    const [username, setusersname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = (e,data) => {
        e.preventDefault()
       
       console.log({
            username,
            email,
            password,
            id: shortid.generate()
        })
        // exportToCSV(data)
        setemail('');
        setpassword('');
        setusersname('')

    }

    // function exportToCSV(data) {
    //     const csvWriter = createObjectCsvWriter({
    //       path: 'exported-data.csv', // Change the file name and path as needed
    //       header: [
    //         { id: 'id', title:  shortid.generate()},
    //         { id: 'username', title: 'username' },
    //         { id: 'email', title: 'email' },
    //         { id: 'password', title: 'password' },
    //       ],
    //     });
      
    //     csvWriter.writeRecords(data)
    //       .then(() => console.log('The CSV file was written successfully'))
    //       .catch(error => console.error('Error writing the CSV file', error));
    //   }
   


    return (
        <div className='container' >
            <h4>create accont</h4><hr color='black' />
            <from onSubmit={handleSubmit} >
                <input type="text" name="username"  value={username} onChange={(event)=> setusersname(event.target.value)} placeholder='Username' /><br /><br />
                <input type="text" name="email"  value={email} onChange={(event)=> setemail(event.target.value)} placeholder='email' /><br /><br />
                <input type="text" name="new  password"  value={password} onChange={(event)=> setpassword(event.target.value)}placeholder='new  Password' /><br /><br />
                <button onClick={handleSubmit}>create accont</button>
                <p>Not Momper ? <span><Link to="/">Login</Link></span></p>
            </from>
        </div>
    )
}

export default NewAccont