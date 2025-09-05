import './App.css'
// import Item from './components/Item'
import githubIconWhite from './assets/github-mark-white.png'
import githubIconBlack from './assets/github-mark.png'

import { useState } from 'react'
import MoonIcon from './components/Moonicon'
import SunIcon from './components/Sunicon'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const currentTheme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);

  };

  return (
    <div className='App'>
      <nav className='NavBar'>
        <div className='NavBarLeft'>
          <a id="HomePage" href='/'><h2>Alex Fong</h2></a>
          <ul>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
          </ul>
        </div>
        <a id="githubIcon" href='https://github.com/18fongcgit'><img src={isDarkMode ? githubIconBlack : githubIconWhite} width={60} height={60} alt='GitHub Logo' /></a>

      </nav>
      <div className="Introduction">
        <div className='IntroText'>
          <h1>Hello! I'm Alex Fong</h1>
          <h2>Welcome to my website!</h2>
        </div>
        <img src={githubIconWhite} alt='Placeholder image' />
      </div>
      <footer className="FooterBar" >
        <div className='FooterText'>
          <p>© 2025 Alex Fong. All rights reserved.</p>
        </div>
        <button id="Theme" onClick={toggleTheme}>
          {isDarkMode ? (
        <>
          <MoonIcon className="sunIcon"  />
          Dark Mode
        </>
      ) : (
        <>
          <SunIcon className="moonIcon" />
          Light Mode
        </>
      )}
        </button>

      </footer>
    </div>

  )
}

export default App
