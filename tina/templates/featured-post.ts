import { Template } from "tinacms"

const featuredPostTemplate: Template = {
  name: "featured",
  label: "Featured",
  fields: [
    {
      name: "label",
      label: "Label",
      type: "string",
    },
    {
      name: "featuredPost",
      label: "Featured Post",
      type: "reference",
      collections: ["post"],
    },
  ],
}

export default featuredPostTemplate
