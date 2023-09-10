import React from 'react'
import "./styles.scss"
import Rocket1 from '../../components/rocket-3d/Rocket1'
import AuthForm from '../../components/AuthForm/AuthForm'


function Auth() {
  return (
    <div className='auth'>
      <div className='auth__rocket'>
         <Rocket1/>
      </div>
      <div className='auth__form'>
          <AuthForm/>
      </div>
       
    </div>
  )
}

export default Auth