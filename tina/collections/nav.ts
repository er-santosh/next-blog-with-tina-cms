import { Collection } from "tinacms"

const navCollection: Collection = {
  name: "nav",
  label: "Nav",
  path: "content/nav",
  format: "mdx",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    global: true,
  },
  fields: [
    {
      name: "logo",
      label: "Logo",
      type: "image",
    },
    {
      name: "links",
      label: "Links",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label }
        },
      },
      fields: [
        { type: "string", name: "label", label: "Label" },
        { type: "string", name: "link", label: "Link" },
      ],
    },
  ],
}

export default navCollection
