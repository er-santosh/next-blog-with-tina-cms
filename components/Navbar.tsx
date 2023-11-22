import Image from "next/image"
import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <div className="h-20 flex items-center text-black bg-white">
      <div className="mx-40 flex flex-1 items-center justify-between">
        <Image width={100} height={80} src={"/next.svg"} alt="logo" />
        <div className="flex items-center gap-3">
          <Link href={""}>Home</Link>
          <Link href={""}>Blog</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
