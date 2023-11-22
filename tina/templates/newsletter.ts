import { Template } from "tinacms"

const newsLetterTemplate: Template = {
  name: "newsLetter",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "rich-text",
    },
    {
      name: "inputPlaceholder",
      type: "string",
    },
    {
      name: "buttonText",
      type: "string",
    },
  ],
  ui: {
    defaultItem: {
      inputPlaceholder: "Email Address",
      buttonText: "Subscribe",
    },
  },
}

export default newsLetterTemplate
