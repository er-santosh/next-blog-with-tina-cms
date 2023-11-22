import BlogPageComponent from "@/components/app/BlogPageComponent"
import client from "../../../tina/__generated__/client"

const BlogPage = async ({ params }: { params: { filename: string } }) => {
  const res = await client.queries.post({
    relativePath: `${params.filename}.mdx`,
  })

  return (
    <>
      <BlogPageComponent {...res} />
    </>
  )
}

export default BlogPage
