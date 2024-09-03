import React from "react";
import {
  SiFramer,
  SiTypescript,
  SiMongodb,
  SiAdobephotoshop,
} from "react-icons/si";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { FaBootstrap, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiFirebase } from "react-icons/di";
import { Typewriter } from "react-simple-typewriter";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} />, proficiency: "96%" },
  { name: "CSS", icon: <IoLogoCss3 size={40} />, proficiency: "84%" },
  { name: "Bootstrap", icon: <FaBootstrap size={40} />, proficiency: "97%" },
  { name: "Tailwind-CSS", icon: <RiTailwindCssFill size={40} />, proficiency: "97%" },
  { name: "JavaScript", icon: <IoLogoJavascript size={40} />, proficiency: "90%" },
  { name: "TypeScript", icon: <SiTypescript size={40} />, proficiency: "90%" },
  { name: "React js", icon: <FaReact size={40} />, proficiency: "70%" },
  { name: "Node js", icon: <FaNodeJs size={40} />, proficiency: "82%" },
  { name: "Express js", icon: <SiFramer size={40} />, proficiency: "92%" },
  { name: "MongoDB", icon: <SiMongodb size={40} />, proficiency: "62%" },
  { name: "Firebase", icon: <DiFirebase size={40} />, proficiency: "72%" },
  { name: "Photoshop", icon: <SiAdobephotoshop size={40} />, proficiency: "50%" },
];

const Skills = () => {
  return (
    <Container id="skill" className="text-white p-8 rounded-lg">
      <SectionTitle title="Skill" titleNo={4} />

      <div >
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 py-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-textBg px-4 py-3 rounded-lg shadow-lg"
            >
              <div className="mb-4">{skill.icon}</div>
              <span className="text-lg font-medium text-designColor">
                <Typewriter
                  words={[skill.proficiency]}
                  loop={1} 
                  typeSpeed={300} // speed of typing
                  deleteSpeed={50} // speed of deleting
                />
              </span>
              <span className="text-md tracking-wide font-semibold mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
