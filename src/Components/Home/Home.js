import React, { useContext } from 'react'
import { BlogContext } from '../../App'
import Blog from '../Blog/Blog'

const Home = () => {
    const [blogs] = useContext(BlogContext)

    return (
        <div className="w-[85%] mx-auto grid grid-cols-1 gap-12 mt-20">
            {blogs.map(blog => (
                <Blog key={blog._id} singleBlog={blog} />
            ))}
        </div>
    )
}

export default Home
