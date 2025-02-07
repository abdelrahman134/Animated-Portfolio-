"use client"
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
export default function MobilNav() {
    const pathname=usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-acccent" />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-32 mb-40 text-center text-2xl">
        <Link href="/">
        <h1 className="text-4xl font-semibold">
            Abdelrahman <span className="text-acccent">.</span>
        </h1>
        </Link>    
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
           {
            links.map((link,index) =>(
                <Link className={`${link.path===pathname&& "text-acccent border-b-2 border-acccent"} text-xl capitalize hover:text-acccent transition-all`} href={`${link.path}`} key={index}>
                    {link.name}
                </Link>

            ) )
           } 

        </nav>

      </SheetContent>
    </Sheet>
  );
}
