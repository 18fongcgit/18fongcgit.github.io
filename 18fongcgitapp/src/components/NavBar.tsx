import { Link } from 'react-router-dom';
import githubIconWhite from '../assets/github-mark-white.png'
import githubIconBlack from '../assets/github-mark.png'
import { useTheme } from "../context/ThemeContext";
import './NavBar.css'

function NavBar() {
  const { isDarkMode } = useTheme();
  return (
    <nav className='NavBar'>
      <div className='NavBarLeft'>
        <Link id="HomePage" to='/'><h2>Alex Fong</h2></Link>
        <ul>
          <li><Link className='NavBarItem' to='/about'><span>About</span></Link></li>
          <li><Link className='NavBarItem' to='/projects'><span>Projects</span></Link></li>
        </ul>
      </div>
      <a id="githubIcon" href='https://github.com/18fongcgit'><img src={isDarkMode ? githubIconBlack : githubIconWhite} width={60} height={60} alt='GitHub Logo' /></a>

    </nav>
  );
}

export default NavBar;
