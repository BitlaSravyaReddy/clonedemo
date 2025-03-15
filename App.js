import React from 'react';
import { useState } from "react";
export function App(props)
{
const[inputs,setInputs]=useState({});
const handleChange=(event)=>{
const name=event.target.name;
const value=event.target.value;
setInputs(values=>({...values,[name]:value})) 
}
const handleSubmit=(event)=>{
event.preventDefault();
console.log(inputs);
alert('the name you entered is {inputs}');
}

return{
<form onSubmit={handleSubmit}>
<label>Enter your name:
<input type="text"
  name="username"
  value={inputs.username || ""}
  onChange={handleChange}
/>
<label>Enter your age:
<input type="number" name="age"
value={inputs.age||""}
onchange={handleChange}
/>
</label>
<input type="submit"/>
</form>
};
}


export default App;
