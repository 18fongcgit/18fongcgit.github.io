import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import '../About.css';

function About() {

  return (
    <div>
      <NavBar />
      <div className="AboutPage">
        <h2>About Me</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
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