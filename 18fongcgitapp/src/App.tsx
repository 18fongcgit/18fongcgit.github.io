import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import P5canvas from "./components/P5canvas";



function App() {

  return (
    <div className="App">
      <div className="p5-background-canvas">
        <P5canvas/>  
      </div>
      <div className="overlay-content">
        <NavBar />
        <div className="Introduction">
            <h1>Hello! I'm Alex Fong</h1>
            <h2>Welcome to my website!</h2>
        </div>
        <Footer />
      </div>
    </div>

  )
}

export default App
