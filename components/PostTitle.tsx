import { Post } from "@/tina/__generated__/types"
import React from "react"
import { tinaField } from "tinacms/dist/react"

const PostTitle = (post: Post) => {
  return (
    <a
      data-tina-field={post && tinaField(post, "title")}
      href="#"
      className="text-xl font-semibold text-gray-800 hover:underline "
    >
      {post?.title}
    </a>
  )
}

export default PostTitle
