import React from 'react'
import { Link } from 'react-router-dom'
import './Result.css';

const Result = (props) => {
  return (
    <div>
      <h4>   {props.resnump}/20    </h4>
      <p> <Link to="/">repeat</Link></p>
    </div>
  )
}

export default Result