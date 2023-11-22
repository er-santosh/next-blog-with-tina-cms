import { Post } from "@/tina/__generated__/types"
import React from "react"
import { tinaField } from "tinacms/dist/react"

const PostAuthor = (post: Post) => {
  return (
    <span
      data-tina-field={post.author && tinaField(post.author, "name")}
      className="font-semibold"
    >
      Author: {post.author?.name}
    </span>
  )
}

export default PostAuthor
