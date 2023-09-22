import React, { useState } from 'react'
import "../styles.scss"
import emailImg from "../../../assets/icons/email.svg"
import userImg from "../../../assets/icons/user.svg"
import passwordImg from "../../../assets/icons/password.svg"
import logoImg from '../../../assets/icons/Logo.png'
import { registration } from '../../../components/actions/user'
import Input from '../../../components/UI/formInput/Input'

function RegistrationPage() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div className='auth'>
         <div className='auth-form'>
         <img src={logoImg} alt="logo" className='auth-form__logo'/>
          <Input value={email} onChangeHandler={setEmail} text={"Email"} iconImg={emailImg}/>
          <Input value={username} onChangeHandler={setUsername} text={"Username"} iconImg={userImg}/>
         <Input value={password} onChangeHandler={setPassword} text={"Password"} iconImg={passwordImg}/>
         <button className='authButton' onClick={()=>registration(email, username, password)}>Sign up</button>
         
        </div>
    </div>
  )
}

export default RegistrationPage