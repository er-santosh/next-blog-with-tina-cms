import featuredPostTemplate from "../templates/featured-post"
import newsLetterTemplate from "../templates/newsletter"
import { Collection } from "tinacms"

const pageCollection: Collection = {
  name: "page",
  label: "Pages",
  format: "mdx",
  path: "content/pages",
  ui: {
    router: ({ document }) =>
      document._sys.filename === "home" ? "/" : `/${document._sys.filename}`,
  },
  fields: [
    {
      label: "Page Sections",
      name: "blocks",
      type: "object",
      list: true,
      ui: {
        visualSelector: true,
      },
      templates: [featuredPostTemplate, newsLetterTemplate],
    },
  ],
}

export default pageCollection
