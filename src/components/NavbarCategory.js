import React from 'react'

const NavbarCategory = ({state}) => {
    
  return (
    <ul id="navbar" className={state ? "" : "navbaractive"}>
                <li><a className='active' href="index.html">Home</a></li>
                <li><a href="index.html">Shop</a></li>
                <li><a href="index.html">Blog</a></li>
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Contavt</a></li>
            </ul>
  )
}

export default NavbarCategory