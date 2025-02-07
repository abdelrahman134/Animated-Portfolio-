import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {FiDownload} from "react-icons/fi"
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-acccent">Abdelrahman Mahmoud</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Hi, I'm Abdelrahman Mohab, a Web Developer and Machine Learning
              Engineer with a passion for creating innovative and efficient
              solutions. I enjoy solving complex problems, building seamless
              user experiences, and exploring the intersection of software
              development and AI. Always eager to learn and grow, I strive to
              bring creativity and technical excellence to every project I work
              on.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href={`https://drive.google.com/file/d/1QAFqiRC5ZGvCqgX-jcgEW4EIC0bjCzlQ/view?usp=sharing`} target="_blank"
              >
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-acccent rounded-full flex justify-center items-center text-acccent text-base hover:bg-acccent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo/>
        </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
}
