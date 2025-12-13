import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
// import amazon from "../assets/Images/amazonImg.png"
import ProjectsLinks from "./ProjectsLinks";
import { amazoneImg, project2, project3, project4,hris } from "../assets";
export default function Project() {
  return (
    <Container id="project" className="py-24">
      <SectionTitle title="Some things i have build " titleNo="03" />
      <div className="mt-14 flex flex-col justify-center items-center gap-28">
        {/* project zero index */}
        <div className="flex flex-col lg:flex-row-reverse gap-8 ">
          {/* image */}
          <a
            href="http:localhost:8080/"
            target="blank"
            className="w-full lg:w-1/2 overflow-hidden relative group rounded-lg h-auto"
          >
            <img
              src={hris}
              alt="amazon image "
              className="w-full h-full object-cover group-hover:scale-110 duration-200"
            />
            <div className="w-full h-full bg-designColor/10 absolute group-hover:bg-transparent top-0 left-0 rounded-lg duration-300" />
          </a>

          {/* description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between text-end items-end ">
            <div className="text-end ">
              <p className="text-designColor tracking-wide text-lg">
                Fetured Project
              </p>
              <h3 className="font-bold text-2xl">Human Resource Management</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md lg:-ml-16 z-10">
              Contributed to building an enterprise web application for Fortis Group, covering
              employee lifecycle, payroll, requisitions, taxation, bonuses, performance tracking, and multi
              company management—streamlining HR and administrative processes into a single unified
              platform.
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 text-darkText juntify-between">
              <li>React</li>
              <li>Javascript</li>
              <li>TypeScript</li>
              <li>Redux</li>
              <li>My SQL</li>
            </ul>
            <ProjectsLinks link="https://github.com/Sarowar786/"
              githubLink=" https://github.com/Sarowar786/" />
          </div>
        </div>
        {/* project one */}
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* image */}
          <a
            href="http:localhost:8080/"
            target="blank"
            className="w-full lg:w-1/2 overflow-hidden relative group rounded-lg h-auto"
          >
            <img
              src={amazoneImg}
              alt="amazon image "
              className="w-full h-full object-cover group-hover:scale-110 duration-200"
            />
            <div className="w-full h-full bg-designColor/10 absolute group-hover:bg-transparent top-0 left-0 rounded-lg duration-300" />
          </a>

          {/* description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between text-end items-end ">
            <div className="text-end ">
              <p className="text-designColor tracking-wide text-lg">
                Fetured Project
              </p>
              <h3 className="font-bold text-2xl">Amazon Clone 2.0</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md lg:-ml-16 z-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis necessitatibus quaerat, a impedit dolor temporibus
              eum laboriosam, asperiores assumenda alias vero laudantium rerum
              reiciendis maiores!
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 text-darkText juntify-between">
              <li>React</li>
              <li>Javascript</li>
              <li>Node js</li>
              <li>Express js</li>
              <li>Mongo DB</li>
            </ul>
            <ProjectsLinks link="https://github.com/Sarowar786/"
              githubLink=" https://github.com/Sarowar786/" />
          </div>
        </div>
        {/* project two */}
        <div className="flex flex-col lg:flex-row-reverse gap-8 ">
          {/* image */}
          <a
            href="https://resturent-project-0ee750.netlify.app/"
            target="blank"
            className="w-full lg:w-1/2 overflow-hidden relative group rounded-lg h-auto"
          >
            <img
              src={project2}
              alt="amazon image "
              className="w-full h-full object-cover group-hover:scale-110 duration-200"
            />
            <div className="w-full h-full bg-designColor/10 absolute group-hover:bg-transparent top-0 left-0 rounded-lg duration-300" />
          </a>

          {/* description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between text-end items-end">
            <div className="text-end ">
              <p className="text-designColor tracking-wide text-lg">
                Fetured Project
              </p>
              <h3 className="font-bold text-2xl">E-commerce Shofy clone</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md lg:-mr-16 z-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis necessitatibus quaerat, a impedit dolor temporibus
              eum laboriosam, asperiores assumenda alias vero laudantium rerum
              reiciendis maiores!
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 text-darkText juntify-between">
              <li>React</li>
              <li>Javascript</li>
              <li>Node js</li>
              <li>Express js</li>
              <li>Mongo DB</li>
              <li>Next js</li>
            </ul>
            <ProjectsLinks
              link=" https://sarowar786.github.io/Restaurant-sites/"
              githubLink=" https://github.com/Sarowar786/Restaurant-sites"
            />
          </div>
        </div>
        {/* project three */}
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* image */}
          <a
            href="https://sarowar786.github.io/Practise-Beatles/"
            target="blank"
            className="w-full lg:w-1/2 overflow-hidden relative group rounded-lg h-auto"
          >
            <img
              src={project3}
              alt="amazon image "
              className="w-full h-full object-cover group-hover:scale-110 duration-200"
            />
            <div className="w-full h-full bg-designColor/10 absolute group-hover:bg-transparent top-0 left-0 rounded-lg duration-300" />
          </a>

          {/* description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between text-end items-end ">
            <div className="text-end ">
              <p className="text-designColor tracking-wide text-lg">
                Fetured Project
              </p>
              <h3 className="font-bold text-2xl">Beatles Clone 2.0</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md lg:-ml-16 z-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis necessitatibus quaerat, a impedit dolor temporibus
              eum laboriosam, asperiores assumenda alias vero laudantium rerum
              reiciendis maiores!
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 text-darkText juntify-between">
              <li>React</li>
              <li>Javascript</li>
              <li>Node js</li>
              <li>Express js</li>
              <li>Mongo DB</li>
            </ul>
            <ProjectsLinks
              link="https://sarowar786.github.io/Practise-Beatles/"
              githubLink="https://github.com/Sarowar786/Practise-Beatles"
            />
          </div>
        </div>
        {/* project four */}
        <div className="flex flex-col lg:flex-row-reverse gap-8 ">
          {/* image */}
          <a
            href="https://marble-4d92b1.netlify.app/"
            target="blank"
            className="w-full lg:w-1/2 overflow-hidden relative group rounded-lg h-auto"
          >
            <img
              src={project4}
              alt="amazon image "
              className="w-full h-full object-cover group-hover:scale-110 duration-200"
            />
            <div className="w-full h-full bg-designColor/10 absolute group-hover:bg-transparent top-0 left-0 rounded-lg duration-300" />
          </a>

          {/* description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between text-end items-end ">
            <div className="text-end ">
              <p className="text-designColor tracking-wide text-lg">
                Fetured Project
              </p>
              <h3 className="font-bold text-2xl">Todo Application</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md lg:-mr-16 z-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis necessitatibus quaerat, a impedit dolor temporibus
              eum laboriosam, asperiores assumenda alias vero laudantium rerum
              reiciendis maiores!
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 text-darkText juntify-between">
              <li>React</li>
              <li>Javascript</li>
              <li>Redux toolkit</li>
              <li>React Persist</li>
            </ul>
            <ProjectsLinks
              link="https://sarowar786.github.io/Marble-project/"
              githubLink="https://github.com/Sarowar786/Marble-project"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
