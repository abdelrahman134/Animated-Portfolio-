"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

const links=[
    {
        name:"home",
        path:"/"
    },
    {
        name:"services",
        path:"/services"
    },
    {
        name:"resume",
        path:"/resume"
    },
    {
        name:"work",
        path:"/work"
    },
    {
        name:"contact",
        path:"/contact"
    }
]
export default function Nav() {
    const pathname=usePathname()
  return (
    <nav className="flex gap-8">
      {links.map((link,index) => (
        <Link key={index} className={`${link.path ===pathname && "text-acccent border-b-2 border-acccent"} capitalize font-medium hover:text-acccent transition-all`} href={`${link.path}`}>{link.name}</Link>
      ))}
    </nav>
  );
}
