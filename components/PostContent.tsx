import { Post } from "@/tina/__generated__/types"
import React from "react"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

const PostContent = (post: Post) => {
  return (
    <div data-tina-field={post && tinaField(post, "body")}>
      <TinaMarkdown
        content={post?.body}
        components={{
          p: (innerProps) => <p {...innerProps} />,
        }}
      />
    </div>
  )
}

export default PostContent
