import client from "@/tina/__generated__/client"
import HomePageComponent from "@/components/app/HomePageComponent"

export default async function Home() {
  const result = await client.queries.page({
    relativePath: "home.mdx",
  })
  return <HomePageComponent {...result} />
}
