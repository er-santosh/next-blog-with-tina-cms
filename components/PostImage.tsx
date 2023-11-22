import { Post } from "@/tina/__generated__/types"
import Image from "next/image"
import React from "react"
import { twMerge } from "tailwind-merge"
import { tinaField } from "tinacms/dist/react"

const PostImage = ({ post, className }: { post: Post; className?: string }) => {
  return (
    <div
      data-tina-field={post && tinaField(post, "image")}
      className={twMerge("relative w-full h-64", className)}
    >
      {" "}
      <Image
        fill
        className="object-cover rounded-lg"
        src={post.image || ""}
        alt="post image"
      />
    </div>
  )
}

export default PostImage
