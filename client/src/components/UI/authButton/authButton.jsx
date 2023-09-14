import React from 'react'
import "./styles.scss"

function LogInButton({text, onClickHandler, data}) {
  return (
    <button onClick={()=> onClickHandler(data.email, data.username, data.password)} className='logInButton'>{text}</button>
  )
}

export default LogInButton