import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
   <span className="logo">Redux store</span>
<div className='Navbar'>
<Link  className="navLink" to='/'>
    Home
    </Link>
<Link className="navLink" to='/cart'>
    cart
    </Link>

<span className="cartCount">Cart items:0


</span>
</div>

    </div>
  );
};

export default Navbar
