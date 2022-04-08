import React from 'react'

const Blog = ({ singleBlog }) => {
    const { title, blog, admin, imageURL } = singleBlog
    return (
        <div className="w-[90%] mx-auto grid grid-cols-2 gap-8">
            <div className="shadow-lg rounded p-3 mx-auto">
                <img src={imageURL} width="380" alt="" />
            </div>
            <div className="text-[#1B4388]">
                <p className="font-bold text-xl">{title}</p>
                <p className="flex items-center mb-2">
                    <img src="./Union.png" alt="" /> <small className="mt-3 ml-2">Author: {admin}</small>
                </p>
                <p className="inline">{blog.slice(0, 400) + '...'}</p>
                <button className="font-semibold">Read more</button>
            </div>
        </div>
    )
}

export default Blog
