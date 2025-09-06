import './App.css'
// import Item from './components/Item'
import githubIconWhite from './assets/github-mark-white.png'
import Footer from './components/Footer'
import NavBar from './components/NavBar'


function App() {

  return (
    
    <div className='App'>
      <NavBar />
      <div className="Introduction">
        <div className='IntroText'>
          <h1>Hello! I'm Alex Fong</h1>
          <h2>Welcome to my website!</h2>
        </div>
        <img src={githubIconWhite} alt='Placeholder image' />
      </div>
      <Footer />
    </div>

  )
}

export default App
