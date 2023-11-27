import { PageBlocksNewsLetter } from "@/tina/__generated__/types"
import React from "react"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

const NewsLetter = (props: PageBlocksNewsLetter) => {
  return (
    <div className="2xl:mx-auto 2xl:container mx-4 py-16">
      <div className="w-full relative flex items-center justify-center">
        <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full mx-6 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
          <h1
            data-tina-field={tinaField(props, "title")}
            className="text-4xl font-semibold leading-9 text-white text-center"
          >
            {props.title}
          </h1>

          <div data-tina-field={tinaField(props, "description")}>
            <TinaMarkdown
              components={{
                p: (props) => (
                  <p
                    className="text-base leading-normal text-center text-white mt-6"
                    {...props}
                  />
                ),
              }}
              content={props.description}
            />
          </div>

          <div className="sm:border border-white flex-col sm:flex-row flex items-center 2xl:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
            <input
              data-tina-field={tinaField(props, "inputPlaceholder")}
              className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
              placeholder={props.inputPlaceholder || ""}
            />
            <button
              data-tina-field={tinaField(props, "buttonText")}
              className="focus:outline-none focus:ring-offset-2 focus:ring border text-gray-800 border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75"
            >
              {props.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
