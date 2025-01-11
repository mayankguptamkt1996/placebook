import React from 'react'
import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'
import './MainNavigation.css'
import NavLinks from './NavLinks'

export default function MainNavigation(props) {
  return (
    <MainHeader>
        <button className='main-navigation__menu-btn'>
            <span />
            <span />
            <span />
        </button>
        <h1 className = "main_navigation__title">
            <Link to="/">YouPlaces</Link>
        </h1>
        <nav>
            <NavLinks/>
        </nav>
    </MainHeader>
  )
}
