"use client"
import {motion} from "framer-motion"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import {BsArrowUpRight,BsGithub} from "react-icons/bs"
import { useState } from "react";
import Link from "next/link"
import { TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip"
import Image from "next/image"
import WorkSliderBtn from "@/components/WorkSliderBtn"
const projects = [
  {
    num: "01",
    title: "React eCommerce",
    description:
      "A fully functional eCommerce application built with React, Redux, and Firebase. Features include user authentication, product management, and a dynamic shopping cart.",
    category: "Frontend",
    image: "/e1.png",
    github: "https://github.com/abdelrahman134/React-Ecommerce/tree/main",
    live: "",
    stack: [
      { name: "React" },
      { name: "Redux" },
      { name: "Tailwind CSS" },
      { name: "Firebase" },
    ],
  },
  {
    num: "02",
    title: "Next.js Thread Social Media Application",
    description:
      "A modern social media platform inspired by Threads, built using Next.js, TypeScript, and Prisma. Supports real-time posts, likes, and user authentication.",
    category: "Full Stack",
    image: "/thread.png",
    live: "https://thread-social-media-application.vercel.app/",
    github: "",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },

      { name: "MongoDB" },
    ],
  },
  {
    num: "03",
    title: "React YouTube Clone",
    description:
      "A YouTube-inspired video streaming platform built with React and Material UI, featuring video search, categories, and responsive design.",
    category: "Frontend",
    image: "/youtube.png",
    live: "https://youtube-clones1.netlify.app",
    github: "",
    stack: [
      { name: "React" },
      { name: "Material UI" },
      { name: "YouTube API" },
    ],
  },
  {
    num: "04",
    title: "Next.js Dashboard",
    description:
      "An interactive admin dashboard built using Next.js and Tailwind CSS, featuring dynamic charts, user management, and analytics integration.",
    category: "Full stack",
    image: "/dash.png",
    live: "https://next-dashboard-murex-omega.vercel.app/",
    github: "",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Chart.js" },
      { name: "MongoDB" },
    ],
  },
];




export default function Work() {
  const [project,setProject]=useState(projects[0])
  const handleSlideChange=(swiper)=>{
    const currentIndex=swiper.activeIndex;
    setProject(projects[currentIndex])

  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-acccent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-acccent">
                    {item.name}
                    {index != project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-acccent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-acccent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((preject, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relativw w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-acccent hover:bg-acccent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
