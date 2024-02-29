import React, { useState } from 'react'
import {Link} from 'react-router-dom'
export const SignUp = () => {

  const [formData,setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] :e.target.value
    })
  }
  console.log(formData)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username'
          id='username' className='border p-3 rounded-lg outline-none'   onChange={handleChange} />
          <input type="email" placeholder='email'
          id='email' className='border p-3 rounded-lg outline-none' onChange={handleChange} />
          <input type="password" placeholder='password'
          id='password' className='border p-3 rounded-lg outline-none' onChange={handleChange} />
          <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 uppercase disabled:opacity-80'>Sign up</button>
      </form>
      <div className='flex gap-2 mt-3'>
        <p>Have an account?</p>
       <Link to={"/sign-in"}>
        <span className='text-blue-800'>Sign In</span>
       </Link>
      </div>
    </div>
  )
}
