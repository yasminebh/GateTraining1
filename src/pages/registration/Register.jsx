import React, { useState } from 'react'

const Register = () => {

   const [user, setUser] = useState({})



const handleSubmit = (e)=> {
  e.preventdefault(),
  setUser(e.target.value)
}
  return (
    <div className='container'>
      <form action="" >
        <label htmlFor=""> Name </label>
        <input type="text" name="name" placeholder="Name" /> <br />

        <label htmlFor=""> Password </label>
        <input type="password" name="password" placeholder="password" /> <br />

        <label htmlFor=""> email </label>
        <input type="email" name="email" placeholder="email" />
        <br />
        <label htmlFor=""> phone </label>
        <input type="text" name="phone" placeholder="phone" />
        <br /> <br />
    <button type="submit" onClick={handleSubmit}>
      Register 
    </button>

      </form>
    </div>
  );
}

export default Register