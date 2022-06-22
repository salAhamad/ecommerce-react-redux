import React from 'react'
import { Link } from 'react-router-dom'
import HeaderNavigation from './HeaderNavigation'

import reactLogo from './../logo.svg';
import UserProfileNav from './UserProfileNav';

function Header() {
  return (
    <header className="d-flex flex-wrap px-3 mb-4 border-bottom bg-white">
        <div className="container d-flex justify-content-between align-items-center">
            <div className="topLogo">
                <Link to="">
                    <img src={reactLogo} alt="" width="100" />
                    <span>ReactEcommerce</span>
                </Link>
            </div>
            <HeaderNavigation />
            <UserProfileNav />
        </div>
    </header>
  )
}

export default Header