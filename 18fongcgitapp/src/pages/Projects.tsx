import './Projects.css';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import Item from "../components/Item";
import AsteroidsScreenshot from '../assets/AsteroidsScreenshot.png';
function Projects() {
  
  return (
    <div>
      <div className="p5-background-canvas">
      </div>
      <div className="overlay-content">
        <NavBar />
        <div className="Projects">
          <h2>Projects</h2>
          <h3>Check out all the cool stuff I've made!</h3>
          <ul>
            <li>
              <Item id="Interactive Kinect Rain Simulation" description="One of the first coding projects I worked on, originally as a challenge to mess with a Windows Kinect and make something cool" image="https://via.placeholder.com/150" />
            </li>
            <li>
              <Item id="LED Lightboard" description="A customizable LED lightboard created during the Solder Workshop class." image="https://via.placeholder.com/150" />
            </li>
            <li>
              <Item id="Piano Tiles Python script" description="Apparently I'm really bad at video games, so I made a bot to cheat at Piano tiles." image="https://via.placeholder.com/150" />
            </li>
            <li>
              <Item id="Portfolio Website" description="This website! Built with React, TypeScript, and p5.js" image="https://via.placeholder.com/150" />
            </li>
            <li>
              <Item id="Asteroids Game" description="A simple Asteroids game built with C++ and SFML" image={AsteroidsScreenshot} />
            </li>
            <li>
              <Item id="Pure Pursuit Visualizer" description="A visualization tool for the Pure Pursuit algorithm, built for FTC" image="https://via.placeholder.com/150" />
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Projects;