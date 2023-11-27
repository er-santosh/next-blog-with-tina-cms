import {
  mediaHandlerConfig,
  createMediaHandler,
} from "next-tinacms-cloudinary/dist/handlers"

import { isAuthorized } from "@tinacms/auth"

export const config = mediaHandlerConfig

export default createMediaHandler({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
  authorized: async (req, _res) => {
    try {
      //   if (process.env.NODE_ENV == "development") {
      //     return true
      //   }
      // TODO: return according to the authorization
      //   const user = await isAuthorized(req)

      //   console.log(user)

      //   return !!(user && user.verified)
      return true
    } catch (e) {
      return false
    }
  },
})
