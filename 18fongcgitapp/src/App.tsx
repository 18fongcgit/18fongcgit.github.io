import SideBar from './components/SideBar';
import Front from './components/Front';
import './App.css'
import './components/SideBar.css'

function App() {

  return (
      <div className='app'>
      <div className='front'> <Front /></div>

      <div className='sidebar'><SideBar /></div>


      </div>


  )
}

export default App
