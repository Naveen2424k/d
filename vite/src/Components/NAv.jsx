import React from 'react'
import {Link} from "react-router-dom"
import Home from "./Home"
import Task from "../Task6"
import Content from "./Content"
export default function NAv() {
  return (
    <div>
      <h1>NAv Component</h1>  
        <Link to="/">Go to Home Component</Link>
        <Link to="/task">Go to Task6 Component</Link>
        <Link to="/content">Go to Content Component</Link>
    </div>
  )
}
