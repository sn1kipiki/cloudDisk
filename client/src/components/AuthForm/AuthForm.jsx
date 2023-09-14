import React, { useState } from 'react'
import AuthButton from '../UI/authButton/authButton'
import "./styles.scss"
import logoImg from "./assets/Logo.png"
import emailImg from "./assets/email.svg"
import userImg from "./assets/user.svg"
import passwordImg from "./assets/password.svg"
import { registration } from '../actions/user'
import Input from '../UI/formInput/Input'


function AuthForm() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='auth-form'>
        <img src={logoImg} alt="logo" className='auth-form__logo'/>
        <Input value={email} onChangeHandler={setEmail} text={"Email"} iconImg={emailImg}/>
        <Input value={username} onChangeHandler={setUsername} text={"Username"} iconImg={userImg}/>
        <Input value={password} onChangeHandler={setPassword} text={"Password"} iconImg={passwordImg}/>
         <AuthButton onClickHandler={registration} data={{email, username, password}} text="Sign up"/>
      
        
    </div>
  )
}

export default AuthForm