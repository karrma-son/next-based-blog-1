import { BlogCard } from "./BlogCard";
import { Blog } from "../types/blog";

interface BlogGridProps{
    blogs: Blog[]
}

export function BlogGrid({blogs}: BlogGridProps){
    return (
        <div className="blog-grid flex  bg-linear-to-br from-pink-200 to-green-200 w-dvw h-dvh">
            <div className="bg-amber-50/40  gap-2 flex flex-row content-between m-auto h-96 w-auto  ">
            {blogs.map(blog =>(
                <BlogCard key={blog.id} blog={blog}/>
            ))}
            </div>
        </div>
    )
}