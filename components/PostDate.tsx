import { Post } from "@/tina/__generated__/types"
import React from "react"
import { tinaField } from "tinacms/dist/react"

const PostDate = (post: Post) => {
  return (
    <span
      data-tina-field={post && tinaField(post, "createdAt")}
      className="text-sm text-gray-500"
    >
      Created At: {post?.createdAt}
    </span>
  )
}

export default PostDate
