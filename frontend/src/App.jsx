import './App.css'
import Footer from './components/sections/Footer'
import Midpart from './components/sections/Midpart'
import { Topbar } from './components/sections/Topbar'

function App() {

  return <div className=' w-full h-full bg-gray-50'>
    <Topbar/>
    <Midpart/>
    <Footer/>
  </div>
}

export default App
