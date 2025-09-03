import './App.css'
import Item from './components/Item'
import githubIconWhite from './assets/github-mark-white.png'

function App() {

  return (
    <div className='App'>
      <div className='NavBar'>
        
        <a id="githubIcon" href='https://github.com/18fongcgit'><img src={githubIconWhite} width={60} height={60} alt='GitHub Logo' /></a>
        <nav>
          <ul>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
          </ul>
        </nav>
      </div>
      <div className="Introduction">
        <h1>Hello! I'm Alex Fong</h1>
        <h2>Welcome to my website!</h2>
        <div className="About Me">
          <h3>About Me</h3>
          <p>
            I am a junior at the Colorado School of Mines, pursuing Computer Science with a
            focus on Robotics and Intelligent Systems and a minor in Electrical Engineering. I am passionate
            about robots, software, and electronics, and I am particularly fascinated by the applications of
            Computer Vision and other sensors.

            I am also an IB Diploma Recipient. As part of the IB Diploma program,
            I developed a Solder Workshop class that allowed younger students with no experience in
            Electronics to solder and create a LED lightboard with a customizable flash pattern.
          </p>
          <img src='https://via.placeholder.com/150' alt='LED lightboard example' />


        </div>
        <div className="Projects">
          <h3>Projects</h3>
          <ul>
            <a href=''><Item></Item></a>
            <a href=''><Item></Item></a>
            <a href=''><Item></Item></a>
            <a href=''><Item></Item></a>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default App
