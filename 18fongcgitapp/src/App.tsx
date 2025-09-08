import './App.css'
// import Item from './components/Item'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import CoolPicture from './assets/cool background .jpg'

function App() {

  return (

    <div className='App'>
      <NavBar />
      <div className="Introduction">
        <div className='IntroText'>
          <h1>Hello! I'm Alex Fong</h1>
          <h2>Welcome to my website!</h2>
        </div>
        <img src={CoolPicture} alt='Senior Photo' />
      </div>
      <Footer />
    </div>

  )
}

export default App
