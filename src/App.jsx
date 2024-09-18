import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GameProvider } from './context/GameContext.jsx'

/* Pages */
import Home from './pages/home'
import Discover from './pages/discover'
import Favorites from './pages/favorites'
import Login from './pages/login'


/* Components */
import Navbar from './components/navbar'
import Footer from './components/footer'
import './App.css'


function App() {
  return (
    <GameProvider>
      <Router>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/login" element={<Login />} />
            {/*<Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer/>
      </Router>
    </GameProvider>
  )
}

export default App
