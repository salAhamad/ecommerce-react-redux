import React from 'react'
import { Link } from 'react-router-dom'

function HeaderNavigation() {
  return (
    <nav>
        <ul className="top-menu nav nav-pills">
            <li className="nav-item"><Link className="nav-link active" to="#">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Blog</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default HeaderNavigation