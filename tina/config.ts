import {
  UsernamePasswordAuthJSProvider,
  TinaUserCollection,
} from "tinacms-authjs/dist/tinacms"
import { defineConfig, LocalAuthProvider } from "tinacms"
import navCollection from "./collections/nav"
import pageCollection from "./collections/page"
import postCollection from "./collections/post"
import authorCollection from "./collections/author"

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true"
export default defineConfig({
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),
  contentApiUrlOverride: "/api/tina/gql",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      TinaUserCollection,
      navCollection,
      pageCollection,
      postCollection,
      authorCollection,
    ],
  },
})
