import BlogPosts from "@/components/BlogPosts"
import FeaturedPost from "@/components/FeaturedPost"
import NewsLetter from "@/components/NewsLetter"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FeaturedPost />
      <BlogPosts />
      <NewsLetter />
    </main>
  )
}
