import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
export const SignUp = () => {

  const [formData,setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] :e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const isFormValid = formData.username && formData.email && formData.password; 

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='username'
          id='username' className='border p-3 rounded-lg outline-none' onChange={handleChange} />
       
          <input type="email" placeholder='email'
          id='email' className='border p-3 rounded-lg outline-none' onChange={handleChange} />
      
          <input type="password" placeholder='password'
          id='password' className='border p-3 rounded-lg outline-none' onChange={handleChange}/>
       
          <button disabled={loading || !isFormValid} className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 uppercase disabled:opacity-80'>{loading ? 'loading...' : 'Sign Up'}</button>
      </form>
      <div className='flex gap-2 mt-3'>
        <p>Have an account?</p>
       <Link to={"/sign-in"}>
        <span className='text-blue-800'>Sign In</span>
       </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error} </p>}
    </div>
  )
}