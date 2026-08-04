import React from 'react'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const [username , setUsername] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const {loading , handleRegister} = useAuth()

    const OnHandleSubmit = (e) => {
        e.preventDefault()
        handleRegister({
            username ,
            email ,
            password
        })

    }

    if (loading){
        return <main><h1>Loadingg ... .. ....</h1></main>
    }


  return (
    <div id="register-main">
        <div id="register-main-upper">
            <img src="./src/assets/screen.png"/>
            <h1>Connect With DiOut</h1>
        </div>
        <div id="register-main-middle">
            <form onSubmit={OnHandleSubmit} id='register-form'>
                <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Enter your username' name='username' />
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder='Enter your email' />
                <input onChange={(e)=>setPassword(e.target.value)} type="password" name='password' placeholder='Enter your password' />
            </form>
        </div>
        <div id="register-main-bottom">
            <button type="submit" form='register-form'>Sign Up</button>
        </div>
    </div>
  )
}

export default Register