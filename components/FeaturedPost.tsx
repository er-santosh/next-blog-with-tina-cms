import PostAuthor from "@/components/PostAuthor"
import PostContent from "@/components/PostContent"
import PostDate from "@/components/PostDate"
import PostImage from "@/components/PostImage"
import PostTitle from "@/components/PostTitle"
import { PageBlocksFeatured, Post } from "@/tina/__generated__/types"
import React from "react"
import { tinaField } from "tinacms/dist/react"

const FeaturedPost = (props: PageBlocksFeatured) => {
  const label = props.label
  const post = props.featuredPost as Post

  return (
    <div className="p-10 w-full">
      <h1
        data-tina-field={tinaField(props, "label")}
        className="font-bold text-3xl py-5"
      >
        {label}
      </h1>
      <div>
        <PostImage post={post} className="h-[500px]" />

        <div className="flex flex-col relative gap-3 py-6 lg:mx-6 w-full">
          <PostTitle {...post} />
          <PostContent {...post} />

          <div className="flex w-full absolute bottom-0 flex-col sm:flex-row gap-2 items-center justify-between">
            <PostAuthor {...post} />
            <PostDate {...post} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPost
