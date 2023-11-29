import React from 'react'
import Vivid from'../../assets/Logo.png'
import "./Logo.css"

function Logo() {
  return (
    <div> <a href="/home" className="logo-link">
    <img src={Vivid} className="logo" alt="VIVID" />
    </a></div>
  )
}

export default Logo;