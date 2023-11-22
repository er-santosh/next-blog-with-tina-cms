"use client"

import { NavQuery } from "@/tina/__generated__/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { tinaField, useTina } from "tinacms/dist/react"

const Navbar = (props: {
  data: NavQuery
  variables: {
    relativePath: string
  }
  query: string
}) => {
  const { data } = useTina(props)

  const navLinks = data.nav.links
  const logo = data.nav.logo
  return (
    <div className="h-20 flex items-center">
      <div className="mx-40 flex flex-1 items-center justify-between">
        <Image
          width={100}
          height={80}
          src={logo || ""}
          alt="logo"
          data-tina-field={tinaField(data.nav, "logo")}
        />
        <div className="flex items-center gap-3">
          {navLinks?.map((navLink, index) => {
            return (
              <Link
                data-tina-field={navLink && tinaField(navLink, "label")}
                key={index}
                href={navLink?.link || ""}
              >
                {navLink?.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar
