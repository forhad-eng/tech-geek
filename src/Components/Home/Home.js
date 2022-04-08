import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'

const Home = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-[85%] mx-auto grid grid-cols-1 gap-12 mt-20">
            {blogs.map(blog => (
                <Blog key={blog._id} singleBlog={blog} />
            ))}
        </div>
    )
}

export default Home
