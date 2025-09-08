import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import '../About.css';

function About() {

  return (
    <div>
      <NavBar />
      <div className="AboutPage">
        <h2>About Me</h2>
        <p>I'm Alex! I'm a robotics software engineer student passionate about creating robots and thinking outside of the box.
          I'm currently a third-year student at the Colorado School of Mines majoring in Computer Science in the robotics and intelligent systems
          focus area, minoring in Electrical Engineering. I have extensive experience in C++, Python, Java, where I've used these languages in various projects. I've also taught these languages in
          numerous coding camps and classes. <br /><br />

          My interest in the career field kicked off when I was a kid, when I was out with my family and we saw a booth with highschoolers demonstrating
          a robot that could catapult yoga-balls to crowds of people. The robot looked nothing like the movies in Star wars or Transformers, but
          when it could catapult a yoga-ball over my head into a crowd of people, I was amazed. The upcoming year in elementary school, I started noticing
          red posters for a lego robotics competition club. I joined the club, and participated in my first ever competition where we placed second to last. <br /><br />

          A year later, the robotics club relocated into it's own facility where they started hosting their own coding bootcamps. I joined one of the sessions,
          where I learned how to code in a graphical programming language based off of Java called <a href="https://processing.org/">Processing</a>. The bootcamp had us follow
          a series of challenges that started from drawing a point, to making a rectangle, adding colors, and eventually animation.
          My first program drew nothing more than a single point on the screen. I remember staring at the error, realizing I'd already joined the long
          tradition of forgetting a semicolon—the true rite of passage into programming.  <br /><br />

          Debugging that first program wasn't a challenge. After that, I was hooked. When I got home from the camp that day, I spent hours on the computer completing 
          challenge after challenge, until I finished the entire curriculum on the website they provided. I didn't stop there, I kept going, making art with code,
          drawing shapes with colors and rendering whatever I could think of on a screen with code, till the point where I fell asleep at the computer, hands 
          on the keyboard, head on the desk. <br /><br />

          Since then, I've been a consistent team member on the team 1619 Up-A-Creek Robotics.  During my time with the team, I was able to compete in the FIRST
          Tech Challenge, where our team won our division at the World Championship in 2018, and in the FIRST Robotics Competition, where we won the
          World Championship in 2022. Throughout my time on the team, I was able to gain invaluable experience and skill in engineering, design-thinking, leadership,
          and teamwork. <br /><br />




        </p>
        <h3>Related Links</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/alex-k-fong/">LinkedIn</a></li>
          <li><a href="https://github.com/18fongcgit">GitHub</a></li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}
export default About;