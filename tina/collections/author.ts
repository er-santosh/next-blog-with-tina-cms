import { Collection } from "tinacms"

const authorCollection: Collection = {
  name: "author",
  label: "Author",
  path: "content/authors",
  format: "mdx",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "image",
      type: "image",
    },
  ],
}

export default authorCollection
