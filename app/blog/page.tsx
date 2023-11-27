import BlogIndexPageComponent from "@/components/app/BlogIndexPageComponent"
import { client } from "@/tina/__generated__/databaseClient"
import React from "react"

const BlogIndexPage = async () => {
  const result = await client.queries.postConnection()
  return <BlogIndexPageComponent {...JSON.parse(JSON.stringify(result))} />
}

export default BlogIndexPage
