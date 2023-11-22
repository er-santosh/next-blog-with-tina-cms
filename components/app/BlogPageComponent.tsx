"use client"

import React from "react"
import { useTina } from "tinacms/dist/react"
import { Post, PostQuery } from "@/tina/__generated__/types"
import PostImage from "@/components/PostImage"
import PostContent from "@/components/PostContent"
import PostAuthor from "@/components/PostAuthor"
import PostDate from "@/components/PostDate"
import PostTitle from "@/components/PostTitle"

const BlogPageComponent = (props: {
  data: PostQuery
  variables: {
    relativePath: string
  }
  query: string
}) => {
  const { data } = useTina(props)

  const post = data.post as Post

  return (
    <div>
      <PostTitle {...post} />
      <PostImage post={post} />
      <PostContent {...post} />
      <div className="flex w-full mt-5 flex-col sm:flex-row gap-2 items-center justify-between">
        <PostAuthor {...post} />
        <PostDate {...post} />
      </div>
    </div>
  )
}

export default BlogPageComponent
