"use client";
import Link from "next/link";
import Image from "next/image"

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image src='/next.svg' width={120} height={120} className="object-contain" />
        </Link>
    </nav>
  )
}

export default Nav