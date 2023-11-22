"use client"
import BlogPosts from "@/components/BlogPosts"
import { PostConnectionQuery } from "@/tina/__generated__/types"
import React from "react"
import { useTina } from "tinacms/dist/react"

const BlogIndexPageComponent = (props: {
  data: PostConnectionQuery
  variables: {}
  query: string
}) => {
  const { data } = useTina(props)

  return (
    <>
      <BlogPosts {...data} />
    </>
  )
}

export default BlogIndexPageComponent
