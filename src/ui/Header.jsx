import React, { useRef, useState } from "react";
import logo from "../assets/Images/logoN.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import SocialLinks from "./SocialLinks";
export default function Header() {
  const navigation = [
    { title: "home", link: "home", value: "" },
    { title: "about", link: "about", value: "01", delay: "0.1" },
    { title: "experience", link: "experience", value: "02", delay: "0.2" },
    { title: "project", link: "project", value: "03", delay: "0.3" },
    { title: "skill", link: "skill", value: "04", delay: "0.4" },
    { title: "contact", link: "contact", value: "05", delay: "0.5" },
  ];

  const [show, setShow] = useState(false);
  const ref = useRef();
  const handleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  };

  const handleResumeDownload = () => {
    // Trigger the download of the resume file
    const link = document.createElement("a");
    link.href = "/public/Sarowar resume.pdf"; // Update this to your resume file path
    link.download = "Sarowar_Resume.pdf"; // Update this to the desired file name
    link.click();
  };

  return (
    <header className="h-20 shadow-lg shadow-designColor/20 px-4 lg:px-0 items-center flex sticky top-0 z-50 bg-primaryColor">
      <div className="w-[1440px] mx-auto items-center flex justify-between">
        <div>
          <img
            src={logo}
            alt="logo "
            className="w-full h-20 opacity-75 rounded-lg hover:opacity-100 hover:cursor-pointer duration-300 "
          />
        </div>

        <div className=" hidden md:inline-flex gap-7 items-center ">
          <div className="flex gap-7 text-[13px] ">
            {navigation?.map((menu) => (
              <Link
                key={menu?.title}
                to={menu?.link}
                duration={500}
                smooth={true}
                offset={-80}
              >
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: menu?.delay }}
                >
                  <span className="text-designColor mr-1 ">
                    {menu?.value} {menu?.value && "."}{" "}
                  </span>
                  <span className="uppercase tracking-wide font-medium hover:text-designColor duration-300 cursor-pointer ">
                    {menu?.title}
                  </span>
                </motion.p>
              </Link>
            ))}
          </div>
          <motion.button
          onClick={handleResumeDownload}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[13px] uppercase font-medium rounded-md text-designColor border border-designColor tracking-wider px-4 py-2 hover:bg-hoverColor duration-300 cursor-pointer  "
          >
            resume
          </motion.button>
        </div>
        {/* menu button */}
        <div
          onClick={() => setShow(true)}
          className="md:hidden w-6 h-5 flex flex-col justify-between items-center cursor-pointer group overflow-hidden"
        >
          <span className="w-full h-[2px] bg-designColor inline-flex transform group-hover:translate-x-2 transition-all duration-300"></span>
          <span className="w-full h-[2px] bg-designColor inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 "></span>
          <span className="w-full h-[2px] bg-designColor inline-flex transform translate-x-1 group-hover:translate-x-2 transition-all duration-300"></span>
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute md:hidden top-0 right-0 w-full h-screen bg-black/50 flex flex-col items-end z-50 "
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll bg-textBg flex flex-col items-center py-10 relative scrollBerHide"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-designColor hover:text-red-500 absolute top-4 right-4 duration-300 "
              />
              <div className="flex flex-col items-center justify-center">
                <ul className="flex flex-col gap-7 text-base">
                  {navigation?.map((menu) => (
                    <Link
                      key={menu?.title}
                      to={menu?.link}
                      duration={500}
                      smooth={true}
                      offset={-80}
                    >
                      <motion.p
                        onClick={()=> setShow(false)}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: menu?.delay }}
                      >
                        <span className="text-designColor mr-1 ">
                          {menu?.value} {menu?.value && "."}{" "}
                        </span>
                        <span className="uppercase tracking-wide font-medium hover:text-designColor duration-300 cursor-pointer ">
                          {menu?.title}
                        </span>
                      </motion.p>
                    </Link>
                  ))}
                </ul>
                <div className="pt-7 flex flex-col items-center justify-center">
                  <motion.button
                  onClick={handleResumeDownload}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-[13px] uppercase font-medium rounded-md text-designColor border border-designColor tracking-wider px-4 py-2 hover:bg-hoverColor duration-300 cursor-pointer  "
                  >
                    resume
                  </motion.button>
                  <SocialLinks className="flex items-center flex-row gap-5 pt-9  " />
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    href="mailto:sarowar2287@gmail.com"
                  >
                    <p className="text-sm pt-7 tracking-wider text-darkText hover:text-designColor duration-200">
                      sarowar2287@gmail.com
                    </p>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </header>
  );
}
