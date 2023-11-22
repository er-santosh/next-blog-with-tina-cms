import Image from "next/image"
import React from "react"

const BlogPosts = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          Blog posts
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {[...new Array(10)].map((item, index) => (
            <div className="lg:flex" key={index}>
              <Image
                width={150}
                height={200}
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="flex flex-col relative gap-3 py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  How to use sticky note for problem solving
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, iusto placeat error dolor maxime, recusandae quae
                  expedita earum eveniet possimus soluta ullam fugit assumenda
                  magni? Quaerat neque dolorem repellat quod.
                </p>

                <div className="flex w-full absolute bottom-0 flex-col sm:flex-row gap-2 items-center justify-between">
                  <span className="font-semibold">Author:</span>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    On: 20 October 2019
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPosts
