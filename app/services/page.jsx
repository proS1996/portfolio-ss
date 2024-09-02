"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "UX/UI Designing",
    description:
      "Crafting intuitive and user-friendly interfaces that enhance user experience and drive engagement across web and mobile platforms.",
    href: "",
  },
  {
    num: "02",
    title: "Graphics Designing",
    description:
      "Creating visually compelling designs that communicate your brand's message effectively, from logos to marketing materials.",
    href: "",
  },
  {
    num: "03",
    title: "Motion Graphics & Video Editing",
    description:
      "Bringing your ideas to life with dynamic motion graphics that captivate audiences and elevate your digital presence.",
    href: "",
  },
  {
    num: "04",
    title: "Logo, Brand & Illustration Designing ",
    description:
      "Developing distinctive logos and cohesive brand identities that resonate with your target audience, ensuring your brand stands out in the marketplace",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group border-b border-white/20"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* heading */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 leading-normal">
                {service.title}
              </h2>
              {/* escription */}
              <p className="text-white/60">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
