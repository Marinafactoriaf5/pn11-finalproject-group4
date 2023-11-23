import React from 'react'
import Vivid from'../../assets/Logo.png'

function Logo() {
  return (
    <div> <a href="/" className="logo-link">
    <img src={Vivid} className="logo" alt="VIVID" />
    </a></div>
  )
}

export default Logo;