import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import CartWidget from './CartWidget'

function NavBar () {

    const [click , setClick] = useState(false)

    const handleClick = () => {
      setClick(!click)
    }

    const closeMobileMenu = () => {
      setClick(false)
    }
    
    return (
        <>
          <nav className="navbar">
            <Link to="/" className="navbar-logo">E-SHOP <i className="lni lni-atlassian"></i></Link>
            <div className="menu-icon" onClick={handleClick}>
              <i style={{color: "white"}} className={click ? 'lni lni-close ' : 'lni lni-list'} id="iconMenu"></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                
                <li className='nav-item'>
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                      Home
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                      Productos<i className="lni lni-arrow-right-circle"></i>
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to="/Cart" className="nav-links" onClick={closeMobileMenu}>
                      <CartWidget></CartWidget>
                    </Link>
                </li>
            </ul>
          </nav>
        </>
      );
}



export default NavBar
