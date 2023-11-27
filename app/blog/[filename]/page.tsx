import BlogPageComponent from "@/components/app/BlogPageComponent"
import { client } from "../../../tina/__generated__/databaseClient"

const BlogPage = async ({ params }: { params: { filename: string } }) => {
  const res = await client.queries.post({
    relativePath: `${params.filename}.mdx`,
  })

  return (
    <>
      <BlogPageComponent {...JSON.parse(JSON.stringify(res))} />
    </>
  )
}

export default BlogPage
