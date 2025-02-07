"use client"
import {BsArrowDownRight} from "react-icons/bs"
import {motion} from "framer-motion"
import Link from "next/link";
const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "Building responsive and scalable web applications using modern technologies for seamless user experiences.",
    href: "",
  },
  {
    num: "02",
    title: "Frontend Development",
    description:
      "Creating dynamic and interactive user interfaces with a focus on performance and usability.",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Developing robust backend architectures, APIs, and databases to support business needs efficiently.",
    href: "",
  },
  {
    num: "04",
    title: "Data Analysis",
    description:
      "Transforming raw data into meaningful insights using statistical methods and visualization techniques.",
    href: "",
  },
  {
    num: "05",
    title: "Power BI & Data Visualization",
    description:
      "Designing interactive dashboards and reports to help businesses make data-driven decisions.",
    href: "",
  },
  {
    num: "06",
    title: "Machine Learning",
    description:
      "Developing predictive models and AI-powered solutions for automation and decision-making.",
    href: "",
  },
  {
    num: "07",
    title: "Deep Learning",
    description:
      "Creating and training deep neural networks for applications like image processing and NLP.",
    href: "",
  },
  {
    num: "08",
    title: "AI & Automation",
    description:
      "Leveraging artificial intelligence to optimize workflows and enhance business efficiency.",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[60px] items-stretch"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-6 group h-full p-6  rounded-lg"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-acccent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-acccent transition-all duration-500">
                {service.title}
              </h2>
              <p className="flex-grow">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
