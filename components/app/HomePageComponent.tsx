"use client"

import FeaturedPost from "@/components/FeaturedPost"
import NewsLetter from "@/components/NewsLetter"
import { PageQuery } from "@/tina/__generated__/types"
import React from "react"
import { useTina } from "tinacms/dist/react"

const HomePageComponent = (props: {
  data: PageQuery
  variables: {
    relativePath: string
  }
  query: string
}) => {
  const { data } = useTina(props)

  return (
    <>
      {data.page.blocks?.map((block, index) => {
        switch (block?.__typename) {
          case "PageBlocksFeatured":
            return <FeaturedPost {...(block as any)} key={index} />
          case "PageBlocksNewsLetter":
            return <NewsLetter {...(block as any)} key={index} />
        }
      })}
    </>
  )
}

export default HomePageComponent
