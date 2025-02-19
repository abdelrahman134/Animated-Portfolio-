"use client"

import CountUp from "react-countup";

const stats = [
  { num: 2, text: "Years of experience" },
  { num: 12, text: "Projects completed" },
  { num: 22, text: "Technologies masters" },
  { num: 1500, text: "Code commits" },
];
export default function Stats() {
  return (
    <section className="pt-4 pd-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw mx-auto xl:max-w-nonw]">
                {
                    stats.map((item,index)=>(
                     <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">

                        <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
                <p className={`${item.text.length<15 ? "max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                     </div>
                    ))
                }
            </div>
        </div>
    </section>
    
  )
}
