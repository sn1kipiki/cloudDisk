import React, { useState } from 'react'
import AuthButton from '../UI/authButton/authButton'
import "./styles.scss"
import logoImg from "./assets/Logo.png"
import emailImg from "./assets/email.svg"
import userImg from "./assets/user.svg"
import passwordImg from "./assets/password.svg"
import { registration } from '../actions/user'


function AuthForm() {

    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


  return (
    <div className='auth-form'>
        <img src={logoImg} alt="logo" className='auth-form__logo'/>
        <div className='auth-form__field'>
            <input value={email}  onChange={(e)=> setEmail(e.target.value)} className='auth-form__input' required/>
            <label className='auth-form__text'>Email</label>
            <img className='auth-form__icon' src={emailImg} alt="email icon" />
        </div>
        <div className='auth-form__field'>
            <input value={username} onChange={(e)=> setUsername(e.target.value)} className='auth-form__input' required/>
            <label className='auth-form__text'>Usermame</label>
            <img className='auth-form__icon' src={userImg} alt="username icon" />
        </div>
        <div className='auth-form__field'>
            <input type='password' className='auth-form__input' required/>
            <label className='auth-form__text'>Password</label>
            <img className='auth-form__icon' src={passwordImg} alt="password icon" />
        </div>
        <div className='auth-form__field'>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' className='auth-form__input' required/>
            <label  className='auth-form__text'>Confirm password</label>
            <img className='auth-form__icon' src={passwordImg} alt="password icon" />
        </div>
        <AuthButton onclick={registration} text="Sign up"/>
        
    </div>
  )
}

export default AuthForm