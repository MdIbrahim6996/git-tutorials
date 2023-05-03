import  './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='app'>
        App
      </div>
      <Footer/>
    </div>
  )
}

export default App
