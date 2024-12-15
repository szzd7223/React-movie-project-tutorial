import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import MovieComponent from './componenets/MovieComponent'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './componenets/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favs" element={<Favorites />}/>
      </Routes>
    </main>
    </MovieProvider>
    
  )
}


export default App
