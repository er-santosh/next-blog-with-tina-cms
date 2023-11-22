import Image from "next/image"
import React from "react"

const FeaturedPost = () => {
  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl py-5">Featured Post</h1>
      <div className="lg:flex">
        <div className="relative w-3/5 h-[500px]">
          <Image
            fill
            className="object-cover w-full h-56 rounded-lg lg:w-64"
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>

        <div className="flex flex-col relative gap-3 py-6 lg:mx-6 w-2/5">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            How to use sticky note for problem solving
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            iusto placeat error dolor maxime, recusandae quae expedita earum
            eveniet possimus soluta ullam fugit assumenda magni? Quaerat neque
            dolorem repellat quod.
          </p>

          <div className="flex w-full absolute bottom-0 flex-col sm:flex-row gap-2 items-center justify-between">
            <span className="font-semibold">Author:</span>
            <span className="text-sm text-gray-500 dark:text-gray-300">
              On: 20 October 2019
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPost
