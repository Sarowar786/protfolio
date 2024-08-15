import React from "react";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function SocialLinks({className}) {
  const socialLink = [
    {
      title: "github",
      link: "https://www.github.com/Sarowar786",
      icon: <TbBrandGithub />,
      delay: 0.8,
    },
    {
      title: "facebook",
      link: "https://www.facebook.com/mdgolam.sarowar.942",
      icon: <SlSocialFacebook />,
      delay: 0.85,
    },
    {
      title: "linkedin",
      link: "https://www.linkedin.com/in/md-golam-sarowar-899738227/",
      icon: <SlSocialLinkedin />,
      delay: 0.9,
    },
    {
      title: "instagram",
      link: "https://www.instagram.com/md_golam_sarowar_/",
      icon: <SlSocialInstagram />,
      delay: 0.95,
    },
  ];
  return (
    <div className={twMerge('flex flex-col gap-5', className)}>
      {socialLink?.map((item) => (
        <motion.a
          key={item}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: item?.delay, ease: "easeIn" }}
          href={item?.link}
          target="blank"
        >
          <span className="w-10 h-10 text-xl flex flex-col   bg-hoverColor items-center justify-center border-[1px] rounded-full border-darkText hover:border-designColor duration-200 hover:bg-designColor/10 text-darkText hover:text-designColor">
            {item.icon}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
