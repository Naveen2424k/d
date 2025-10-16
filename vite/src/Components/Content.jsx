import React from 'react'
import { useState } from 'react';
export default function Content() {

    const [form, setForm] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChange=(e)=>{
        setForm({...form,[e.target.email]:e.target.value});
        console.log(form);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("form submitted");
    }
  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" name="name" id="name" onChange={handleChange} /><br />
        Age:    <input type="text" name="age" id="age" onChange={handleChange} /><br />
        Email:      <input type="email" name="email" id="email"  onChange={handleChange} /> 
        <button type='submit'> submit</button>      
      </form>
    </div>
  )
}
