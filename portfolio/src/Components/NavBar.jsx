import './NavBar.css';
import {NavLink} from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <div>
          <h2 className="logo">Logo</h2>
        </div>
        <div className='navLinks'>
          <h2>
            <NavLink to='/'>Home</NavLink>
          </h2>
          <h2>
            <NavLink to='/About'>About</NavLink>
           </h2>
          <h2>
            <NavLink to='/Projects'>Projects</NavLink>
          </h2>
          <h2>
            <NavLink to='/Contact'>Contact</NavLink>
          </h2>
        </div>
      </div>
      
    </nav>
  )
}

export default NavBar
