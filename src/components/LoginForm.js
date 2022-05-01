import React from 'react'
import { useForm } from "react-hook-form"
import "./LoginForm.css"

const LoginForm = () => {

  

  return (
    <div className='LoginForm'> LoginForm
        <form className='labels'>
            <input type='text' placeholder='Email' name='User Name' className='labels' id='username'></input>
            <input type='text' placeholder='Password' name='Password' className='labels' id='password' ></input>
            <input type='submit' className='labels'></input>
        </form>
    </div>
  )
}

export default LoginForm