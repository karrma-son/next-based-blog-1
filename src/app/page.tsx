'use client'

import { useEffect, useState } from "react";
import { BlogGrid } from "../components/CardGrid";  
import { Blog } from "../types/blog";
import { mockBlogs } from "../api/mockData";
export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setBlogs(mockBlogs)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) return <p>Loading...</p>

  return <BlogGrid blogs={blogs}/>;
}
