"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { FaFilePowerpoint } from "react-icons/fa";

import {
  SiAdobexd,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiFramer,
} from "react-icons/si";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, doloremque.",
  info: [
    { fieldName: "Name", fieldValue: "Vijay Chandoliya" },
    { fieldName: "Phone", fieldValue: "+91 98874 03108" },
    { fieldName: "Experience", fieldValue: "4+ Years" },
    { fieldName: "Skype", fieldValue: "Vijay.01" },
    { fieldName: "Email", fieldValue: "chandoliya.vijay@001gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English Spanish" },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, facilis.",
  items: [
    {
      company: "Habilelabs Pvt. Ltd., Jaipur",
      position: "Senior UX Designer & Design Leader",
      duration: "2023 -Present",
    },
    {
      company: "Paydeer Services Pvt. Ltd., Jaipur",
      position: "UX UI Manager & Sr. Graphic Designer",
      duration: "2020 – 2023",
    },
    {
      company: "Testbook.com & Chegg India",
      position: "Graphic Design & SME",
      duration: "2017 – 2020",
    },
    {
      company: "Shree Cement Ltd., Pali (Raj.)",
      position: "Graduate Engineer Trainee (GET)",
      duration: "2016",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, facilis.",
  items: [
    {
      institute: "Mewar University Raj.",
      degree: "B.Tech (Civil Engg)",
      duration: "2012- 2016",
    },
    {
      institute: "Conducted By IIT Delhi",
      degree: "GATE Qualified",
      duration: "2020",
    },
    {
      institute: "Architecture Cad Centre",
      degree: "Certified in 3D MAX",
      duration: "2023",
    },
  ],
};
//skills
const skills = {
  title: "My Skills",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, doloremque.",
  skillList: [
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiAdobexd />, name: "Adobe XD" },
    { icon: <SiAdobepremierepro />, name: "Premiere Pro" },
    { icon: <SiAdobeaftereffects />, name: "After Effects" },
    { icon: <SiAdobeillustrator />, name: "Adobe Illustrator" },
    { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
    { icon: <SiFramer />, name: "Framer" },
    { icon: <FaFilePowerpoint />, name: "Power point" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 leading-normal">
                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institute}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto  xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
