import HomePageComponent from "@/components/app/HomePageComponent"
import { client } from "@/tina/__generated__/databaseClient"

export default async function Home() {
  const result = await client.queries.page({
    relativePath: "home.mdx",
  })
  return <HomePageComponent {...JSON.parse(JSON.stringify(result))} />
}
