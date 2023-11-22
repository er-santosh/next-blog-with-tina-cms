import PostAuthor from "@/components/PostAuthor"
import PostContent from "@/components/PostContent"
import PostDate from "@/components/PostDate"
import PostImage from "@/components/PostImage"
import PostTitle from "@/components/PostTitle"
import { Post, PostConnectionQuery } from "@/tina/__generated__/types"
import React from "react"

const BlogPosts = (props: PostConnectionQuery) => {
  const posts = props.postConnection.edges

  return (
    <section className="w-full">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
          Blog posts
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {posts?.map((edge, index) => {
            const post = edge?.node as Post
            if (!post) {
              return null
            }

            return (
              <div className="xl:flex" key={index}>
                <PostImage post={post} />

                <div className="flex flex-col relative gap-3 py-6 lg:mx-6">
                  <PostTitle {...post} />
                  <PostContent {...post} />

                  <div className="flex w-full absolute bottom-0 flex-col sm:flex-row gap-2 items-center justify-between">
                    <PostAuthor {...post} />
                    <PostDate {...post} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BlogPosts
