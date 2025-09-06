import MoonIcon from '../components/Moonicon'
import SunIcon from '../components/Sunicon'
import NavBar from "../components/NavBar";
import { useTheme } from "../context/ThemeContext";

function About() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      <NavBar />
      <footer className="FooterBar" >
        <div className='FooterText'>
          <p>© 2025 Alex Fong. All rights reserved.</p>
        </div>
        <button id="Theme" onClick={toggleTheme}>
          {isDarkMode ? (
            <>
              <MoonIcon className="sunIcon" />
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
  );
}
export default About;