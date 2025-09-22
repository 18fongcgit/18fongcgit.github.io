import { Link } from 'react-router-dom';
import { useState } from 'react';
import githubIconWhite from '../assets/github-mark-white.png'
import githubIconBlack from '../assets/github-mark.png'
import { useTheme } from "../context/ThemeContext";
import './NavBar.css'
import Hamburger from './Hamburger';

function NavBar() {
  const { isDarkMode } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='NavBar'>
      <div className='NavBarLeft'>
        
        
        <button
          className="hamburger"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setShowDropdown(!showDropdown);
          }}
        >
          <Hamburger className={`HamburgerIcon${menuOpen ? ' active' : ''}`} />
        </button>
        <Link id="HomePage" to='/'><h2>Alex Fong</h2></Link>
        <ul className={`nav-links ${showDropdown ? 'show' : ''}`}>
          <li><Link className='NavBarItem' to='/about'><span>About</span></Link></li>
          <li><Link className='NavBarItem' to='/projects'><span>Projects</span></Link></li>
          <li><Link className='NavBarItem' to='/skills'><span>Skills</span></Link></li>
        </ul>
      </div>
      <a id="githubIcon" href='https://github.com/alex-k-fong'><img src={isDarkMode ? githubIconBlack : githubIconWhite} width={60} height={60} alt='GitHub Logo' /></a>

    </nav>
  );
}

export default NavBar;
