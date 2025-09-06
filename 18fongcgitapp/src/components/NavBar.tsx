import { Link } from 'react-router-dom';
import githubIconWhite from '../assets/github-mark-white.png'
import githubIconBlack from '../assets/github-mark.png'
import { useTheme } from "../context/ThemeContext";

function NavBar() {
  const { isDarkMode } = useTheme();
  return (
    <nav className='NavBar'>
      <div className='NavBarLeft'>
        <Link id="HomePage" to='/'><h2>Alex Fong</h2></Link>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
        </ul>
      </div>
      <a id="githubIcon" href='https://github.com/18fongcgit'><img src={isDarkMode ? githubIconBlack : githubIconWhite} width={60} height={60} alt='GitHub Logo' /></a>

    </nav>
  );
}

export default NavBar;
