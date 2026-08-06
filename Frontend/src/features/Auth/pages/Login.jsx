import { useState } from 'react'
import React  from 'react'
import { useAuth } from '../hooks/useAuth'


const Login = () => {

    const { loading, handleLogin } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const OnHandleSubmit = (e) => {
        e.preventDefault()
        handleLogin({
            email ,
            password
        })
    }

    if (loading) {
        return <main className='loader'></main>
    }


    return (
        <div id="login-main">
            <div id="login-main-upper">
                <img src="/screen.png" />
                <h1>Connect With DiOut</h1>
            </div>
            <div id="login-main-middle">
                <form onSubmit={OnHandleSubmit} id='login-form'>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder='Enter your email' />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder='Enter your password' />
                </form>
            </div>
            <div id="login-main-bottom">
                <button type="submit" form='login-form'>Log In</button>
            </div>
        </div>
    )
}

export default Login