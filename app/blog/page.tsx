import BlogIndexPageComponent from "@/components/app/BlogIndexPageComponent"
import client from "@/tina/__generated__/client"
import React from "react"

const BlogIndexPage = async () => {
  const result = await client.queries.postConnection()
  return <BlogIndexPageComponent {...result} />
}

export default BlogIndexPage
