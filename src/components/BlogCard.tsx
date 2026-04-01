import {Blog} from "../types/blog"
import Image from "next/image"

interface BlogCardProps {
    blog: Blog
}

export function BlogCard ({blog}: BlogCardProps){
    return(
       
        <div className="flex flex-col items-center m-4">
            <div className=" blog-card bg-linear-to-tr from-indigo-300 opacity-80 to-slate-500
            border-gray-500 border-2 w-80 h-48  content-center rounded-md gap-1 m-auto mt-4
            text-amber-50 shadow-black shadow-2xl text-center hover:scale-101">

                <div className="relative border-2 rounded-xl h-36 w-64 m-auto">
                    <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        fill
                        className="art-image rounded-xl" />
                </div>


            </div>
            <div className=" bg-blue-600 h-36 w-56 mt-4 text-center align-middle opacity-55">
                    <h3 className="blog-title font-mono text-cyan-50 text-xl">{blog.title}</h3>
                    <p className="blog-author font-bold text-l mt-8 text-fuchsia-50">{blog.author}</p>
                    <p className="blog-stubtitle">{blog.subtitle}</p>
            </div>
        </div> 
    )
}