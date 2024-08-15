import React, { useRef, useState } from 'react';
import Container from './Container';
import { projectArray } from '../Constans';
import ArchiveCard from './ArchiveCard';
import { AnimatePresence, motion } from 'framer-motion';

export default function Archive() {
  const [showMore, setShowMore] = useState(false);
  const displayArray = showMore ? projectArray : projectArray.slice(0, 6);

  const projectContainerRef = useRef(null);

  const handleShow = () => {
    if (showMore) {
      setShowMore(false);
      projectContainerRef.current.scrollIntoView({ behavior: 'smooth' }); // Corrected method name
    } else {
      setShowMore(true);
    }
  };

  return (
    <Container className="py-24 max-w-5xl mx-auto">
      <div>
        <div className='flex flex-col gap-1 items-center'>
          <h2 className='text-3xl font-semibold'>Other Noteworthy Projects</h2>
          <p className='text-designColor'>View the archive</p>
        </div>
        <div ref={projectContainerRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          <AnimatePresence>
            {displayArray?.map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ delay: index * 0.1 }}>
                <ArchiveCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className='mt-10 flex items-center justify-center'>
          <button 
            onClick={handleShow}
            className='w-36 h-12 text-designColor rounded-md text-sm border border-designColor hover:bg-designColor/10 duration-200 '>
              {showMore ? 'Show Less' : "Show More"}
          </button>
        </div>
      </div>
    </Container>
  );
}
