
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import Item from "../components/Item";

function Projects() {

  return (
    <div>
      <div className="p5-background-canvas">
      </div>
      <div className="overlay-content">
        <NavBar />
        <div className="Carousel Projects">
          <Item title="Interactive Kinect Rain Simulation" description="One of the first coding projects I worked on, originally as a challenge to mess with a Windows Kinect and make something cool" image="https://via.placeholder.com/150" />
          <Item title="LED Lightboard" description="A customizable LED lightboard created during the Solder Workshop class." image="https://via.placeholder.com/150" />
          <Item title="Piano Tiles Python script" description="Apparently I'm really bad at video games, so I made a bot to cheat at Piano tiles." image="https://via.placeholder.com/150" />
          
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Projects;