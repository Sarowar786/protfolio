import About from "./ui/About"
import Archive from "./ui/Archive"
import Banner from "./ui/Banner"
import Contact from "./ui/Contact"
import Experience from "./ui/Experience"
import Header from "./ui/Header"
import LeftSide from "./ui/LeftSide"
import Project from "./ui/Project"
import RightSide from "./ui/RightSide"
import ScrollBtn from "./ui/ScrollBtn"
import { motion } from 'framer-motion';
import Skill from "./ui/Skill"


function App() {

  return (
    <main className="font-bodyFont min-h-screen bg-primaryColor text-lightText">
      <Header />
      <Banner />
      <About />
      <Experience />
      <Project />
      <Archive />
      <Skill/>
      <Contact />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:inline-flex w-32 h-full fixed left-10 bottom-8"
      >
        <LeftSide />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:inline-flex w-32 h-full fixed right-10 bottom-8"
      >
        <RightSide />
      </motion.div>
      <ScrollBtn />
    </main>
  )
}

export default App
