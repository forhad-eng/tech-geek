import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BlogContext } from '../../App'

const BlogDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [blogs] = useContext(BlogContext)

    const sblog = blogs.find(item => item._id === id)
    const { title, blog, admin, imageURL } = sblog

    return (
        <div>
            <div className="h-[200px] bg-gradient-to-r from-[#1B4388]  to-[#1E90C2]">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-2 left-2 p-1 border-[1px] border-white text-white outline-none"
                >
                    &lt; Back
                </button>
            </div>
            <div className="absolute top-14 left-[35%] shadow-lg rounded p-3 mx-auto">
                <img src={imageURL} width="380" alt="" />
            </div>
            <div className="w-[70%] mx-auto mt-52 mb-28">
                <div className="text-[#1B4388] font-[Raleway] text-center">
                    <p className="font-semibold text-xl">{title}</p>
                    <p className="my-1">Author: {admin}</p>
                    <p>{blog}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
