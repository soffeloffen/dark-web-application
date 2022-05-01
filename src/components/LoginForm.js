import React from 'react'
import { useForm } from "react-hook-form"

const LoginForm = () => {

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div>LoginForm
      <h1>HEJSA</h1>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='Email' name='User Name' ref={register}></input>
            <input type='text' placeholder='Password' name='Password' ref={register}></input>
            <input type='submit'></input>
        </form> */}
    </div>
  )
}

export default LoginForm