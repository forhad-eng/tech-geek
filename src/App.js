import { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BlogDetails from './Components/BlogDetails/BlogDetails'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import Videos from './Components/Videos/Videos'

export const BlogContext = createContext()

function App() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <BlogContext.Provider value={[blogs]}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/login" element={<Login />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
            </Routes>
        </BlogContext.Provider>
    )
}

export default App
