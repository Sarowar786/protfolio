import React from 'react'
import { motion } from 'framer-motion'

export default function RightSide() {
  return (
    <div className='flex flex-col justify-end items-center gap-28'>
      <a href="mailto:sarowar2287@gmail.com">
           <p className='text-lg rotate-90 w-60 tracking-wider text-designColor/70 hover:text-designColor duration-200'> sarowar2287@gmail.com</p>
      </a>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className='w-[1px] h-32 bg-darkText' />
    </div>
  )
}
