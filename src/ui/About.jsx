import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { GoCodeSquare } from "react-icons/go";
import { heroImage } from "../assets";

export default function About() {
  const textArray = [
    { title: "Javascript", link: "/https://github.com/Sarowar786" },
    { title: "React js", link: "/https://github.com/Sarowar786" },
    { title: "Node js", link: "/https://github.com/Sarowar786" },
    { title: "Express js", link: "/https://github.com/Sarowar786" },
    { title: "MongoDB", link: "/https://github.com/Sarowar786" },
    { title: "Next js", link: "/https://github.com/Sarowar786" },
  ];
  return (
    <Container id="about" className="py-10 lg:py-32  flex flex-col gap-8">
      <SectionTitle titleNo="01" title="About me" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 text-darkText font-medium flex flex-col gap-4 ">
          <p>
            Hello! My name is Md Golam Sarowar and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2022 when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>

          <p>
            Fast-forward to today, and I had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odio rem accusantium fugiat veritatis, quidem
            repellat ab natus possimus? Sint, accusamus!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            ullam eligendi dolorum nostrum possimus quos iusto magnam ut esse
            recusandae.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>

          <div className="max-w-[450px] grid grid-cols-2 gap-2 pt-6 ">
            {textArray?.map((item) => (
              <a
                href={item?.link}
                key={item.title}
                className="hover:text-designColor/80 duration-200 flex gap-4 items-center"
              >
                <GoCodeSquare className="text-designColor" /> {item.title}
              </a>
            ))}
          </div>
        </div>
        {/* right part */}
        <div >
          <div>
            <div>
              <img
                src={heroImage}
                alt="hero image"
                className=" h-[450px] rounded-3xl border-2 border-designColor/40  hover:border-designColor  transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
