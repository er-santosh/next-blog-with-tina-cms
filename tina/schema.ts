import authorCollection from "./collections/author"
import navCollection from "./collections/nav"
import pageCollection from "./collections/page"
import postCollection from "./collections/post"
import { Schema } from "tinacms"

const schema: Schema = {
  collections: [
    navCollection,
    pageCollection,
    postCollection,
    authorCollection,
  ],
}

export default schema
