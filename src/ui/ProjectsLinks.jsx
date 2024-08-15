import React from "react";
import { LiaLinkedinIn } from "react-icons/lia";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";
export default function ProjectsLinks({ link,githubLink }) {
  return (
    <div className="text-2xl flex gap-4 text-center">
      <a
        href={githubLink}
        target="blank"
        className="hover:text-designColor duration-200"
      >
        <TbBrandGithub />
      </a>
      <a
        href={link}
        target="blank"
        className="hover:text-designColor duration-200"
      >
        <RxOpenInNewWindow />
      </a>
      <a
        href="https://www.linkedin.com/in/md-golam-sarowar-899738227/"
        target="blank"
        className="hover:text-designColor duration-200"
      >
        <LiaLinkedinIn />
      </a>
    </div>
  );
}
