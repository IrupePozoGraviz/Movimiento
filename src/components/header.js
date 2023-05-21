import React from 'react'
import logo from '../images/logo.svg';
import './css/headerandmain.css';

export const Header = () => {
  return (

    <div className="logo">
      <img className="Movimiento" src={logo} alt="logo" />
    </div>
  )
}
