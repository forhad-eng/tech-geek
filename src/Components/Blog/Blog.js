import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = ({ singleBlog }) => {
    const { title, blog, admin, imageURL, _id } = singleBlog
    const navigate = useNavigate()

    return (
        <div className="w-[90%] mx-auto grid grid-cols-2 gap-8">
            <div className="shadow-lg rounded p-3 mx-auto">
                <img src={imageURL} width="380" alt="" />
            </div>
            <div className="text-[#1B4388] font-[Raleway]">
                <p className="font-semibold text-xl">{title}</p>
                <p className="flex items-center mb-2">
                    <img src="./Union.png" alt="" /> <small className="mt-3 ml-2">Author: {admin}</small>
                </p>
                <p className="inline">{blog.slice(0, 400) + '...'}</p>
                <button onClick={() => navigate(`/blog/${_id}`)} className="font-semibold outline-none">
                    Read more
                </button>
            </div>
        </div>
    )
}

export default Blog
