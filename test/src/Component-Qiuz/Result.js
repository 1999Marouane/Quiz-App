import React from 'react'
import { Link } from 'react-router-dom'

const Result = (props) => {
  return (
    <div>
      <h4>   {props.resnump}/20    </h4>
      <Link to="/">repeat</Link>
    </div>
  )
}

export default Result