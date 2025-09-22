import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import './About.css';
import { opSketchAbout } from "../p5/opSketchAbout";
import P5canvas from "../components/P5canvas";

function About() {

  return (
    <div>
      <div className="p5-background-canvas">
        <P5canvas sketch={opSketchAbout} />
      </div>
      <div className="overlay-content">
        <NavBar />
        <div className="AboutPage">
          <h2>About Me</h2>
          <p>I'm Alex! I'm a robotics software engineer student passionate about creating robots and thinking outside of the box.
            I'm currently a third-year student at the Colorado School of Mines majoring in Computer Science in the robotics and intelligent systems
            focus area, minoring in Electrical Engineering. I have extensive experience in C++, Python, Java, where I've used these languages in various projects. I've also taught these languages in
            numerous coding camps and classes. <br /><br />

          </p>
          <h3>Related Links</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/alex-k-fong/">LinkedIn</a></li>
            <li><a href="https://github.com/alex-k-fong">GitHub</a></li>
          </ul>
        </div>
        <Footer />
      </div>

    </div>
  );
}
export default About;