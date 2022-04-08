import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import Videos from './Components/Videos/Videos'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
