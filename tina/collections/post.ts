import { Collection } from "tinacms"

const postCollection: Collection = {
  name: "post",
  label: "Blog Posts",
  path: "content/blog",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      name: "author",
      type: "reference",
      collections: ["author"],
      label: "Created By",
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
    {
      type: "datetime",
      name: "createdAt",
    },
  ],
  ui: {
    router: ({ document }) => `/blog/${document._sys.filename}`,
  },
}

export default postCollection
